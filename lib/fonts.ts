import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';

export const fontSans = localFont({
	src: [
		{
			path: '../assets/fonts/sf-pro-text-regular-webfont.woff2',
			weight: '400',
			style: 'light',
		},
		{
			path: '../assets/fonts/sf-pro-text-regular-webfont.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/sf-pro-text-semibold-webfont.woff2',
			weight: '600',
			style: 'semibold',
		},
		{
			path: '../assets/fonts/sf-pro-text-medium-webfont.woff2',
			weight: '600',
			style: 'medium',
		},
		{
			path: '../assets/fonts/sf-pro-text-bold-webfont.woff2',
			weight: '700',
			style: 'bold',
		},
	],
	variable: '--font-sf-text',
});

export const fontMono = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-jetbrains',
});

export const fontHeading = localFont({
	src: '../public/fonts/CalSans-SemiBold.woff2',
	variable: '--font-heading',
	display: 'swap',
});
