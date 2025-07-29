'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type StarsCountResponse = {
  stargazers_count: number;
};

export function StarsCount() {
  const { data } = useSWR<StarsCountResponse>('/api/stargazers_count', fetcher);

  if (!data) {
    return <span className="h-3 w-7 rounded-full bg-muted" />;
  }

  if (data.stargazers_count < 0) {
    return <span className="h-3 w-7 rounded-full bg-muted" />;
  }

  return (
    <span className="w-7 text-center font-mono text-muted-foreground text-xs/none tabular-nums">
      {data.stargazers_count.toLocaleString()}
    </span>
  );
}
