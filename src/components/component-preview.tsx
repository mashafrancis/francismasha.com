'use client';

import { RepeatIcon } from 'lucide-react';
import React, { useMemo, useState } from 'react';

import { Index } from '@/__registry__/index';
import { cn } from '@/lib/utils';

import { CodeCollapsibleWrapper } from './code-collapsible-wrapper';
import { OpenInV0Button } from './open-in-v0';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { SimpleTooltip } from './ui/tooltip';
import { Code as CodeInline } from './ui/typography';

export function ComponentPreview({
  className,
  name,
  openInV0Url,
  canReplay = false,
  notProse = true,
  codeCollapsible = false,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  name: string;
  openInV0Url?: string;
  canReplay?: boolean;
  notProse?: boolean;
  codeCollapsible?: boolean;
}) {
  const [replay, setReplay] = useState(0);

  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];

  const Preview = useMemo(() => {
    const Component = Index[name]?.component;

    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component <CodeInline>{name}</CodeInline> not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div className={cn('my-6', notProse && 'not-prose', className)} {...props}>
      <Tabs className="gap-4" defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="rounded-lg border border-edge bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-center bg-size-[10px_10px] bg-zinc-950/0.75 p-4 [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5">
            {(canReplay || openInV0Url) && (
              <div className="flex justify-end gap-2">
                {canReplay && (
                  <SimpleTooltip content="Replay">
                    <Button
                      onClick={() => setReplay((v) => v + 1)}
                      size="icon"
                      variant="outline"
                    >
                      <RepeatIcon />
                    </Button>
                  </SimpleTooltip>
                )}

                {openInV0Url && <OpenInV0Button url={openInV0Url} />}
              </div>
            )}

            <div
              className="flex min-h-80 items-center justify-center font-sans"
              key={replay}
            >
              <React.Suspense
                fallback={
                  <div className="flex items-center justify-center text-muted-foreground text-sm">
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div>
          </div>
        </TabsContent>

        <TabsContent className="[&>figure]:m-0" value="code">
          {codeCollapsible ? (
            <CodeCollapsibleWrapper className="my-0">
              {Code}
            </CodeCollapsibleWrapper>
          ) : (
            Code
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
