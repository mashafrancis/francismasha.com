import { GlobeIcon, MapPinIcon } from 'lucide-react';

import { USER } from '@/data/user';
import { urlToName } from '@/utils/url';

import { Panel, PanelContent } from '../panel';
import { IntroItem } from './intro-item';
import { JobItem } from './job-item';

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              company={job.company}
              key={index}
              title={job.title}
              website={job.website}
            />
          );
        })}

        <IntroItem content={USER.address} icon={MapPinIcon} />

        {/*<PhoneItem phoneNumber={USER.phoneNumber} />*/}

        {/*<EmailItem email={USER.email} />*/}

        <IntroItem
          content={urlToName(USER.website)}
          href={USER.website}
          icon={GlobeIcon}
        />
      </PanelContent>
    </Panel>
  );
}
