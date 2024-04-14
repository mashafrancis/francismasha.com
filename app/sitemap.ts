import { getBlogPosts } from "@/lib/db/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://francismasha.com/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  const routes = ["", "/about", "/blog", "/guestbook", "/uses"].map(
    (route) => ({
      url: `https://francismasha.com${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return [...routes, ...blogs];
}
