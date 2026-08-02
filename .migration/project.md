# project

2026-08-02, golden pair via shadcn CLI (base-mira restyle), migration complete

## Changed

- `components.json`: style `default` → `base-mira`
- `package.json`: added `@base-ui/react`, removed `radix-ui` (-61 transitive packages)
- `src/styles/globals.css`: added `@import "shadcn/tailwind.css"`
- 12 UI wrappers overwritten via `shadcn add --overwrite` (label, button, separator, scroll-area, collapsible, tabs, tooltip, dialog, dropdown-menu, context-menu, command)
- `form.tsx`: manual Slot → useRender migration (no base-mira registry entry)
- `typography.tsx`, `panel.tsx`, `collapsible-list.tsx`: Slot → useRender
- `tooltip.tsx`: restored `SimpleTooltip` helper with `render` prop
- `providers.tsx`: added `TooltipProvider` wrapper
- ~25 consumer call sites: `asChild` → `render`; `icon:lg` → `icon-lg`
- Data attribute selectors updated: `data-[state=*]` → `data-open`/`data-closed`/`data-active`
- New shadcn files from command overwrite: `input.tsx`, `textarea.tsx`, `input-group.tsx`
- Registry rebuilt via `pnpm registry:build`

## Left alone

- `command.tsx` cmdk core (third-party, not Radix)
- `sonner.tsx`, `table.tsx`, `tag.tsx` (no Radix dependency)
- `use-controllable-state.ts`, `use-layout-effect.tsx` (vendored logic, comment-only Radix reference)
- `command-menu.tsx` `CommandItem asChild` (cmdk API, not Radix)
- `tech-stack.ts` Radix UI marketing link (content, not a dependency)

## Behavior changes

- Tabs: Base UI defaults to manual activation (keyboard focus does not auto-switch panels)
- Menu checkbox/radio items: `closeOnClick` defaults false (Radix closed on select)
- Tooltip: `delayDuration` renamed to `delay` on Provider; no `disableHoverableContent`
- Visual restyle: base-mira sizing (h-7 buttons), rounded-md vs previous rounded-full, new animation model
- CollapsibleContent: `forceMount` → `keepMounted`

## Verify by hand

- Command palette (dialog + cmdk focus)
- Mobile nav dropdown
- Brand context menu (right-click)
- Profile collapsibles (experience, projects, awards)
- Tooltips on tech stack / profile header
- Tab switching in MDX code blocks
- Scroll-to-top button
- Dark mode on dialogs/menus

## Build result

- `pnpm build`: success
- `pnpm check-types`: 3 pre-existing errors in `instrumentation.ts` and `src/proxy.ts` (unchanged by migration)
- Radix wrappers remaining: 0
