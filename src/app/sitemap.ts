import type { MetadataRoute } from 'next';

import { getSitemapEntries } from '@/lib/cached-routes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getSitemapEntries();
}
