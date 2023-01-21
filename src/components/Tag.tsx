import Link from 'next/link';

import kebabCase from '../lib/utils/kebabCase';

interface Props {
	text: string;
	count?: string;
}

const Tag = ({ text, count }: Props) => {
	return (
		<Link
			className='ease mt-2 mr-3 rounded-lg px-2 py-1 text-xs font-normal text-primary-500 outline outline-1 transition duration-300 hover:text-primary-600 active:bg-gray-300 dark:hover:text-primary-400'
			href={`/tags/${kebabCase(text)}`}
		>
			{text.split(' ').join('-')}
			{count && (
				<span className='pl-1 font-semibold text-gray-500'>{count}</span>
			)}
		</Link>
	);
};

export default Tag;
