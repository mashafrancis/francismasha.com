import { getLlmsTxtContent } from "@/lib/cached-routes";

export async function GET() {
  const content = await getLlmsTxtContent();

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
