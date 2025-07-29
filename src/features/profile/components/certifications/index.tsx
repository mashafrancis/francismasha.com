import { CollapsibleList } from '@/components/collapsible-list';

import { CERTIFICATIONS } from '../../data/certifications';
import { Panel, PanelHeader, PanelTitle } from '../panel';
import { CertificationItem } from './certification-item';

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <sup className="ml-1 select-none font-medium font-mono text-muted-foreground text-sm">
            ({CERTIFICATIONS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        max={8}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  );
}
