import type { Registry } from 'shadcn/registry';

export const lib: Registry['items'] = [
  {
    name: 'utils',
    type: 'registry:lib',
    title: 'Utility Functions',
    author: 'francismasha <masha@francismasha.com>',
    dependencies: ['clsx', 'tailwind-merge'],
    files: [
      {
        path: 'src/lib/utils.ts',
        type: 'registry:lib',
      },
    ],
  },
];
