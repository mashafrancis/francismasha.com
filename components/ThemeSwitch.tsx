'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState<boolean>(false)
	const { theme, setTheme, resolvedTheme } = useTheme()

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), [])

	const ThemeSwitch = () => {
		setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button
			aria-label='Toggle Dark Mode'
			type='button'
			className='flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600'
			onClick={() => {
				ThemeSwitch()
			}}
		>
			{mounted && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					className='h-5 w-5 text-gray-800 dark:text-gray-200'
				>
					{resolvedTheme === 'dark' ? (
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
						/>
					) : (
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
						/>
					)}
				</svg>
			)}
		</button>
	)
}

export default ThemeSwitch
