import { LinkIcon } from 'lucide-react';
import { Slot as SlotPrimitive } from 'radix-ui';
import type React from 'react';

import { cn } from '@/lib/utils';

const Slot = SlotPrimitive.Slot;

function Prose({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        'prose prose-sm prose-zinc dark:prose-invert max-w-none font-sans text-foreground',
        'prose-headings:text-balance prose-headings:font-sans prose-headings:font-semibold',
        'prose-h2:border-edge prose-h2:border-b prose-h2:pb-2 prose-h2:text-2xl',
        'prose-lead:text-base',
        'prose-a:break-words prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4',
        'prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-normal prose-code:text-sm prose-code:before:content-none prose-code:after:content-none',
        'prose-hr:border-edge',
        className
      )}
      data-slot="prose"
      {...props}
    />
  );
}

function Code({ className, ...props }: React.ComponentProps<'code'>) {
  const isCodeBlock = 'data-language' in props;

  return (
    <code
      className={cn(
        !isCodeBlock &&
          'not-prose rounded-md border bg-muted/50 px-[0.3rem] py-[0.2rem] font-mono text-xs',
        className
      )}
      data-slot={isCodeBlock ? 'code-block' : 'code-inline'}
      {...props}
    />
  );
}

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps<T extends HeadingTypes> = React.ComponentProps<T> & {
  as?: T;
};

function Heading<T extends HeadingTypes = 'h1'>({
  as,
  className,
  ...props
}: HeadingProps<T>): React.ReactElement {
  const Comp = as ?? 'h1';

  if (!props.id) {
    return <Comp className={className} {...props} />;
  }

  return (
    <Comp
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}
    >
      <a className="peer not-prose" href={`#${props.id}`}>
        {props.children}
      </a>

      <LinkIcon
        aria-label="Link to section"
        className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
      />
    </Comp>
  );
}

export { Code, Heading, Prose };
