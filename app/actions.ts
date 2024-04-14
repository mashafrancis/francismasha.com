"use server";

import { unstable_noStore as noStore } from "next/cache";

import { sql } from "@/lib/postgres";

export async function increment(slug: string) {
  noStore();
  await sql`
      INSERT INTO views (slug, count)
      VALUES (${slug}, 1) ON CONFLICT (slug)
    DO
      UPDATE SET count = views.count + 1
  `;
}
