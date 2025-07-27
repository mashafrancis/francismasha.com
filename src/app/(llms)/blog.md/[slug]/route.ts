import dayjs from "dayjs";

import { getAllPosts } from "@/data/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return new Response("Post not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new Response(
    `# ${post.metadata.title}

${post.metadata.description}

${post.content.trim()}

Last updated on ${dayjs(post.metadata.updatedAt).format("MMMM D, YYYY")}
`,
    {
      headers: {
        "Content-Type": "text/markdown;charset=utf-8",
      },
    }
  );
}
