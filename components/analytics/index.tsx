'use client'

import metadata from '@/app/metadata'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Plausible from './Plausible'

declare global {
	interface Window {
		gtag?: (...args: any[]) => void
		plausible?: (...args: any[]) => void
		sa_event?: (...args: any[]) => void
	}
}

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
	return (
		<>
			{/*{isProduction && loadSomeConsoleStuff()}*/}
			{isProduction && metadata.analytics.plausibleDataDomain && <Plausible />}
			{/*{isProduction && metadata.analytics.simpleAnalytics && (*/}
			{/*	<SimpleAnalytics/>*/}
			{/*)}*/}
			{/*{isProduction && metadata.analytics.umamiWebsiteId && <Umami/>}*/}
			{/*{isProduction && metadata.analytics.googleAnalyticsId && <GA/>}*/}
			{/*<TinyBird />*/}
			{/*{isProduction && <VercelAnalytics />}*/}
		</>
	)
}

export default Analytics
