import { Button } from '@/components/ui/button';

import { Icons } from './icons';

export function OpenInV0Button({ url }: { url: string }) {
  return (
    <Button asChild className="not-prose gap-1 font-sans" variant="default">
      <a
        aria-label="Open in v0"
        href={`https://v0.dev/chat/api/open?url=${url}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Open in
        <Icons.v0 className="size-5" />
      </a>
    </Button>
  );
}
