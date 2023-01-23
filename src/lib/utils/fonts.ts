import { Inter, JetBrains_Mono } from '@next/font/google';

const inter = Inter({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const jetbrainsMono = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
});

export { inter, jetbrainsMono };
