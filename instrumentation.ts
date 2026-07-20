import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { SimpleLogRecordProcessor } from "@opentelemetry/sdk-logs";
import { registerOTel } from "@vercel/otel";

const MAPLE_ENDPOINT = "https://ingest.maple.dev";
const MAPLE_KEY = "maple_pk_c8R1Zey38I6t-b4DD_eeTvlZksbfJfgu";

const headers = { authorization: `Bearer ${MAPLE_KEY}` };

export function register() {
  registerOTel({
    serviceName: "francismasha.com",
    attributes: {
      "deployment.environment.name": process.env.VERCEL_ENV ?? "development",
      "vcs.repository.url.full":
        "https://github.com/mashafrancis/francismasha.com",
      "vcs.ref.head.revision": process.env.VERCEL_GIT_COMMIT_SHA,
    },
    traceExporter: {
      url: `${MAPLE_ENDPOINT}/v1/traces`,
      headers,
    },
    logRecordProcessor: new SimpleLogRecordProcessor(
      new OTLPLogExporter({ url: `${MAPLE_ENDPOINT}/v1/logs`, headers })
    ),
    metricReaders: [
      new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({
          url: `${MAPLE_ENDPOINT}/v1/metrics`,
          headers,
        }),
      }),
    ],
  });
}
