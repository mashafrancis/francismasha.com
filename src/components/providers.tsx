'use client';

import { AppProgressProvider } from "@bprogress/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider as JotaiProvider } from "jotai";
import { LazyMotion } from "motion/react";
import { ThemeProvider } from "next-themes";
import { BklitComponent } from '@bklit/sdk/nextjs';
import { OpenPanelComponent } from "@openpanel/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { AxiomWebVitals } from "next-axiom";

const loadFeatures = () => import('motion/react').then((res) => res.domMax);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableColorScheme
        enableSystem
        storageKey="theme"
      >
        <AppProgressProvider
          color="var(--color-info)"
          delay={500}
          height="2px"
          options={{ showSpinner: false }}
        >
          <LazyMotion features={loadFeatures} strict>
            {children}
          </LazyMotion>
        </AppProgressProvider>

	      <OpenPanelComponent
		      clientId="2cc3a8c0-b1e9-4dd3-a60c-2d9a6c31e671"
		      trackAttributes
		      trackHashChanges
		      trackOutgoingLinks
		      trackScreenViews
	      />

	      <BklitComponent
		      projectId="cmiipfuw000075xcscl7smmg2"
		      apiKey="bk_live_1f10eb2d2eae438041aa556946a0fe22fe1729f5273342af163bb6aa6643f4ac"
	      />
        <Toaster />
        <Analytics />
        <AxiomWebVitals />
        <SpeedInsights />
      </ThemeProvider>
    </JotaiProvider>
  );
}
