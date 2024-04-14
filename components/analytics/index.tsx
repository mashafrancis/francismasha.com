"use client";

import metadata from '@/app/metadata'

import Plausible from './Plausible'

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    plausible?: (...args: any[]) => void;
  }
}

const isProduction = process.env.NODE_ENV === "production";

const Analytics = () => {
  return (
    <>
      {/*{isProduction && loadSomeConsoleStuff()}*/}
      {isProduction && metadata.analytics.plausibleDataDomain && <Plausible />}
      {/*<TinyBird />*/}
      {/*{isProduction && <VercelAnalytics />}*/}
    </>
  );
};

export default Analytics;
