import { trace } from "@opentelemetry/api";
import { checkBotId } from "botid/server";
import { NextResponse } from "next/server";

import { apiGenerateRequestsCounter, withSpan } from "@/lib/telemetry";

const expensiveOperation = async () =>
  new Promise((resolve) => {
    const randomNumber = Math.random() * 100;
    resolve(randomNumber);
  });

export async function POST(_req: Request) {
  return await withSpan("api.generate", async () => {
    const { isBot } = await checkBotId();
    const span = trace.getActiveSpan();
    span?.setAttribute("bot.detected", isBot);

    if (isBot) {
      apiGenerateRequestsCounter.add(1, { outcome: "bot_blocked" });
      return NextResponse.json(
        { error: "Bot is not allowed to access this endpoint" },
        { status: 401 }
      );
    }

    try {
      const result = await expensiveOperation();
      apiGenerateRequestsCounter.add(1, { outcome: "success" });
      return NextResponse.json({ result });
    } catch (error) {
      apiGenerateRequestsCounter.add(1, { outcome: "error" });
      throw error;
    }
  });
}
