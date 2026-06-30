"use client";

import { AppProgressProvider } from "@bprogress/next";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider as JotaiProvider } from "jotai";
import { LazyMotion } from "motion/react";
import { AxiomWebVitals } from "next-axiom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const loadFeatures = () => import("motion/react").then((res) => res.domMax);

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
          sessionReplay={{
            enabled: true,
          }}
          trackAttributes
          trackHashChanges
          trackOutgoingLinks
          trackScreenViews
        />
        <Toaster />
        <Analytics />
        <AxiomWebVitals />
        <SpeedInsights />
      </ThemeProvider>
    </JotaiProvider>
  );
}
