import { getRssFeed } from '@/lib/cached-routes';

export async function GET() {
  const rssFeed = await getRssFeed();

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
