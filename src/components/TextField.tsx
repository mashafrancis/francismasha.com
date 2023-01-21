import { classNames } from '@/lib/classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type TextFieldOwnProps = {
	label?: string;
	placeholder?: string;
};

type TextFieldProps = TextFieldOwnProps & ComponentPropsWithoutRef<'input'>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{ label, placeholder, id, name, type = 'text', className, ...rest },
		forwardedRef
	) => {
		return (
			<div className='mb-4'>
				{label && (
					<label htmlFor={id || name} className='mb-2 block font-normal'>
						{label}
					</label>
				)}
				<input
					{...rest}
					ref={forwardedRef}
					id={id || name}
					name={name}
					type={type}
					placeholder={placeholder}
					className={classNames(
						'block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
						className
					)}
				/>
			</div>
		);
	}
);

TextField.displayName = 'TextField';
