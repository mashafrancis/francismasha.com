import { Button } from '@/components/ui/button';
import { SOURCE_CODE_GITHUB_URL } from '@/config/site';

import { Icons } from './icons';

export function NavItemGitHub() {
  return (
    <Button asChild size="icon" variant="outline">
      <a href={SOURCE_CODE_GITHUB_URL} rel="noopener" target="_blank">
        <Icons.github />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
