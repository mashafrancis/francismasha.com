import Image from 'next/image';

import { SimpleTooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { TECH_STACK } from '../data/tech-stack';
import { Panel, PanelContent, PanelHeader, PanelTitle } from './panel';

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          '[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5',
          'bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-center bg-size-[10px_10px]',
          'bg-zinc-950/0.75 dark:bg-white/0.75'
        )}
      >
        <ul className="flex select-none flex-wrap gap-4">
          {TECH_STACK.map((tech) => {
            return (
              <li className="flex" key={tech.key}>
                <SimpleTooltip content={tech.title}>
                  <a
                    aria-label={tech.title}
                    href={tech.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          alt={`${tech.title} light icon`}
                          className="hidden [html.light_&]:block"
                          height={32}
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                          unoptimized
                          width={32}
                        />
                        <Image
                          alt={`${tech.title} dark icon`}
                          className="hidden [html.dark_&]:block"
                          height={32}
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                          unoptimized
                          width={32}
                        />
                      </>
                    ) : (
                      <Image
                        alt={`${tech.title} icon`}
                        height={32}
                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                        unoptimized
                        width={32}
                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
