"use client";

import { MapleBrowser } from "@maple-dev/browser";
import { useEffect } from "react";

export function MapleBrowserInit() {
  useEffect(() => {
    MapleBrowser.init({
      ingestKey: "maple_pk_Fm-4vxgt-mPWv39JOBA4jg2oX9_9qiUV",
      serviceName: "francismasha.com",
      endpoint: "https://ingest.maple.dev",
      environment: process.env.NODE_ENV,
      serviceVersion: "0.1.0",
      tracing: { enabled: true, instrumentFetch: true },
      replay: { enabled: true, sampleRate: 1.0 },
      privacy: { maskAllInputs: true, maskAllText: false },
    });
  }, []);

  return null;
}
