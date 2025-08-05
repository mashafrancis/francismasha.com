import dayjs from 'dayjs';
import type { ProfilePage as PageSchema, WithContext } from 'schema-dts';

import { USER } from '@/data/user';
import { About } from '@/features/profile/components/about';
import { Blog } from '@/features/profile/components/blog';
import { Experiences } from '@/features/profile/components/experiences';
import { Overview } from '@/features/profile/components/overview';
import { ProfileHeader } from '@/features/profile/components/profile-header';
import { Projects } from '@/features/profile/components/projects';
import { SocialLinks } from '@/features/profile/components/social-links';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, '\\u003c'),
        }}
        type="application/ld+json"
      />

      <div className="mx-auto md:max-w-3xl">
        {/*<ProfileCover />*/}
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        <Blog />
        <Separator />

        {/*<Awards />*/}
        {/*<Separator />*/}

        {/*<Certifications />*/}
        {/*<Separator />*/}

        {/*<Brand />*/}
        {/*<Separator />*/}
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex h-8 w-full border-edge border-x',
        'before:-left-[100vw] before:-z-1 before:absolute before:h-8 before:w-[200vw]',
        'before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56',
        className
      )}
    />
  );
}
