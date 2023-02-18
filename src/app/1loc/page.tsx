import { H2, Header } from '@/components/Form';
import Link from 'next/link';
import { allOneLocs } from 'contentlayer/generated';
import { fancyId } from '@/lib/utils/misc';

export const metadata = {
	title: '1loc',
	description: 'Javascript utilities in single line of code.',
};

function ListTitles(category: string) {
	return (
		<div key={fancyId()}>
			<H2>{category}</H2>
			<ol
				className='list-inside list-decimal divide-y divide-gray-200 marker:font-bold dark:divide-gray-600'
				type='1'
				role='list'
			>
				{allOneLocs
					.filter((snippet) => snippet.category === category)
					.map(({ slug, title, category }) => {
						const modifiedSlug = slug.split('/').at(-1);
						return (
							<li
								key={fancyId()}
								className='cursor-pointer py-3 hover:bg-gray-100'
							>
								<Link
									href={`1loc/${modifiedSlug}`}
									className='ml-4 text-gray-900 dark:text-gray-100 dark:hover:text-gray-800'
								>
									{title}
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
			></Header>

			{allCategories.map((category) => ListTitles(category))}
		</section>
	);
}

// <div className='mt-4 mb-8 grid grid-cols-[auto_1fr_auto] items-center text-sm'>
