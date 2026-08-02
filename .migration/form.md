# form

2026-08-02, transformation engine (no base-mira registry entry), migrated

## Changed

- `src/components/ui/form.tsx`: removed `radix-ui` Slot and Label type imports; FormControl uses `useRender` + `mergeProps`; FormLabel typed against native Label component

## Left alone

- react-hook-form integration unchanged

## Behavior changes

- None expected (form not used in app code currently)

## Verify by hand

- N/A until form is used in app

Leftover scan: `grep -n "radix-ui\|@radix-ui" src/components/ui/form.tsx` — clean
