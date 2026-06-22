import { getProjectsMarkdown } from '@/lib/cached-routes';

export async function GET() {
  const content = await getProjectsMarkdown();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown;charset=utf-8',
    },
  });
}
