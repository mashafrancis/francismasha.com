import { Header } from '@/components/Form';
import Link from 'next/link';
import Pagination from '@/components/Pagination';
import Tag from '@/components/Tag';
import { formatDateDay, formatDateMonthYear } from '@/lib/utils/formatDate';
import { ComponentProps, useState } from 'react';
import { BsFilterLeft as FilterIcon } from 'react-icons/bs';
import { PostFrontMatter } from 'types/PostFrontMatter';

interface Props {
	posts: PostFrontMatter[];
	title: string;
	initialDisplayPosts?: PostFrontMatter[];
	pagination?: ComponentProps<typeof Pagination>;
}

export default function ListLayout({
	posts,
	title,
	initialDisplayPosts = [],
	pagination,
}: Props) {
	const [searchValue, setSearchValue] = useState('');
	const filteredBlogPosts = posts.filter((frontMatter) => {
		const searchContent =
			frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
		return searchContent.toLowerCase().includes(searchValue.toLowerCase());
	});

	// If initialDisplayPosts exist, display it if no searchValue is specified
	const displayPosts =
		initialDisplayPosts.length > 0 && !searchValue
			? initialDisplayPosts
			: filteredBlogPosts;

	return (
		<>
			<div className='fade-in'>
				<Header title={title}>
					<div className='relative'>
						<input
							aria-label='Search articles'
							type='text'
							onChange={({ target }) => setSearchValue(target.value)}
							placeholder='Search articles'
							className='block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
						/>
						<svg
							className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
						<Link
							href='/tags'
							className='absolute right-10 top-2 text-gray-400 dark:text-gray-300'
						>
							<FilterIcon size={30} />
						</Link>
					</div>
				</Header>

				<ul className='divide-y divide-gray-200 dark:divide-gray-800'>
					{!filteredBlogPosts.length && (
						<p className='mt-8 text-center'>No posts found</p>
					)}
					{displayPosts.map((frontMatter) => {
						const { slug, date, title, summary, tags } = frontMatter;
						return (
							<li key={slug} className='py-3'>
								<article className='items-flex-start grid grid-cols-6 space-y-2 space-y-0'>
									<dl className='text-center'>
										<dt className='sr-only'>Published on</dt>
										<dd className='text-3xl font-bold xl:text-6xl'>
											<time dateTime={date}>{formatDateDay(date)}</time>
										</dd>
										<dd className='font-regular text-base text-gray-500 dark:text-gray-400'>
											<time dateTime={date}>{formatDateMonthYear(date)}</time>
										</dd>
									</dl>
									<div className='col-span-5 space-y-3'>
										<div>
											<h3 className='text-2xl font-bold leading-8 tracking-tight'>
												<Link
													href={`/blog/${slug}`}
													className='text-gray-900 dark:text-gray-100'
												>
													{title}
												</Link>
											</h3>
											<div className='flex flex-wrap'>
												{tags.map((tag) => (
													<Tag key={tag} text={tag} />
												))}
											</div>
										</div>
										<div className='prose max-w-none text-gray-500 dark:text-gray-400'>
											{summary}
										</div>
									</div>
								</article>
							</li>
						);
					})}
				</ul>
			</div>
			{pagination && pagination.totalPages > 1 && !searchValue && (
				<Pagination
					currentPage={pagination.currentPage}
					totalPages={pagination.totalPages}
				/>
			)}
		</>
	);
}
