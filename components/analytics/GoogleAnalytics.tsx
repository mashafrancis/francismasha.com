import Script from 'next/script'

import metadata from '@/app/metadata'

const GAScript = () => {
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${metadata.analytics.googleAnalyticsId}`}
			/>

			<Script strategy='lazyOnload' id='ga-script'>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${metadata.analytics.googleAnalyticsId}', {
            page_path: window.location.pathname,
          });
        `}
			</Script>
		</>
	)
}

export default GAScript

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = (
	action: any,
	category: any,
	label: any,
	value: any
) => {
	window.gtag?.('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	})
}
