import CustomLink from '@/components/CustomLink';
import { H1, H2, H3 } from '@/components/Form';
import { getMDXComponent } from 'mdx-bundler/client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
/* eslint-disable react/display-name */
import { ComponentType, useMemo } from 'react';

import { BlogNewsletterForm } from './NewsletterForm';
import Pre from './Pre';
import TableOfContents from './TableOfContents';
import CodeTitle from '@/components/CodeTitle';

const Wrapper: ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
	const Layout = dynamic(() => import(`../layouts/${layout}`), {
		ssr: false,
	});
	return <Layout {...rest} />;
};

function RoundedImage(props) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

function Callout(props) {
	return (
		<div className='my-8 flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800'>
			<div className='mr-4 flex w-4 items-center'>{props.emoji}</div>
			<div className='callout w-full'>{props.children}</div>
		</div>
	);
}

export const MDXComponents = {
	Image: RoundedImage,
	TableOfContents,
	a: CustomLink,
	h1: H1,
	h2: H2,
	h3: H3,
	pre: Pre,
	wrapper: Wrapper,
	BlogNewsletterForm,
	Callout,
	CodeTitle,
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
