import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface BaseProps {
	className?: string;
	children?: ReactNode;
}

interface HeaderProps extends BaseProps {
	title: ReactNode;
	subtitle?: ReactNode;
}

export function Header(props: HeaderProps): ReactElement {
	const { title, subtitle, children } = props;

	return (
		<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
			<h1 className='mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-4xl'>
				{title}
			</h1>
			{subtitle && (
				<p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
					{subtitle}
				</p>
			)}
			{children}
		</div>
	);
}

export function H1(props: BaseProps): ReactElement {
	const { className, children } = props;

	return (
		<h1
			className={clsx(
				'lg:text-5x mb-4 text-3xl font-bold dark:text-white',
				className
			)}
		>
			{children}
		</h1>
	);
}

export function H2(props: BaseProps): ReactElement {
	const { className, children } = props;

	return (
		<h2
			className={clsx('mb-4 text-2xl font-semibold dark:text-white', className)}
		>
			{children}
		</h2>
	);
}

export function H3(props: BaseProps): ReactElement {
	const { className, children } = props;

	return (
		<h3
			className={clsx('mb-1 text-lg font-semibold dark:text-white', className)}
		>
			{children}
		</h3>
	);
}
