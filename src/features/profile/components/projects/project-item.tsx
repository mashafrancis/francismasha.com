import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  InfinityIcon,
  LinkIcon,
} from 'lucide-react';
import Image from 'next/image';

import { Icons } from '@/components/icons';
import { Markdown } from '@/components/markdown';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Tag } from '@/components/ui/tag';
import { SimpleTooltip } from '@/components/ui/tooltip';
import { Prose } from '@/components/ui/typography';
import { UTM_PARAMS } from '@/config/site';
import { addQueryParams } from '@/utils/url';

import type { Project } from '../../types/projects';

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <Collapsible asChild defaultOpen={project.isExpanded}>
      <div className={className}>
        <div className="flex items-center">
          {project.logo ? (
            <Image
              alt={project.title}
              aria-hidden="true"
              className="mx-4 flex size-6 shrink-0"
              height={32}
              quality={100}
              src={project.logo}
              unoptimized
              width={32}
            />
          ) : (
            <div
              aria-hidden="true"
              className="mx-4 flex size-6 shrink-0 items-center justify-center text-muted-foreground"
            >
              <Icons.project className="size-5" />
            </div>
          )}

          <div className="flex-1 border-edge border-l border-dashed">
            <CollapsibleTrigger className="group/project flex w-full select-none items-center gap-4 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 text-balance font-medium leading-snug">
                  {project.title}
                </h3>

                <dl className="text-muted-foreground text-sm">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          aria-hidden
                          className="size-4.5 translate-y-[0.5px]"
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              <SimpleTooltip content="Open Project Link">
                <a
                  className="flex size-6 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
                  href={addQueryParams(project.link, UTM_PARAMS)}
                  rel="noopener"
                  target="_blank"
                >
                  <LinkIcon className="pointer-events-none size-4" />
                  <span className="sr-only">Open Project Link</span>
                </a>
              </SimpleTooltip>

              <div
                aria-hidden
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
              >
                <ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="space-y-4 border-edge border-t border-dashed p-4">
            {project.description && (
              <Prose>
                <Markdown>{project.description}</Markdown>
              </Prose>
            )}

            {project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li className="flex" key={index}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
