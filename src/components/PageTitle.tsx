import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function PageTitle({ children }: Props) {
	return (
		<h1
			className='mb-8 text-4xl font-bold tracking-tight text-black dark:text-white md:text-4xl'>
			{children}
		</h1>
	);
}
