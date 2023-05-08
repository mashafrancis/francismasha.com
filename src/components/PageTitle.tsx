import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function PageTitle({ children }: Props) {
	return (
		<h1 className='mb-4 space-y-2 pb-2 pt-6 font-heading text-3xl font-bold text-black dark:text-white md:space-y-5 md:text-4xl'>
			{children}
		</h1>
	);
}
