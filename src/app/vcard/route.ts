import { NextResponse } from "next/server";

import { USER } from "@/data/user";
import { getVCardContent } from "@/lib/cached-routes";

export async function GET() {
  const vcard = await getVCardContent();

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  });
}
