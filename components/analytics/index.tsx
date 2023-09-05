'use client';

import metadata from '@/app/metadata';
/* eslint-disable @typescript-eslint/no-explicit-any */
import GA from './GoogleAnalytics';
import Plausible from './Plausible';
import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import TinyBird from '@/components/analytics/TinyBird';
import Loglib from '@loglib/tracker/react';

declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
		plausible?: (...args: any[]) => void;
		sa_event?: (...args: any[]) => void;
	}
}

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
	return (
		<>
			{/*{isProduction && loadSomeConsoleStuff()}*/}
			{isProduction && metadata.analytics.plausibleDataDomain && <Plausible />}
			{isProduction && metadata.analytics.simpleAnalytics && (
				<SimpleAnalytics />
			)}
			{isProduction && metadata.analytics.umamiWebsiteId && <Umami />}
			{isProduction && metadata.analytics.googleAnalyticsId && <GA />}
			<TinyBird />
			<Loglib
				config={{
					id: 'francismasha',
					consent: 'granted',
				}}
			/>
			{/*{isProduction && <VercelAnalytics />}*/}
		</>
	);
};

export default Analytics;
