# button

2026-08-02, golden pair via shadcn CLI (base-mira), migrated

## Changed

- `src/components/ui/button.tsx`: overwritten with `@base-ui/react/button` primitive; dropped `asChild`/`Slot`; sizes renamed (`icon:lg` → `icon-lg`)
- Consumer sweep: 15+ call sites updated from `asChild` to `render` prop

## Left alone

- N/A

## Behavior changes

- Smaller default size (h-7 vs h-8), rounded-md vs rounded-full (intentional base-mira restyle)

## Verify by hand

- Link buttons (nav, docs pages, 404)
- Icon buttons (GitHub, scroll-to-top with motion.button render)
- Open in v0 button

Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/button.tsx` — clean
