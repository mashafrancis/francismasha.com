import { inter } from '@/lib/utils/fonts';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en' className={inter.className}>
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
					<meta
						content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
						name='robots'
					/>
				</Head>
				<body className='bg-white text-black antialiased transition duration-500 dark:bg-gray-800 dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
