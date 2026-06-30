import { getAllPosts } from "@/data/blog";
import { getPostMarkdown } from "@/lib/cached-routes";

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
  const content = await getPostMarkdown(slug);

  if (!content) {
    return new Response("Post not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
