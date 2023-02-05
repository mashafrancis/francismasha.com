import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function PageTitle({ children }: Props) {
	return (
		<h1 className='mb-4 space-y-2 pt-6 pb-2 text-3xl font-bold tracking-tight text-black dark:text-white md:space-y-5 md:text-4xl'>
			{children}
		</h1>
	);
}