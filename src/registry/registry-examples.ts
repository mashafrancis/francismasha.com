import type { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'theme-switcher-demo',
    type: 'registry:example',
    registryDependencies: ['<registryBaseUrl>/theme-switcher.json'],
    files: [
      {
        path: 'examples/theme-switcher-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'work-experience-demo',
    type: 'registry:example',
    registryDependencies: ['<registryBaseUrl>/work-experience.json'],
    files: [
      {
        path: 'examples/work-experience-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];
