import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";

const allPosts = getAllPosts();

const content = `# chanhdai.com

> chanhdai.com is my minimal portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Awards](${SITE_INFO.url}/awards.md): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
