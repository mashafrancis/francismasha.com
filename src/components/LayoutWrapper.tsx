'use client';

import clsx from 'clsx';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

import headerNavLinks from '../../data/headerNavLinks';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import { usePathname } from 'next/navigation';
import metadata from '../app/metadata';
import { ThemeProvider } from 'next-themes';
import { Grid } from './Grid';

interface Props {
	children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
	const navRef = useRef<HTMLDivElement>(null);
	const control = useAnimation();
	let pathname = usePathname();
	if (pathname?.includes('/blog/')) {
		pathname = '/blog';
	}

	const addShadowToNavbar = useCallback(async () => {
		if (window.pageYOffset > 10) {
			navRef.current?.classList.add(
				...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-gray-900'],
			);

			await control.start('visible');
		} else {
			navRef.current?.classList.remove(
				...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-gray-900'],
			);
			await control.start('hidden');
		}
	}, [control]);

	useEffect(() => {
		window.addEventListener('scroll', addShadowToNavbar);
		return () => {
			window.removeEventListener('scroll', addShadowToNavbar);
		};
	}, [addShadowToNavbar]);

	return (
		<AnimatePresence
			mode='wait'
			initial={false}
			onExitComplete={() => window.scrollTo(0, 0)}
		>
			<ThemeProvider attribute='class' defaultTheme={metadata.theme}>
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
					<div className='flex h-screen flex-col justify-between'>
						<nav
							ref={navRef}
							className='top-0 left-0 right-0 z-10 w-full p-4 lg:fixed lg:sticky lg:p-2 lg:px-0'
						>
							<Grid>
								<div className='col-span-full flex items-center justify-between lg:col-span-8 lg:col-start-3'>
									<MobileNav />

									<Link
										href='/'
										className='hidden h-6 text-xl font-normal text-gray-600 dark:text-gray-300 sm:block'
									>
										{metadata.headerTitle}
									</Link>

									<div className='ml-[-0.60rem] lg:flex lg:items-center lg:justify-center'>
										<ul className='hidden lg:flex'>
											{headerNavLinks.map(({ name, href }) => {
												const isActive = href === pathname;
												return (
													<Link
														key={name}
														href={href}
														className={clsx(
															isActive
																? 'font-semibold text-gray-800 dark:text-gray-100'
																: 'font-normal text-gray-600 dark:text-gray-300',
															'underlined mx-3 hidden px-1 transition-all md:inline-block',
														)}
													>
														{name}
													</Link>
												);
											})}
										</ul>
									</div>

									<div className='flex items-center text-base leading-5'>
										<ThemeSwitch />
									</div>
								</div>
							</Grid>
						</nav>
						<main className='mb-8'>
							<Grid>
								<div className='col-span-full mb-auto px-4 sm:px-6 lg:col-span-8 lg:col-start-3 xl:px-0'>
									{children}
								</div>
							</Grid>
						</main>
						<Footer />
					</div>
				</motion.div>
			</ThemeProvider>
		</AnimatePresence>
	);
};

export default LayoutWrapper;
