import { connection } from "next/server";

import { getStargazersCount } from "@/lib/cached-routes";

export async function GET() {
  await connection();

  const stargazers_count = await getStargazersCount();

  return Response.json({
    stargazers_count,
  });
}
