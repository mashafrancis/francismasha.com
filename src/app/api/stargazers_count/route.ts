export async function GET() {
  const data = await fetch("https://api.github.com/repos/ncdai/chanhdai.com", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
  });
  const json = await data.json();
  return Response.json({
    stargazers_count: json?.stargazers_count ?? -1,
  });
}
