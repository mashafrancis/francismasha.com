import { NextResponse } from "next/server";

import { USER } from "@/data/user";
import { getVCardContent } from "@/lib/cached-routes";
import { vcardDownloadCounter, withSpan } from "@/lib/telemetry";

export async function GET() {
  return await withSpan("vcard.download", async () => {
    const vcard = await getVCardContent();
    vcardDownloadCounter.add(1);

    return new NextResponse(vcard, {
      status: 200,
      headers: {
        "Content-Type": "text/x-vcard",
        "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
      },
    });
  });
}
