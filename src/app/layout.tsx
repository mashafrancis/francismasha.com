import './global.css';
import '@/css/fonts.css';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Analytics from '@/components/analytics';
import LayoutWrapper from '../components/LayoutWrapper';
import globalMetadata from './metadata';
import type { Metadata } from 'next';
import { sfText } from '@/app/fonts';

export const metadata: Metadata = globalMetadata;

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
