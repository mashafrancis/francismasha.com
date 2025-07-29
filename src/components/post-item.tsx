import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { Post } from '@/types/blog';

export function PostItem({
  post,
  shouldPreloadImage,
}: {
  post: Post;
  shouldPreloadImage?: boolean;
}) {
  return (
    <Link
      className={cn(
        'group/post flex flex-col gap-2 p-2',
        'max-sm:screen-line-before max-sm:screen-line-after',
        'sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after'
      )}
      href={`/blog/${post.slug}`}
    >
      {post.metadata.image && (
        <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
          <Image
            alt={post.metadata.title}
            height={630}
            priority={shouldPreloadImage}
            quality={100}
            src={post.metadata.image}
            unoptimized
            width={1200}
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

          {post.metadata.new && (
            <span className="absolute top-1.5 right-1.5 rounded-md bg-info px-1.5 font-medium font-mono text-shadow-xs text-sm text-white">
              New
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-balance font-medium text-lg leading-snug underline-offset-4 group-hover/post:underline">
          {post.metadata.title}
        </h3>

        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-muted-foreground text-sm">
            <time dateTime={dayjs(post.metadata.createdAt).toISOString()}>
              {dayjs(post.metadata.createdAt).format('DD.MM.YYYY')}
            </time>
          </dd>
        </dl>
      </div>
    </Link>
  );
}
