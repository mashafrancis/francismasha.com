import type { Metadata } from 'next';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { getAllLoc } from '@/data/blog';

export const metadata: Metadata = {
  title: '1loc',
  description: 'A collection of one line of code utilities.',
};

export default function Page() {
  const posts = getAllLoc();

  return (
    <div className="min-h-svh [--color-react:#087EA4] dark:[--color-react:#58C4DC]">
      <div className="screen-line-after px-4">
        <h1 className="font-semibold text-3xl">1loc</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="text-balance font-sans text-muted-foreground text-sm">
          {metadata.description}
        </p>
      </div>

      {posts.map((post) => (
        <Link
          className="group/post flex items-center border-edge border-b pr-4"
          href={`/components/${post.slug}`}
          key={post.slug}
        >
          <Icons.react
            aria-hidden
            className="mx-4 size-5 shrink-0 text-(--color-react)"
          />

          <div className="border-edge border-l border-dashed p-4">
            <h2 className="text-balance font-medium leading-snug underline-offset-4 group-hover/post:underline">
              {post.metadata.title}
            </h2>
          </div>

          {post.metadata.new && (
            <span
              aria-hidden
              className="shrink-0 rounded-md bg-info px-1.5 font-medium font-mono text-shadow-xs text-sm text-white"
            >
              New
            </span>
          )}
        </Link>
      ))}

      <div className="h-4" />
    </div>
  );
}
