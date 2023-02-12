import { H2, Header } from '@/components/Form';
import Link from 'next/link';
import { allOneLocs } from 'contentlayer/generated';
import { fancyId } from '@/lib/utils/misc';

export const metadata = {
	title: '1loc',
	description: 'Javascript utilities in single line of code.',
};

interface Props {
	category: string;
}

function ListTitles(category: string) {
	return (
		<div key={fancyId()}>
			<H2>{category}</H2>
			<ol className='divide-y divide-gray-200 dark:divide-gray-600' type='1'>
				{allOneLocs
					.filter((snippet) => snippet.category === category)
					.map(({ slug, title, category }) => {
						const modifiedSlug = slug.split('/').at(-1);
						return (
							<li key={fancyId()} className='py-3 hover:bg-gray-100'>
								<Link
									href={`1loc/${modifiedSlug}`}
									className='text-gray-900 dark:text-gray-100 dark:hover:text-gray-800'
								>
									<article className='items-flex-start grid space-y-2 space-y-0 xl:grid-cols-6'>
										<div className='col-span-3 xl:col-span-6'>
											<h5 className='grid grid-cols-[auto_1fr_auto] items-center text-xl leading-8 tracking-tight'>
												{title}
											</h5>
										</div>
									</article>
								</Link>
							</li>
						);
					})}
			</ol>
		</div>
	);
}

export default async function OneLineOfCodePage() {
	const allCategories = [
		...new Set(allOneLocs.map((snippet) => snippet.category)),
	];

	return (
		<section className='fade-in'>
			<Header
				title={`Javascript utilities in single line of code. (${allOneLocs.length})`}
			>
				{/*<div className='relative'>*/}
				{/*	<input*/}
				{/*		aria-label='Search articles'*/}
				{/*		type='text'*/}
				{/*		// onChange={({ target }) => setSearchValue(target.value)}*/}
				{/*		placeholder='Search articles'*/}
				{/*		className='block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'*/}
				{/*	/>*/}
				{/*	<svg*/}
				{/*		className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'*/}
				{/*		xmlns='http://www.w3.org/2000/svg'*/}
				{/*		fill='none'*/}
				{/*		viewBox='0 0 24 24'*/}
				{/*		stroke='currentColor'*/}
				{/*	>*/}
				{/*		<path*/}
				{/*			strokeLinecap='round'*/}
				{/*			strokeLinejoin='round'*/}
				{/*			strokeWidth={2}*/}
				{/*			d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'*/}
				{/*		/>*/}
				{/*	</svg>*/}
				{/*	<Link*/}
				{/*		href='/tags'*/}
				{/*		className='absolute right-10 top-2 text-gray-400 dark:text-gray-300'*/}
				{/*	>*/}
				{/*		<FilterIcon size={30}/>*/}
				{/*	</Link>*/}
				{/*</div>*/}
			</Header>

			{allCategories.map((category) => ListTitles(category))}
		</section>
	);
}

// <div className='mt-4 mb-8 grid grid-cols-[auto_1fr_auto] items-center text-sm'>
