import { queryBuilder } from 'lib/planetscale';
import { unstable_cache } from 'next/cache';

export const getViewsCount = unstable_cache(
	async () => {
		return queryBuilder.selectFrom('views').select(['slug', 'count']).execute();
	},
	['all-views'],
	{
		revalidate: 5,
	},
);
