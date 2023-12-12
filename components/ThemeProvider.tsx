'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<AnimatePresence
			mode='wait'
			initial={false}
			onExitComplete={() => window.scrollTo(0, 0)}
		>
			<NextThemesProvider {...props}>
				<motion.div
					initial={{ x: 300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 300, opacity: 0 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
				>
					{children}
				</motion.div>
			</NextThemesProvider>
		</AnimatePresence>
	)
}
