import type { NextConfig } from "next";
import { withAxiom } from "next-axiom";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  transpilePackages: ['next-mdx-remote'],
  allowedDevOrigins: ['francismasha-macbook.local'],
  devIndicators: false,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.francismasha.dev',
        port: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/blog/:slug.md',
        destination: '/blog.md/:slug',
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           // Prevents MIME type sniffing, reducing the risk of malicious file uploads
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           // Controls how much referrer information is included with requests, balancing security and functionality.
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default withAxiom(nextConfig);
