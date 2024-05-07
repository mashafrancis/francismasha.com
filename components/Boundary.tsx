import { ReactNode } from 'react'

import clsx from 'clsx'

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: ReactNode
  animateRerendering?: boolean
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
}) => {
  return (
    <div
      className={clsx('rounded-full px-3 py-1 shadow-[0_0_1px_1px_black]', {
        'bg-gray-800 text-gray-300': color === 'default',
        'bg-vercel-pink text-white': color === 'pink',
        'bg-vercel-blue text-white': color === 'blue',
        'bg-vercel-cyan text-white': color === 'cyan',
        'bg-vercel-violet text-violet-100': color === 'violet',
        'bg-vercel-orange text-white': color === 'orange',
        'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
      })}
    >
      {children}
    </div>
  )
}
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: ReactNode
  labels?: string[]
  size?: 'small' | 'default'
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
  animateRerendering?: boolean
}) => {
  return (
    <div
      className={clsx('relative rounded-lg border border-dashed', {
        'p-3 lg:p-5': size === 'small',
        'p-4 lg:p-9': size === 'default',
        'border-gray-700': color === 'default',
        'border-vercel-pink': color === 'pink',
        'border-vercel-blue': color === 'blue',
        'border-vercel-cyan': color === 'cyan',
        'border-vercel-violet': color === 'violet',
        'border-vercel-orange': color === 'orange',
        'animate-[rerender_1s_ease-in-out_1] text-vercel-pink':
          animateRerendering,
      })}
    >
      <div
        className={clsx(
          'text-medium absolute -top-2.5 flex gap-x-1 text-[12px] leading-4 tracking-widest',
          {
            'left-3 lg:left-5': size === 'small',
            'left-4 lg:left-9': size === 'default',
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          )
        })}
      </div>

      {children}
    </div>
  )
}
