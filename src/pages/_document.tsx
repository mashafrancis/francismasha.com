import { CssBaseline } from '@geist-ui/core';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
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
					<link rel='manifest' href='/manifest.json' />
					<meta name='msapplication-TileColor' content='#000000' />
					<meta name='theme-color' content='#000000' />
					<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
				</Head>
				<body
					className='bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
