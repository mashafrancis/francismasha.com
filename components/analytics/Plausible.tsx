import Script from "next/script";

import metadata from "@/app/metadata";

const PlausibleScript = () => {
  return (
    <>
      {/*<script defer data-domain="francismasha.com"*/}
      {/*        src="https://plausible.io/js/script.js"></script>*/}

      <Script
        strategy="lazyOnload"
        data-domain={metadata.analytics.plausibleDataDomain}
        src="https://plausible.io/js/plausible.js"
      />
      <Script strategy="lazyOnload" id="plausible-script">
        {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </Script>
    </>
  );
};

export default PlausibleScript;

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName: any, ...rest: any[]) => {
  return window.plausible?.(eventName, ...rest);
};
