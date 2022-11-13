import '@/css/app.css';
import '@/css/fonts.css';
import '@/css/global.css';
import '@/css/prism.css';
import '@/css/tailwind.css';
import 'katex/dist/katex.css';
import '@fontsource/fira-code';
import '@fontsource/jetbrains-mono';

import { ThemeProvider, useTheme } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Analytics from '@/components/analytics';
import { ClientReload } from '@/components/ClientReload';
import LayoutWrapper from '@/components/LayoutWrapper';
import siteMetadata from '../../data/siteMetadata';

import { GeistProvider } from '@geist-ui/core';
import { ReactElement } from 'react';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

const GeistProviderWithTheme = (props): ReactElement => {
	const { resolvedTheme } = useTheme();

	return (
		<GeistProvider themeType={resolvedTheme}>{props.children}</GeistProvider>
	);
};

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute='class' defaultTheme={siteMetadata.theme}>
			<Head>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
			</Head>
			{isDevelopment && isSocket && <ClientReload />}
			<Analytics />
			<GeistProviderWithTheme>
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
			</GeistProviderWithTheme>
		</ThemeProvider>
	);
};

export default App;
