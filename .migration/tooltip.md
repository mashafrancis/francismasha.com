# tooltip

2026-08-02, golden pair via shadcn CLI + manual SimpleTooltip restore, migrated

## Changed

- `src/components/ui/tooltip.tsx`: overwritten with Base UI Portal > Positioner > Popup anatomy; `delayDuration` → `delay`
- Restored `SimpleTooltip` helper using `TooltipTrigger render={children}`
- `src/components/providers.tsx`: added app-level `TooltipProvider`

## Left alone

- N/A

## Behavior changes

- Tooltip styling changed to base-mira (foreground bg, smaller text)
- No `disableHoverableContent` equivalent

## Verify by hand

- Tech stack tooltips
- Profile header verified badge
- Award reference attachment tooltip
- Component preview replay tooltip

Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/tooltip.tsx` — clean
