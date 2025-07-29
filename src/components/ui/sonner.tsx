'use client';

import { useTheme } from 'next-themes';
import type { ToasterProps } from 'sonner';
import { Toaster as Sonner } from 'sonner';

import { cn } from '@/lib/utils';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--cd-popover)',
          '--normal-text': 'var(--cd-popover-foreground)',
          '--normal-border': 'var(--cd-border)',
          '--border-radius': 'var(--radius-xl)',
        } as React.CSSProperties
      }
      theme={theme as ToasterProps['theme']}
      toastOptions={{
        classNames: {
          toast: cn(
            'group-[.toaster]:border-none! group-[.toaster]:shadow-md!',
            'group-[.toaster]:backdrop-blur-md supports-backdrop-filter:group-[.toaster]:bg-popover/90!',
            'group-[.toaster]:ring-1! group-[.toaster]:ring-black/10! dark:group-[.toaster]:ring-white/15!'
          ),
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
