import { BrandContextMenu } from "@/components/brand-context-menu";
import { FrancisMashaMark } from "@/components/francis-masha-mark";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          'aspect-2/1 select-none border-edge border-x sm:aspect-3/1',
          'flex items-center justify-center text-black dark:text-white',
          'screen-line-before screen-line-after before:-top-px after:-bottom-px',
          'bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-black/0.75 bg-center bg-size-[10px_10px] [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5'
        )}
      >
        <FrancisMashaMark className="h-1/4 w-auto" id="js-cover-mark" />
      </div>
    </BrandContextMenu>
  );
}
