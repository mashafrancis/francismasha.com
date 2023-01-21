// import '@/css/fonts.css';
// import '@/css/global.css';
import '@/css/app.css';
import '@/css/no-script.css';
import 'katex/dist/katex.css';

import Analytics from '@/components/analytics';
import { ClientReload } from '@/components/ClientReload';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Inter, JetBrains_Mono } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import siteMetadata from '../../data/siteMetadata';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

const interVariable = Inter({
	subsets: [
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'latin',
		'latin-ext',
		'vietnamese',
	],
});

export const jetbrainsMonoVariable = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute='class' defaultTheme={siteMetadata.theme}>
			<Head>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
			</Head>
			{isDevelopment && isSocket && <ClientReload />}
			<Analytics />
			<AnimatePresence
				mode='wait'
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<main className={interVariable.className}>
					<LayoutWrapper>
						<Component {...pageProps} />
					</LayoutWrapper>
				</main>
			</AnimatePresence>
		</ThemeProvider>
	);
};

export default App;
