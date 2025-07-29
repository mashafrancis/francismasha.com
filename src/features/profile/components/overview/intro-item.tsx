import type { LucideProps } from 'lucide-react';

export function IntroItem({
  icon: Icon,
  content,
  href,
}: {
  icon: React.ComponentType<LucideProps>;
  content: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4 font-sans text-sm">
      <div
        aria-hidden
        className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
      >
        <Icon className="pointer-events-none size-4 text-muted-foreground" />
      </div>

      <p className="text-balance">
        {href ? (
          <a
            className="underline-offset-4 hover:underline"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
