import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type React from "react";

import { cn } from "@/lib/utils";

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "screen-line-before screen-line-after border-edge border-x",
        className
      )}
      data-slot="panel"
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("screen-line-after px-4", className)}
      data-slot="panel-header"
      {...props}
    />
  );
}

function PanelTitle({
  className,
  render,
  ...props
}: useRender.ComponentProps<"h2">) {
  return useRender({
    defaultTagName: "h2",
    render,
    props: mergeProps(
      {
        className: cn("font-semibold text-3xl", className),
        "data-slot": "panel-title",
      },
      props
    ),
  });
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("p-4", className)} data-slot="panel-body" {...props} />
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle };
