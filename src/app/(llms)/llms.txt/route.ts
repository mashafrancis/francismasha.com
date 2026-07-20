import { getLlmsTxtContent } from "@/lib/cached-routes";
import { llmsRequestsCounter, withSpan } from "@/lib/telemetry";

export async function GET() {
  return await withSpan("llms.generate", async () => {
    const content = await getLlmsTxtContent();
    llmsRequestsCounter.add(1);

    return new Response(content, {
      headers: {
        "Content-Type": "text/markdown;charset=utf-8",
      },
    });
  });
}
