// import '@/css/fonts.css';
// import '@/css/global.css';
import '@/css/app.css';
// import '@/css/tailwind.css';
import '@/css/no-script.css';
import 'katex/dist/katex.css';
import '@fontsource/fira-code';
import '@fontsource/jetbrains-mono';

import Analytics from '@/components/analytics';
import { ClientReload } from '@/components/ClientReload';
import LayoutWrapper from '@/components/LayoutWrapper';
import { GeistProvider } from '@geist-ui/core';
import { Inter } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import siteMetadata from '../../data/siteMetadata';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

const GeistProviderWithTheme = (props): ReactElement => {
	const { resolvedTheme } = useTheme();

	return (
		<GeistProvider themeType={resolvedTheme}>{props.children}</GeistProvider>
	);
};

const interVariable = Inter({
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
			{/*<GeistProviderWithTheme>*/}
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
			{/*</GeistProviderWithTheme>*/}
		</ThemeProvider>
	);
};

export default App;
