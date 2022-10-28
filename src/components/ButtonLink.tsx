import Link, { LinkProps } from 'next/link';
import { buttonClasses, ButtonVariant } from '@/components/Button';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type ButtonLinkProps = {
	variant?: ButtonVariant;
	responsive?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href'> &
	LinkProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	(
		{
			href,
			as,
			replace,
			scroll,
			shallow,
			passHref,
			prefetch,
			locale,
			className,
			variant = 'primary',
			responsive,
			...rest
		},
		forwardedRef
	) => {
		return (
			<Link
				href={href}
				as={as}
				replace={replace}
				scroll={scroll}
				shallow={shallow}
				passHref={passHref}
				prefetch={prefetch}
				locale={locale}
				{...rest}
				ref={forwardedRef}
				className={buttonClasses({ className, variant, responsive })}
			></Link>
		);
	}
);

ButtonLink.displayName = 'ButtonLink';
