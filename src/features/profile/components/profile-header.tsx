import Image from 'next/image';

import { SimpleTooltip } from '@/components/ui/tooltip';
import { USER } from '@/data/user';
import { cn } from '@/lib/utils';
import { FlipSentences } from '@/registry/flip-sentences';

import { VerifiedIcon } from './verified-icon';

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-edge border-x">
      <div className="shrink-0 border-edge border-r">
        <div className="mx-[2px] my-[3px]">
          <Image
            alt={`${USER.displayName}'s avatar`}
            className="size-32 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
            height={128}
            priority
            quality={100}
            src={USER.avatar}
            width={128}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            'flex grow items-end pb-1 pl-4',
            'bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]'
          )}
        >
          <div className="line-clamp-1 select-none font-sans text-xs text-zinc-300 max-sm:hidden dark:text-zinc-800">
            {'text-3xl '}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {' font-medium'}
          </div>
        </div>

        <div className="border-edge border-t">
          <h1 className="flex items-center pl-4 font-semibold text-3xl">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] text-info" />
            </SimpleTooltip>
          </h1>

          <div className="h-12 border-edge border-t py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
          </div>
        </div>
      </div>
    </div>
  );
}
