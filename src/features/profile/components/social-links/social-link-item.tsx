import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';

import type { SocialLink } from '@/features/profile/types/social-links';
import { cn } from '@/lib/utils';

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        'group/link flex cursor-pointer select-none items-center gap-4 rounded-2xl p-4 pr-2 transition-colors',
        'max-sm:screen-line-before max-sm:screen-line-after',
        'sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after'
      )}
      href={href}
      rel="noopener"
      target="_blank"
    >
      <div className="relative size-12 shrink-0">
        <Image
          alt={title}
          className="rounded-xl"
          height={48}
          quality={100}
          src={icon}
          unoptimized
          width={48}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/8 ring-inset dark:ring-white/8" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
