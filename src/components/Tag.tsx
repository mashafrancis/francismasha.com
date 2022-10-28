import Link from 'next/link';
import kebabCase from '../lib/utils/kebabCase';

interface Props {
	text: string;
}

const Tag = ({ text }: Props) => {
	return (
		<Link
			className='mt-1 mr-3 font-normal capitalize text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
			href={`/tags/${kebabCase(text)}`}
		>
			{text.split(' ').join('-')}
		</Link>
	);
};

export default Tag;
