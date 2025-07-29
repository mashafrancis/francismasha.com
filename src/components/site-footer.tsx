import { RssIcon } from 'lucide-react';

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from '@/config/site';
import { cn } from '@/lib/utils';

import { Icons } from './icons';

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-edge border-x pt-4 md:max-w-3xl">
        <p className="mb-1 text-balance px-4 text-center font-sans text-muted-foreground text-sm">
          Inspired by tailwindcss.com + ui.shadcn.com + https://chanhdai.com
        </p>

        <p className="mb-4 text-balance px-4 text-center font-sans text-muted-foreground text-sm">
          Built by{' '}
          <a
            className="link"
            href="https://x.com/mashafrancis"
            rel="noopener"
            target="_blank"
          >
            mashafrancis
          </a>
          . The source code is available on{' '}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            rel="noopener"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>

        <div
          className={cn(
            'screen-line-before screen-line-after flex w-full before:z-1 after:z-1',
            'bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56'
          )}
        >
          <div className="mx-auto flex items-center justify-center gap-3 border-edge border-x bg-background px-4">
            <a
              className="flex font-medium font-sans text-muted-foreground text-xs"
              href={`${SITE_INFO.url}/llms.txt`}
              rel="noopener noreferrer"
              target="_blank"
            >
              llms.txt
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              href={`${SITE_INFO.url}/rss`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RssIcon className="size-4" />
              <span className="sr-only">RSS</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                'https://www.dmca.com/ProtectionPro.aspx'
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icons.dmca className="h-5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
