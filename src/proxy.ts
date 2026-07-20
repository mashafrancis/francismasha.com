import { NextResponse } from "next/server";

export function proxy(req) {
  // fire-and-forget — never blocks the response
  fetch("https://mrkr.app/api/data/crawl", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      site: "site_e2169d1b7c48d365",
      ua: req.headers.get("user-agent"),
      path: req.nextUrl.pathname,
    }),
  }).catch(() => {});
  return NextResponse.next();
}