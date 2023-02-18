import localFont from '@next/font/local';
import { JetBrains_Mono, Roboto_Mono } from '@next/font/google';

const circular = localFont({
	src: '../../public/fonts/CircularStd-Book.woff2',
	weight: '500',
	variable: '--font-circular',
	display: 'swap',
});

export const sfText = localFont({
	src: '../../public/fonts/sf-pro-text-regular-webfont.woff2',
	weight: '500',
	variable: '--font-sf-text',
	display: 'swap',
});

export const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-jetbrains',
});
