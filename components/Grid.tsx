import type { ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'

import clsx from 'clsx'

interface GridProps {
	children: ReactNode
	overflow?: boolean
	className?: string
	as?: ElementType
	nested?: boolean
	rowGap?: boolean
	featured?: boolean
}

const Grid = forwardRef<HTMLElement, GridProps>(function Grid(
	{ children, className, as: Tag = 'div', featured, nested, rowGap },
	ref
) {
	return (
		<Tag
			ref={ref}
			className={clsx('relative', {
				'mx-5vw': !nested,
				'w-full': nested,
				'py-10 md:py-24 lg:pb-40 lg:pt-36': featured,
			})}
		>
			{featured ? (
				<div className='-mx-5vw absolute inset-0'>
					<div className='bg-secondary max-w-8xl mx-auto h-full w-full rounded-lg' />
				</div>
			) : null}

			<div
				className={clsx(
					'relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6',
					{
						'mx-auto max-w-7xl': !nested,
						'gap-y-4 lg:gap-y-6': rowGap,
					},
					className
				)}
			>
				{children}
			</div>
		</Tag>
	)
})

export { Grid }
