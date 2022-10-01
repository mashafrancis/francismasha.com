import { classNames } from '@/lib/classnames';
import { Loading } from '@geist-ui/core';
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
	variant?: ButtonVariant;
	responsive?: boolean;
	isLoading?: boolean;
	loadingChildren?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export function buttonClasses({
	className,
	variant = 'primary',
	responsive,
	isLoading,
	disabled,
}: ButtonProps) {
	return classNames(
		'text-base inline-flex items-center justify-center font-medium transition-colors rounded-lg focus-ring px-6 h-8',
		responsive
			? 'px-3 h-8 text-sm sm:px-4 sm:text-sm sm:h-button'
			: 'px-4 text-sm h-button',
		variant === 'primary' &&
			'bg-cyan-500 hover:text-primary-inverse hover:bg-primary-inverse text-white',
		variant === 'secondary' &&
			'border text-primary border-secondary bg-primary hover:bg-secondary',
		(disabled || isLoading) && 'opacity-50 cursor-default',
		className
	);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'primary',
			responsive,
			type = 'button',
			isLoading = false,
			loadingChildren,
			disabled,
			children,
			...rest
		},
		forwardedRef
	) => {
		return (
			<button
				{...rest}
				ref={forwardedRef}
				type={type}
				disabled={disabled || isLoading}
				className={buttonClasses({
					className,
					disabled,
					variant,
					responsive,
					isLoading,
				})}
			>
				{isLoading && <Loading className='mr-2 -ml-1 h-4 w-4 animate-spin' />}
				{isLoading && loadingChildren ? loadingChildren : children}
			</button>
		);
	}
);

Button.displayName = 'Button';
