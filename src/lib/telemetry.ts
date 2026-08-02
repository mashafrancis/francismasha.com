import { metrics, SpanStatusCode, trace } from "@opentelemetry/api";

export const tracer = trace.getTracer("francismasha.com");
export const meter = metrics.getMeter("francismasha.com");

export const githubStarsFetchCounter = meter.createCounter(
  "github.stars.fetch",
  {
    description: "GitHub stars fetch attempts",
  }
);

export const githubStarsLatencyHistogram = meter.createHistogram(
  "github.stars.latency_ms",
  { description: "GitHub stars fetch latency in milliseconds", unit: "ms" }
);

export const vcardDownloadCounter = meter.createCounter("vcard.download", {
  description: "vCard download requests",
});

export const apiGenerateRequestsCounter = meter.createCounter(
  "api.generate.requests",
  { description: "Generate API requests by outcome" }
);

export const feedRssRequestsCounter = meter.createCounter("feed.rss.requests", {
  description: "RSS feed requests",
});

export const llmsRequestsCounter = meter.createCounter("llms.requests", {
  description: "LLMs.txt requests",
});

export async function withSpan<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  return await tracer.startActiveSpan(name, async (span) => {
    try {
      return await fn();
    } catch (error) {
      span.recordException(error as Error);
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : "Unknown error",
      });
      throw error;
    } finally {
      span.end();
    }
  });
}
