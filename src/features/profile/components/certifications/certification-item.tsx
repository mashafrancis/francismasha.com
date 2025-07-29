import dayjs from 'dayjs';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';

import { getIcon, Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import type { Certification } from '../../types/certifications';

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  return (
    <a
      className={cn('group/cert flex items-center pr-2', className)}
      href={certification.credentialURL}
      rel="noopener"
      target="_blank"
    >
      {certification.issuerLogoURL ? (
        <Image
          alt={certification.issuer}
          aria-hidden
          className="mx-4 flex size-6 shrink-0"
          height={32}
          quality={100}
          src={certification.issuerLogoURL}
          unoptimized
          width={32}
        />
      ) : (
        <div
          aria-hidden
          className="mx-4 flex size-6 shrink-0 items-center justify-center [&_svg]:size-5 [&_svg]:text-muted-foreground"
        >
          {getIcon(certification.issuerIconName) ?? <Icons.certificate />}
        </div>
      )}

      <div className="flex-1 space-y-1 border-edge border-l border-dashed p-4 pr-2">
        <h3 className="text-balance font-medium leading-snug underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-sm">
          <dl>
            <dt className="sr-only">Issued by</dt>
            <dd>
              <span aria-hidden>@</span>
              <span className="ml-0.5">{certification.issuer}</span>
            </dd>
          </dl>

          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />

          <dl>
            <dt className="sr-only">Issued on</dt>
            <dd>
              <time dateTime={dayjs(certification.issueDate).toISOString()}>
                {dayjs(certification.issueDate).format('DD.MM.YYYY')}
              </time>
            </dd>
          </dl>
        </div>
      </div>

      {certification.credentialURL && (
        <ArrowUpRightIcon
          aria-hidden
          className="size-4 text-muted-foreground"
        />
      )}
    </a>
  );
}
