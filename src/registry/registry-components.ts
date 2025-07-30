import type { Registry } from "shadcn/registry";

export const components: Registry['items'] = [
  {
    name: 'theme-switcher',
    type: 'registry:component',
    description:
      'A theme switcher component for Next.js apps with next-themes and Tailwind CSS, supporting system, light, and dark modes.',
    title: 'Theme Switcher',
    author: 'mashafrancis <masha@francismasha.com>',
    dependencies: ['next-themes', 'lucide-react', 'motion'],
    registryDependencies: ['<registryBaseUrl>/utils.json'],
    files: [
      {
        path: 'theme-switcher/theme-switcher.tsx',
        type: 'registry:component',
      },
    ],
    docs: 'https://francismasha.comcomponents/theme-switcher-component',
  },
  {
    name: 'flip-sentences',
    type: 'registry:component',
    title: 'Flip Sentences',
    author: 'mashafrancis <masha@francismasha.com>',
    dependencies: ['motion'],
    registryDependencies: ['<registryBaseUrl>/utils.json'],
    files: [
      {
        path: 'flip-sentences/flip-sentences.tsx',
        type: 'registry:component',
      },
    ],
  },
  {
    name: 'work-experience',
    type: 'registry:component',
    description:
      'Displays a list of work experiences with role details and durations.',
    title: 'Work Experience',
    author: 'mashafrancis <masha@francismasha.com>',
    dependencies: ['react-markdown', 'lucide-react'],
    devDependencies: ['@tailwindcss/typography'],
    registryDependencies: [
      '<registryBaseUrl>/utils.json',
      'collapsible',
      'separator',
    ],
    files: [
      {
        path: 'work-experience/work-experience.tsx',
        type: 'registry:component',
      },
    ],
    cssVars: {
      light: {
        background: 'oklch(1 0 0)',
        muted: 'oklch(0.967 0.001 286.375)',
        'muted-foreground': 'oklch(0.552 0.016 285.938)',
        border: 'oklch(0.92 0.004 286.32)',
      },
      dark: {
        background: 'oklch(0.141 0.005 285.823)',
        muted: 'oklch(0.274 0.006 286.033)',
        'muted-foreground': 'oklch(0.705 0.015 286.067)',
        border: 'oklch(0.274 0.006 286.033)',
      },
    },
    docs: 'https://francismasha.comcomponents/work-experience-component',
  },
];
