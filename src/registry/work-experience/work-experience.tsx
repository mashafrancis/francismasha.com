import {
  BriefcaseBusinessIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

/**
 * Represents the valid keys of the `iconMap` object, used to specify the type of icon
 * associated with an experience position.
 */
export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string;
  /** The job title or position name */
  title: string;
  /** The period during which the position was held (e.g., "Jan 2020 - Dec 2021") */
  employmentPeriod: string;
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string;
  /** A brief description of the position or responsibilities */
  description?: string;
  /** An icon representing the position */
  icon?: ExperiencePositionIconType;
  /** A list of skills associated with the position */
  skills?: string[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string;
  /** Name of the company where the experience was gained */
  companyName: string;
  /** URL or path to the company's logo image */
  companyLogo?: string;
  /** List of positions held at the company */
  positions: ExperiencePositionItemType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceItemType[];
}) {
  return (
    <div className={cn('bg-background px-4', className)}>
      {experiences.map((experience) => (
        <ExperienceItem experience={experience} key={experience.id} />
      ))}
    </div>
  );
}

export function ExperienceItem({
  experience,
}: {
  experience: ExperienceItemType;
}) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3">
        <div
          aria-hidden
          className="flex size-6 shrink-0 items-center justify-center"
        >
          {experience.companyLogo ? (
            <Image
              alt={experience.companyName}
              className="rounded-full"
              height={24}
              quality={100}
              src={experience.companyLogo}
              unoptimized
              width={24}
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="font-medium text-lg leading-snug">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePositionItemType;
}) {
  const ExperienceIcon = iconMap[position.icon || 'business'];

  return (
    <Collapsible asChild defaultOpen={position.isExpanded}>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger className="group/experience not-prose block w-full select-none text-left">
          <div className="relative z-1 mb-1 flex items-center gap-3 bg-background">
            <div
              aria-hidden
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
            >
              <ExperienceIcon className="size-4" />
            </div>

            <h4 className="flex-1 text-balance font-medium text-base">
              {position.title}
            </h4>

            <div
              aria-hidden
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
            >
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-9 text-muted-foreground text-sm">
            {position.employmentType && (
              <>
                <dl>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )}

            <dl>
              <dt className="sr-only">Employment Period</dt>
              <dd>{position.employmentPeriod}</dd>
            </dl>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {position.description && (
            <Prose className="pt-2 pl-9">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
              {position.skills.map((skill, index) => (
                <li className="flex" key={index}>
                  <Skill>{skill}</Skill>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'prose prose-sm prose-zinc dark:prose-invert max-w-none font-mono text-foreground',
        'prose-a:break-words prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4',
        'prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-normal prose-code:text-sm prose-code:before:content-none prose-code:after:content-none',
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-muted-foreground text-xs',
        className
      )}
      {...props}
    />
  );
}
