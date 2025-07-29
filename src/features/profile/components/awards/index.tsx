import dayjs from 'dayjs';

import { CollapsibleList } from '@/components/collapsible-list';

import { AWARDS } from '../../data/awards';
import { Panel, PanelHeader, PanelTitle } from '../panel';
import { AwardItem } from './award-item';

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return dayjs(b.date).diff(dayjs(a.date));
});

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader>
        <PanelTitle>
          Honors & Awards
          <sup className="ml-1 select-none font-medium font-mono text-muted-foreground text-sm">
            ({AWARDS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_AWARDS}
        keyExtractor={(item) => item.id}
        max={8}
        renderItem={(item) => <AwardItem award={item} />}
      />
    </Panel>
  );
}
