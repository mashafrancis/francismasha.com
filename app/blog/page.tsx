import { Header } from 'components/Form';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { BsFilterLeft as FilterIcon } from 'react-icons/bs';
import { dateSortDesc } from 'lib/misc';

export const metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
	return (
		<section className='fade-in'>
			<Header title='All posts.'>
				<div className='relative'>
					<input
						aria-label='Search articles'
						type='text'
						// onChange={({ target }) => setSearchValue(target.value)}
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
				{allBlogs
					.sort((a, b) => dateSortDesc(a.date, b.date))
					.map(({ slug, title, summary }) => (
						<li key={slug} className='py-4 hover:bg-gray-100'>
							<Link
								href={`/blog/${slug}`}
								className='text-gray-900 dark:text-gray-100'
							>
								<article className='items-flex-start grid space-y-2 space-y-0 xl:grid-cols-6'>
									<div className='col-span-3 xl:col-span-6'>
										<div>
											<h3 className='text-2xl font-bold leading-8 tracking-tight'>
												{title}
											</h3>
										</div>
										<div className='prose max-w-none text-gray-500 dark:text-gray-400'>
											{summary}
										</div>
									</div>
								</article>
							</Link>
						</li>
					))}
			</ul>
		</section>
	);
}
