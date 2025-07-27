"use client";

import Clarity from "@microsoft/clarity";

export default function Analytics() {
  Clarity.init(process.env.NEXT_PUBLIC_MICROSOFT_CLARITY as string);

  return null;
}
