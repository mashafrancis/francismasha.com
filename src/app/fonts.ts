import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';

export const sfText = localFont({
	src: '../../public/fonts/sf-pro-text-regular-webfont.woff2',
	weight: '500',
	variable: '--font-sf-text',
	display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-jetbrains',
});

export const fontHeading = localFont({
	src: '../../public/fonts/CalSans-SemiBold.woff2',
	variable: '--font-heading',
});
