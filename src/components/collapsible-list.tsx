import { useRender } from "@base-ui/react/use-render";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function Slottable({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement;
}) {
  return useRender({
    defaultTagName: "div",
    render: children,
    props: { className },
  });
}

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
        <Slottable
          className="border-edge border-b"
          key={typeof keyExtractor === "function" ? keyExtractor(award) : index}
        >
          {renderItem(award) as React.ReactElement}
        </Slottable>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((award, index) => (
          <Slottable
            className="border-edge border-b"
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(award)
                : max + index
            }
          >
            {renderItem(award) as React.ReactElement}
          </Slottable>
        ))}
      </CollapsibleContent>

      {items.length > max && (
        <div className="flex h-12 items-center justify-center pb-px">
          <CollapsibleTrigger
            render={
              <Button
                className="group/collapsible-trigger flex"
                variant="default"
              />
            }
          >
            <span className="hidden group-data-closed/collapsible-trigger:block">
              Show More
            </span>

            <span className="hidden group-data-open/collapsible-trigger:block">
              Show Less
            </span>

            <ChevronDownIcon
              aria-hidden
              className="group-data-open/collapsible-trigger:rotate-180"
            />
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  );
}
