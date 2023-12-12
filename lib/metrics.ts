import { unstable_noStore as noStore } from 'next/cache'

import { queryBuilder } from 'lib/planetscale'

export async function getViewsCount() {
	noStore()
	return queryBuilder.selectFrom('views').select(['slug', 'count']).execute()
}
