/* eslint-disable react/display-name */
import { ComponentType, useMemo } from 'react';
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import Link from 'next/link';
import TOCInline from './TOCInline';
import Pre from './Pre';
import { BlogNewsletterForm } from './NewsletterForm';
import dynamic from 'next/dynamic';
import { H1, H2, H3 } from '@/components/Form';

const Wrapper: ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
	const Layout = dynamic(() => import(`../layouts/${layout}`), {
		ssr: false,
	});
	return <Layout {...rest} />;
};

export const MDXComponents: ComponentMap = {
	Image,
	TOCInline,
	// @ts-expect-error
	a: Link,
	h1: H1,
	h2: H2,
	h3: H3,
	pre: Pre,
	wrapper: Wrapper,
	BlogNewsletterForm,
};

interface Props {
	layout: string;
	mdxSource: string;

	[key: string]: unknown;
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
	const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

	return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
