import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Suspense, cache } from 'react'

import { increment } from '@/app/actions'
import ViewCounter from '@/app/blog/view-counter'
import { Grid } from '@/components/Grid'
import { Mdx } from '@/components/Mdx'
import PageTitle from '@/components/PageTitle'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { getBlogPosts } from '@/lib/db/blog'
import { getViewsCount } from '@/lib/metrics'
import Balancer from 'react-wrap-balancer'
import readingTime from 'reading-time'

interface Props {
	params: {
		slug: string
	}
}

export async function generateMetadata({
	params,
}): Promise<Metadata | undefined> {
	let post = getBlogPosts().find((post) => post.slug === params.slug)
	if (!post) {
		return
	}
	if (!post) {
		return
	}

	const {
		title,
		date: publishedTime,
		summary: description,
		image,
	} = post.metadata
	const ogImage = image
		? `https://francismasha.com${image}`
		: `https://francismasha.com/api/og?title=${title}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://francismasha.com/blog/${post.slug}`,
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
	}
}

export default async function Blog({ params }: Props) {
	const post = getBlogPosts().find(
		({ slug }) => slug.split('/').at(-1) === params.slug
	)

	if (!post) {
		notFound()
	}

	const {
		metadata: { date, title },
		content,
		slug: rawSlug,
	} = post

	const slug = rawSlug.split('/').at(-1)

	if (!slug) {
		notFound()
	}

	const readTime = readingTime(content)

	return (
		<section>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.date,
						dateModified: post.metadata.date,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://francismasha.com${post.metadata.image}`
							: `https://francismasha.com/og?title=${post.metadata.title}`,
						url: `https://francismasha.com/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: 'Lee Robinson',
						},
					}),
				}}
			/>
			<ScrollProgressBar />
			<ScrollTopAndComment />
			<PageTitle>
				<Balancer>{title}</Balancer>
			</PageTitle>
			<div className='mb-8 mt-4 grid grid-cols-[auto_1fr_auto] items-center text-sm'>
				<div
					className={`rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-600 `}
				>
					{date}
				</div>
				<div className='mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-600' />
				<p className='min-w-32 mt-2 font-mono text-sm tracking-tighter text-neutral-600 dark:text-neutral-400 md:mt-0'>
					{`${readTime?.text} | `}
					<Suspense fallback={<p className='h-5' />}>
						<Views slug={post.slug} />
					</Suspense>
				</p>
			</div>
			<Grid>
				<Mdx source={content} />
			</Grid>

			{/*<Grid>*/}
			{/*	<ul className='col-span-full lg:col-span-10 lg:col-start-2'>*/}
			{/*		{tags && (*/}
			{/*			<div className='py-4 xl:py-8'>*/}
			{/*				<div className='flex flex-wrap'>*/}
			{/*					{tags.map((tag) => (*/}
			{/*						<Tag key={tag} text={tag}/>*/}
			{/*					))}*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		)}*/}
			{/*	</ul>*/}
			{/*</Grid>*/}
		</section>
	)
}

let incrementViews = cache(increment)

async function Views({ slug }: { slug: string }) {
	let views: { slug: string; count: number }[]
	try {
		views = await getViewsCount()
		await incrementViews(slug)
	} catch (error) {
		console.error(error)
	}

	return <ViewCounter allViews={views} slug={slug} />
}
