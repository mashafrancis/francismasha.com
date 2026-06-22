import dayjs from 'dayjs';

import { getAllPosts, getPostBySlug } from '@/data/blog';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return new Response('Post not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return new Response(
    `# ${post.metadata.title}

${post.metadata.description}

${post.content.trim()}

Last updated on ${dayjs(post.metadata.updatedAt).format('MMMM D, YYYY')}
`,
    {
      headers: {
        'Content-Type': 'text/markdown;charset=utf-8',
      },
    }
  );
}
