import { ChevronDownIcon } from 'lucide-react';
import { Slot as SlotPrimitive } from 'radix-ui';
import type React from 'react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const Slot = SlotPrimitive.Slot;

export function CollapsibleList<T>({
  items,
  max = 3,

  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;

  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible>
      {items.slice(0, max).map((award, index) => (
        <Slot
          className="border-edge border-b"
          key={typeof keyExtractor === 'function' ? keyExtractor(award) : index}
        >
          {renderItem(award)}
        </Slot>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((award, index) => (
          <Slot
            className="border-edge border-b"
            key={
              typeof keyExtractor === 'function'
                ? keyExtractor(award)
                : max + index
            }
          >
            {renderItem(award)}
          </Slot>
        ))}
      </CollapsibleContent>

      {items.length > max && (
        <div className="flex h-12 items-center justify-center pb-px">
          <CollapsibleTrigger asChild>
            <Button
              className="group/collapsible-trigger flex"
              variant="default"
            >
              <span className="hidden group-data-[state=closed]/collapsible-trigger:block">
                Show More
              </span>

              <span className="hidden group-data-[state=open]/collapsible-trigger:block">
                Show Less
              </span>

              <ChevronDownIcon
                aria-hidden
                className="group-data-[state=open]/collapsible-trigger:rotate-180"
              />
            </Button>
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  );
}
