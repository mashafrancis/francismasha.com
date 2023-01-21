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
						sizes='180x180'
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
					<link
						rel='mask-icon'
						href='/static/favicons/safari-pinned-tab.svg'
						color='#5bbad5'
					/>
					<meta name='msapplication-TileColor' content='#2d89ef' />
					<meta name='theme-color' content='#ffffff' />
					<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
				</Head>
				<body className='bg-white text-black antialiased transition duration-500 dark:bg-gray-900 dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
