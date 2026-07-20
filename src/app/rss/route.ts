import { getRssFeed } from "@/lib/cached-routes";
import { feedRssRequestsCounter, withSpan } from "@/lib/telemetry";

export async function GET() {
  return await withSpan("feed.rss.generate", async () => {
    const rssFeed = await getRssFeed();
    feedRssRequestsCounter.add(1);

    return new Response(rssFeed, {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  });
}
