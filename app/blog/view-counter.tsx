'use client';

import { useEffect } from 'react';
import { increment } from '@/app/actions';

type PostView = {
	slug: string;
	count: string;
};

export default function ViewCounter({
	slug,
	trackView,
	allViews,
}: {
	slug: string;
	trackView: boolean;
	allViews: {
		slug: string;
		count: number;
	}[];
}) {
	const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
	const views = Number(viewsForSlug?.count || 0);

	useEffect(() => {
		if (trackView) {
			increment(slug);
		}
	}, []);

	return <>{`${views.toLocaleString()} views`}</>;
}
