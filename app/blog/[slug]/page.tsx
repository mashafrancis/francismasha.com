import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import readingTime from 'reading-time';

import { Mdx } from '@/components/Mdx';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import PageTitle from '@/components/PageTitle';
import { Grid } from '@/components/Grid';

import Tag from '@/components/Tag';
import ViewCounter from '@/app/blog/view-counter';
import { allBlogs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { TrackView } from '@heimdall-logs/tracker/react';

interface Props {
	params: {
		slug: string;
	};
}

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	const post = allBlogs.find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	const {
		title,
		date: publishedTime,
		summary: description,
		image,
		slug,
	} = post;
	const ogImage = image
		? `https://francismasha.com${image}`
		: `https://francismasha.com/api/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://francismasha.com/blog/${slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Blog({ params }: Props) {
	const post = allBlogs.find(
		({ slug }) => slug.split('/').at(-1) === params.slug,
	);

	if (!post) {
		notFound();
	}

	const { date, title, body, tags, slug: rawSlug } = post;

	const slug = rawSlug.split('/').at(-1);

	if (!slug) {
		notFound();
	}

	const readTime = readingTime(body.code);

	return (
		<TrackView
			name={slug}
			payload={{
				foo: 'bar',
			}}
		>
			<section>
				<script
					type='application/ld+json'
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(post.body),
					}}
				></script>
				<ScrollProgressBar />
				<ScrollTopAndComment />
				<PageTitle>
					<Balancer>{title}</Balancer>
				</PageTitle>
				<div className='mb-8 mt-4 grid grid-cols-[auto_1fr_auto] items-center text-sm'>
					<div
						className={`rounded-md bg-neutral-100 px-2 py-1 font-mono tracking-tighter dark:bg-neutral-600 `}
					>
						{date}
					</div>
					<div className='mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-600' />
					<p className='min-w-32 mt-2 font-mono text-sm tracking-tighter text-neutral-500 md:mt-0'>
						{`${readTime?.text} | `}
						<ViewCounter slug={slug} trackView />
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
		</TrackView>
	);
}
