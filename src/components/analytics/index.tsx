/* eslint-disable @typescript-eslint/no-explicit-any */
import GA from './GoogleAnalytics';
import Plausible from './Plausible';
import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import siteMetadata from '../../../data/siteMetadata';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useMemo } from 'react';

declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
		plausible?: (...args: any[]) => void;
		sa_event?: (...args: any[]) => void;
	}
}

const isProduction = process.env.NODE_ENV === 'production';

const someStuffOnConsole = () =>
	console.log(
		`%c
	    CONTACT ME
		   ----------------------------------------
		        \\   ^__^
		         \\  (oo)\\_______
		            (__)\\       )\\/\\
		                ||----w |
		                ||     || 
		                
		  Hey There i'm glad you liked the site and what to see whats going on, sure check the repo at https://github.com/mashafrancis 
		  
		  And dont forget to shoot me an email at francismasha96@gmail.com if you need me to come do awesome work at your company`,
		'font-family:inherit'
	);

const Analytics = () => {
	const loadSomeConsoleStuff = useMemo(() => someStuffOnConsole, []);
	return (
		<>
			{/*{isProduction && loadSomeConsoleStuff()}*/}
			{isProduction && siteMetadata.analytics.plausibleDataDomain && (
				<Plausible />
			)}
			{isProduction && siteMetadata.analytics.simpleAnalytics && (
				<SimpleAnalytics />
			)}
			{isProduction && siteMetadata.analytics.umamiWebsiteId && <Umami />}
			{isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
			{isProduction && <VercelAnalytics />}
		</>
	);
};

export default Analytics;
