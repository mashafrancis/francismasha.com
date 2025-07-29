import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "heimdall",
    title: "Heimdall - Web Observability Performance Tool",
    period: {
      start: "05.2023",
    },
    link: "https://heimdall.francismasha.com",
    skills: [
      "Open Source",
      "OpenTelemetry",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Error $ bugs tracking",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `A global observability perspective for your web and API's performance with real-time monitoring.
- Synthetic monitoring for web and API's'
- Error and bugs tracking
- Web analytics and vitals insights
- Opentelemetry logs, metrics, and traces
`,
    // logo: "https://assets.francismasha.dev/images/project-logos/heimdall.svg",
    isExpanded: true,
  },
  {
    id: "francismasha",
    title: "francismasha.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/mashafrancis/francismasha.com",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `A minimal portfolio, component registry, and blog.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
    // logo: "https://assets.francismasha.dev/images/francismasha.png",
    isExpanded: true,
  },
  {
    id: "almons-ui",
    title: "almond-ui",
    period: {
      start: "03.2024",
    },
    link: "https://ui.francismasha.com",
    skills: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    logo: "https://assets.francismasha.dev/images/project-logos/almond-ui.svg",
  },
  {
    id: "sanctissima",
    title: "Sanctissima",
    period: {
      start: "2023",
    },
    link: "https://sanctissima-dgmstabky-mashafrancis.vercel.app",
    logo: "https://assets.francismasha.dev/project-logos/sanctissima.png",
    skills: [
      "Blog content",
      "Microfrontends",
      "Platforms",
    ],
    description:
      "- Church based blog content platform for churches to share their faith.",
  },
  {
    id: "plutus",
    title: "Plutus finance",
    period: {
      start: "07.2023",
    },
    link: "https://plutus.francismasha.com",
    logo: "https://assets.francismasha.dev/images/project-logos/plutus.png",
    skills: ["Finance", "Supabase", "Postgres", "React Native", "Expo"],
    description: `- Personal finance management app for web, iOS and Android
- Requirement: Users must be able to create, read, update, and delete transactions
`,
  },
  {
    id: "charts-stuff",
    title: "Charts Stuff",
    period: {
      start: "2025",
    },
    link: "https://charts-stuff.vercel.app/",
    skills: ["Data visualization", "JavaScript", "React"],
    description: `- Experimental charts library for data visualization
- Custom legend and tooltips`,
  },
];
