import { CssBaseline } from '@geist-ui/core';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/utils/gtag';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = CssBaseline.flush();

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styles}
				</>
			),
		};
	}

	render() {
		return (
			<Html lang='en' className='scroll-smooth'>
				<Head>
					<link
						rel='apple-touch-icon'
						sizes='76x76'
						href='/static/favicons/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/static/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/static/favicons/favicon-16x16.png'
					/>
					<link rel='manifest' href='/static/favicons/site.webmanifest' />
					<meta name='msapplication-TileColor' content='#000000' />
					<meta name='theme-color' content='#000000' />
					<link rel='alternate' type='application/rss+xml' href='/feed.xml' />

					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<Script
						strategy='afterInteractive'
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<Script
						id='gtag-init'
						strategy='afterInteractive'
						dangerouslySetInnerHTML={{
							__html: `
	            window.dataLayer = window.dataLayer || [];
	            function gtag(){dataLayer.push(arguments);}
	            gtag('js', new Date());
	            gtag('config', '${GA_TRACKING_ID}', {
	              page_path: window.location.pathname,
	            });
	          `,
						}}
					/>
				</Head>
				<body className='bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
