import './global.css';
import 'css/fonts.css';
import clsx from 'clsx';
import localFont from '@next/font/local';
import { ReactNode } from 'react';
import Analytics from 'components/analytics';
import LayoutWrapper from '../components/LayoutWrapper';

const circular = localFont({
	src: '../public/fonts/CircularStd-Book.woff2',
	weight: '500',
	variable: '--font-circular',
	display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang='en'
			className={clsx(
				'text-black bg-white dark:text-white dark:bg-[#111010]',
				circular.variable,
			)}
		>
		<body
			className='bg-white text-black antialiased transition duration-500 dark:bg-gray-800 dark:text-white'>
		<LayoutWrapper>
			<main
				className='flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
				{children}
				<Analytics />
			</main>
		</LayoutWrapper>
		</body>
		</html>
	);
}
