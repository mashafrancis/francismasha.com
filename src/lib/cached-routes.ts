import dayjs from "dayjs";
import { cacheLife, cacheTag } from "next/cache";
import sharp from "sharp";
import VCard from "vcard-creator";

import { SITE_INFO } from "@/config/site";
import { getAllPosts, getPostBySlug } from "@/data/blog";
import { USER } from "@/data/user";
import { AWARDS } from "@/features/profile/data/awards";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";
import { EXPERIENCES } from "@/features/profile/data/experiences";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

export async function getAboutMarkdown() {
  "use cache";
  cacheLife("max");

  return `# About

${USER.about.trim()}

## Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Location: ${USER.address}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`;
}

export async function getAwardsMarkdown() {
  "use cache";
  cacheLife("max");

  return `# Awards

${AWARDS.map((item) => `## ${item.prize} | ${item.title}\n\n${item.description}`).join("\n\n")}
`;
}

export async function getCertificationsMarkdown() {
  "use cache";
  cacheLife("max");

  return `# Certifications

${CERTIFICATIONS.map((item) => `- [${item.title}](${item.credentialURL})`).join("\n")}
`;
}

export async function getExperienceMarkdown() {
  "use cache";
  cacheLife("max");

  return `# Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.map((skill) => skill).join(", ") || "N/A";
      return `## ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${position.description?.trim()}`;
    })
    .join("\n\n")
).join("\n\n")}
`;
}

export async function getProjectsMarkdown() {
  "use cache";
  cacheLife("max");

  return `# Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  return `## ${item.title}\n\nProject URL: ${item.link}${skills}${description}`;
}).join("\n\n")}
`;
}

export async function getLlmsTxtContent() {
  "use cache";
  cacheLife("max");
  cacheTag("blog");

  const allPosts = await getAllPosts();

  return `# francismasha.com

> francismasha.com is my minimal portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Awards](${SITE_INFO.url}/awards.md): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
`;
}

export async function getRssFeed() {
  "use cache";
  cacheLife("max");
  cacheTag("blog");

  const allPosts = await getAllPosts();

  const itemsXml = allPosts
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${SITE_INFO.url}/blog/${post.slug}</link>
          <description>${post.metadata.description || ""}</description>
          <pubDate>${dayjs(post.metadata.createdAt).toISOString()}</pubDate>
        </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Blog | ${SITE_INFO.name}</title>
      <link>${SITE_INFO.url}</link>
      <description>${SITE_INFO.description}</description>
      ${itemsXml}
    </channel>
  </rss>`;
}

export async function getVCardContent() {
  "use cache";
  cacheLife("weeks");

  const card = new VCard();
  const [locality = "", country = ""] = USER.address
    .split(",")
    .map((part) => part.trim());

  card
    .addName({ familyName: USER.lastName, givenName: USER.firstName })
    .addPhoneNumber({ number: decodePhoneNumber(USER.phoneNumber) })
    .addAddress({ locality, country })
    .addEmail({ address: decodeEmail(USER.email) })
    .addUrl({ url: USER.website });

  const photo = await getVCardPhoto(USER.avatar);
  if (photo) {
    card.addPhoto({ image: photo.image, mime: "JPEG" });
  }

  if (USER.jobs.length > 0) {
    const job = USER.jobs[0];
    card.addCompany({ name: job.company }).addJobtitle(job.title);
  }

  return card.toString();
}

export async function getStargazersCount() {
  "use cache";
  cacheLife("days");
  cacheTag("github-stars");

  const data = await fetch(
    "https://api.github.com/repos/mashafrancis/francismasha.com",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const json = await data.json();
  return json?.stargazers_count ?? -1;
}

async function getVCardPhoto(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length === 0) {
      return null;
    }

    const contentType = res.headers.get("Content-Type") || "";
    if (!contentType.startsWith("image/")) {
      return null;
    }

    const jpegBuffer = await sharp(buffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer();
    const image = jpegBuffer.toString("base64");

    return {
      image,
      mime: "JPEG",
    };
  } catch {
    return null;
  }
}

export async function getProfilePageJsonLd() {
  "use cache";
  cacheLife("max");

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

export async function getSitemapEntries() {
  "use cache";
  cacheLife("max");
  cacheTag("blog");

  const posts = await getAllPosts();
  const components = posts.filter(
    (post) => post.metadata?.category === "components"
  );

  const postEntries = posts.map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const componentEntries = components.map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/blog", "/components"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...postEntries, ...componentEntries];
}

export async function getPostMarkdown(slug: string) {
  "use cache";
  cacheLife("max");
  cacheTag("blog");

  const post = await getPostBySlug(slug);

  if (!post) {
    return null;
  }

  return `# ${post.metadata.title}

${post.metadata.description}

${post.content.trim()}

Last updated on ${dayjs(post.metadata.updatedAt).format("MMMM D, YYYY")}
`;
}
