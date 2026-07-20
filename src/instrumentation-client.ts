// import { initSDK } from "@embrace-io/web-sdk";
import { MapleBrowser } from "@maple-dev/browser";

MapleBrowser.init({
  ingestKey: "maple_pk_c8R1Zey38I6t-b4DD_eeTvlZksbfJfgu",
  serviceName: "francismasha.com",
  endpoint: "https://ingest.maple.dev",
  environment: process.env.NODE_ENV,
  serviceVersion: "0.1.0",
  tracing: { enabled: true, instrumentFetch: true },
  replay: { enabled: true, sampleRate: 1.0 },
  privacy: { maskAllInputs: true, maskAllText: false },
});

// initSDK({
//   appID: "9iikz",
// });
