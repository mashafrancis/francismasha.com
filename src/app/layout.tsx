import './global.css';
import '@/css/fonts.css';
import clsx from 'clsx';
import localFont from '@next/font/local';
import { ReactNode } from 'react';
import Analytics from '@/components/analytics';
import LayoutWrapper from '../components/LayoutWrapper';
import globalMetadata from './metadata';

const circular = localFont({
	src: '../../public/fonts/CircularStd-Book.woff2',
	weight: '500',
	variable: '--font-circular',
	display: 'swap',
});

const sfText = localFont({
	src: '../../public/fonts/sf-pro-text-regular-webfont.woff2',
	weight: '500',
	variable: '--font-sf-text',
	display: 'swap',
});

export const metadata = globalMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang='en'
			className={clsx(
				'scroll-smooth bg-white text-black dark:bg-[#111010] dark:text-white',
				sfText.variable,
			)}
		>
			<body className='duration-400 bg-white text-black antialiased transition dark:bg-gray-800 dark:text-white'>
				<LayoutWrapper>
					{children}
					<Analytics />
				</LayoutWrapper>
			</body>
		</html>
	);
}
