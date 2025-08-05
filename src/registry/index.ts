import type { Registry } from 'shadcn/registry';

import { components } from './registry-components';
import { examples } from './registry-examples';
import { hook } from './registry-hook';
import { lib } from './registry-lib';

export const registry = {
  name: 'francismasha',
  homepage: 'https://francismasha.com/components',
  items: [
    ...lib,
    ...hook,
    ...components,

    // Internal use only
    ...examples,
  ],
} satisfies Registry;
