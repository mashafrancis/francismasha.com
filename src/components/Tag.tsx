import Link from 'next/link';
import kebabCase from '../lib/utils/kebabCase';

interface Props {
	text: string;
}

const Tag = ({ text }: Props) => {
	return (
		<Link
			className='mt-2 mr-3 rounded py-0.5 px-2 text-xs font-normal capitalize text-primary-500 outline outline-1 hover:text-primary-600 dark:hover:text-primary-400'
			href={`/tags/${kebabCase(text)}`}
		>
			{text.split(' ').join('-')}
		</Link>
	);
};

export default Tag;
