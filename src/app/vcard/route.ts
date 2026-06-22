import { NextResponse } from "next/server";
import sharp from "sharp";
import VCard from "vcard-creator";

import { USER } from "@/data/user";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

export const dynamic = 'force-static';

export async function GET() {
  const card = new VCard();
  const [locality = '', country = ''] = USER.address
    .split(',')
    .map((part) => part.trim());

  card
    .addName({ familyName: USER.lastName, givenName: USER.firstName })
    .addPhoneNumber({ number: decodePhoneNumber(USER.phoneNumber) })
    .addAddress({ locality, country })
    .addEmail({ address: decodeEmail(USER.email) })
    .addUrl({ url: USER.website });

  const photo = await getVCardPhoto(USER.avatar);
  if (photo) {
    card.addPhoto({ image: photo.image, mime: 'JPEG' });
  }

  if (USER.jobs.length > 0) {
    const job = USER.jobs[0];
    card.addCompany({ name: job.company }).addJobtitle(job.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      'Content-Type': 'text/x-vcard',
      'Content-Disposition': `attachment; filename=${USER.username}-vcard.vcf`,
    },
  });
}

async function getVCardPhoto(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length === 0) {
      return null;
    }

    const contentType = res.headers.get('Content-Type') || '';
    if (!contentType.startsWith('image/')) {
      return null;
    }

    const jpegBuffer = await convertImageToJpeg(buffer);
    const image = jpegBuffer.toString('base64');

    return {
      image,
      mime: 'JPEG',
    };
  } catch {
    return null;
  }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  const jpegBuffer = await sharp(imageBuffer)
    .jpeg({
      quality: 90,
      progressive: true,
      mozjpeg: true,
    })
    .toBuffer();

  return jpegBuffer;
}
