import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Pre from './Pre';
import { H1, H2, H3 } from './Form';

const CustomLink = (props) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	if (isInternalLink) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	// eslint-disable-next-line jsx-a11y/anchor-has-content
	return <a target='_blank' rel='noopener noreferrer' {...props} />;
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

const components = {
	Image: RoundedImage,
	a: CustomLink,
	pre: Pre,
	h1: H1,
	h2: H2,
	h3: H3,
	Callout,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<article className='prose prose-neutral prose-quoteless col-span-full dark:prose-invert lg:col-span-10 lg:col-start-2'>
			<Component components={{ ...components }} />
		</article>
	);
}
