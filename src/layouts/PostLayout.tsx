import Comments from '@/components/comments';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { BlogSEO } from '@/components/SEO';
import TableOfContents from '@/components/TableOfContents';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, Suspense, useState } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { PostFrontMatter } from 'types/PostFrontMatter';
import { Toc } from 'types/Toc';

import siteMetadata from '../../data/siteMetadata';
import PageTitle from '../components/PageTitle';
import ScrollTopAndComment from '../components/ScrollTopAndComment';

const editUrl = (fileName) =>
	`${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
const discussUrl = (slug) =>
	`https://mobile.twitter.com/search?q=${encodeURIComponent(
		`${siteMetadata.siteUrl}/blog/${slug}`,
	)}`;

export const postDateTemplate: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
};

interface Props {
	frontMatter: PostFrontMatter;
	authorDetails: AuthorFrontMatter[];
	next?: { slug: string; title: string };
	prev?: { slug: string; title: string };
	toc?: Toc;
	children: ReactNode;
}

export default function PostLayout({
	                                   frontMatter,
	                                   authorDetails,
	                                   next,
	                                   prev,
	                                   toc,
	                                   children,
                                   }: Props) {
	const { slug, fileName, date, title, tags, readingTime, images } =
		frontMatter;

	const [isTOCActive, setIsTOCActive] = useState(false);

	const banner = images?.[0];

	const url = `${siteMetadata.siteUrl}/blog/${slug}`;

	return (
		<section>
			<BlogSEO url={url} authorDetails={authorDetails} {...frontMatter} />
			<ScrollProgressBar />
			<ScrollTopAndComment />
			<TableOfContents
				isTOCActive={isTOCActive}
				setIsTOCActive={setIsTOCActive}
				tableOfContents={toc}
			/>
			<article
				className='fade-in mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center'>
				<header className='pt-6 xl:pb-6'>
					<div>
						<PageTitle>{title}</PageTitle>
					</div>

					<div
						className='mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center'>
						<div className='flex items-center'>
							<dl className='ml-2'>
								<dt className='sr-only'>Authors</dt>
								<dd>
									<ul
										className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
										{authorDetails.map((author) => (
											<li
												className='flex items-center space-x-2'
												key={author.name}
											>
												{author.avatar && (
													<Image
														src={author.avatar}
														height={24}
														width={24}
														alt='Francis Masha'
														className='rounded-full'
													/>
												)}
												<dl className='ml-2'>
													<dt className='sr-only'>Name</dt>
													<dd
														className='text-sm text-gray-700 dark:text-gray-300'>
														{author.name}
													</dd>
												</dl>
											</li>
										))}
									</ul>
								</dd>
							</dl>
							{` • `}
							<dl className='ml-2'>
								<div>
									<dt className='sr-only'>Published on</dt>
									<dd className='text-sm text-gray-700 dark:text-gray-300'>
										<time dateTime={date}>
											{new Date(date).toLocaleDateString(
												siteMetadata.locale,
												postDateTemplate,
											)}
										</time>
									</dd>
								</div>
							</dl>
						</div>
						<p
							className='min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0'>
							{readingTime?.text}
						</p>
					</div>
				</header>
				<Suspense fallback={null}>
					<div className='prose mt-4 w-full max-w-none dark:prose-dark'>
						<div
							className='divide-y-2 divide-gray-100 py-6 dark:divide-gray-800 xl:col-span-3 xl:row-span-2 xl:pb-0'>
							{banner && (
								<img
									src={banner}
									className='object-cover object-center'
									alt='banner'
								/>
							)}
							<div
								className='prose-light prose max-w-none break-words !border-t-0 pt-6 pb-8 dark:prose-dark'>
								{children}
							</div>
							<div
								className='pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300'>
								<Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
							</div>
							<Comments frontMatter={frontMatter} />
						</div>
						{/*<footer>*/}
						{/*	<div className='xl:sticky xl:top-32'>*/}
						{/*		<div*/}
						{/*			className='divide-gray-100 text-sm font-medium leading-5 dark:divide-gray-800 xl:col-start-1 xl:row-start-2 xl:divide-y'>*/}
						{/*			{tags && (*/}
						{/*				<div className='py-4 xl:py-8'>*/}
						{/*					<h2*/}
						{/*						className='uppercase tracking-wide text-gray-500 dark:text-gray-400'>*/}
						{/*						Tags*/}
						{/*					</h2>*/}
						{/*					<div className='flex flex-wrap'>*/}
						{/*						{tags.map((tag) => (*/}
						{/*							<Tag key={tag} text={tag} />*/}
						{/*						))}*/}
						{/*					</div>*/}
						{/*				</div>*/}
						{/*			)}*/}
						{/*			{(next || prev) && (*/}
						{/*				<div*/}
						{/*					className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>*/}
						{/*					{prev && (*/}
						{/*						<div>*/}
						{/*							<h2*/}
						{/*								className='tracking-wide text-gray-500 dark:text-gray-400'>*/}
						{/*								Previous Article*/}
						{/*							</h2>*/}
						{/*							<div*/}
						{/*								className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>*/}
						{/*								<Link href={`/blog/${prev.slug}`}>*/}
						{/*									{prev.title}*/}
						{/*								</Link>*/}
						{/*							</div>*/}
						{/*						</div>*/}
						{/*					)}*/}
						{/*					{next && (*/}
						{/*						<div>*/}
						{/*							<h2*/}
						{/*								className=' tracking-wide text-gray-500 dark:text-gray-400'>*/}
						{/*								Next Article*/}
						{/*							</h2>*/}
						{/*							<div*/}
						{/*								className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>*/}
						{/*								<Link href={`/blog/${next.slug}`}>*/}
						{/*									{next.title}*/}
						{/*								</Link>*/}
						{/*							</div>*/}
						{/*						</div>*/}
						{/*					)}*/}
						{/*				</div>*/}
						{/*			)}*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</footer>*/}
					</div>
				</Suspense>
			</article>
		</section>
	);
}
