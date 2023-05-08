import './global.css';
import '@/css/fonts.css';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Analytics from '@/components/analytics';
import LayoutWrapper from '../components/LayoutWrapper';
import globalMetadata from './metadata';
import type { Metadata } from 'next';
import { fontHeading, jetbrainsMono, sfText } from '@/app/fonts';

export const metadata: Metadata = globalMetadata;

const APP_NAME = 'Masha Portfolio';
const APP_DESCRIPTION = 'A software engineer learning';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang='en'
			className={clsx(
				'scroll-smooth bg-white text-black dark:bg-[#111010] dark:text-white',
				sfText.variable,
				fontHeading.variable,
				jetbrainsMono.variable,
			)}
		>
			<head>
				<meta name='application-name' content={APP_NAME} />
				<meta name='apple-mobile-web-app-title' content={APP_NAME} />
				<meta name='description' content={APP_DESCRIPTION} />
				<meta name='format-detection' content='telephone=no' />
				<meta name='mobile-web-app-capable' content='yes' />
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
				<meta
					content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
					name='robots'
				/>
			</head>
			<body className='duration-400 bg-white text-black antialiased transition dark:bg-gray-800 dark:text-white'>
				<LayoutWrapper>
					{children}
					<Analytics />
				</LayoutWrapper>
			</body>
		</html>
	);
}
