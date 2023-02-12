import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import readingTime from 'reading-time';

import { Mdx } from '@/components/Mdx';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import PageTitle from '@/components/PageTitle';
import { Grid } from '@/components/Grid';
import { jetbrainsMono } from '@/components/Pre';

import Tag from '@/components/Tag';
import ViewCounter from '@/app/blog/view-counter';

interface Props {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return allBlogs.map((post) => ({
		slug: post.slug,
	}));
}

export default async function Blog({ params }: Props) {
	const post = allBlogs.find(({ slug }) => slug === params.slug);

	if (!post) {
		notFound();
	}

	const { date, title, body, tags } = post;

	const readTime = readingTime(body.code);

	return (
		<section>
			<ScrollProgressBar />
			<ScrollTopAndComment />
			<PageTitle>
				<Balancer>{title}</Balancer>
			</PageTitle>
			<div className='mt-4 mb-8 grid grid-cols-[auto_1fr_auto] items-center text-sm'>
				<div
					className={`rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-600 ${jetbrainsMono.variable} font-mono `}
				>
					{date}
				</div>
				<div className='mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-600' />
				<p className='min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0'>
					{`${readTime?.text} | `}
					<ViewCounter slug={post.slug} trackView />
				</p>
			</div>
			<Grid>
				<Mdx code={body.code} />
			</Grid>

			<Grid>
				<ul className='col-span-full lg:col-span-10 lg:col-start-2'>
					{tags && (
						<div className='py-4 xl:py-8'>
							<div className='flex flex-wrap'>
								{tags.map((tag) => (
									<Tag key={tag} text={tag} />
								))}
							</div>
						</div>
					)}
				</ul>
			</Grid>
		</section>
	);
}
