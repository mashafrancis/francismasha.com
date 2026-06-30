import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Logger } from "next-axiom";

export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const logger = new Logger({ source: "middleware" }); // traffic, request
  logger.middleware(request);

  event.waitUntil(logger.flush());
  return NextResponse.next();
}

export const config = {};
