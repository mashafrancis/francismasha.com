import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Pre from './Pre';

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

const components = {
	Image: RoundedImage,
	a: CustomLink,
	pre: Pre,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<article className='prose prose-quoteless prose-neutral dark:prose-invert'>
			<Component components={{ ...components }} />
		</article>
	);
}
