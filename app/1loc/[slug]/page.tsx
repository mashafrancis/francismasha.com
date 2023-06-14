import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

import { Mdx } from '@/components/Mdx';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import PageTitle from '@/components/PageTitle';

import { allOneLocs } from 'contentlayer/generated';
import { Grid } from '@/components/Grid';

interface Props {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return allOneLocs.map((snippet) => ({
		slug: snippet.slug,
	}));
}

export default async function OneLoc({ params }: Props) {
	const snippet = allOneLocs.find(
		({ slug }) => slug.split('/').at(-1) === params.slug,
	);

	if (!snippet) {
		notFound();
	}

	const { title, body } = snippet;

	return (
		<section>
			<ScrollProgressBar />
			<ScrollTopAndComment />
			<Grid>
				<div className='col-span-full dark:prose-invert lg:col-span-10 lg:col-start-2'>
					<PageTitle>
						<Balancer>{title}</Balancer>
					</PageTitle>
				</div>
			</Grid>
			<Grid>
				<Mdx code={body.code} />
			</Grid>
		</section>
	);
}
