'use client';

import clsx from 'clsx';
import {AnimatePresence, motion, useAnimation} from 'framer-motion';
import Link from 'next/link';
import {ReactNode, useCallback, useEffect, useRef} from 'react';

import headerNavLinks from '../data/headerNavLinks';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import {usePathname} from 'next/navigation';
import metadata from '../app/metadata';
import {ThemeProvider} from 'next-themes';

interface Props {
	children: ReactNode;
}

const LayoutWrapper = ({children}: Props) => {
	const navRef = useRef<HTMLDivElement>(null);
	const control = useAnimation();
	let pathname = usePathname();
	if (pathname.includes('/blog/')) {
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
					initial={{x: 300, opacity: 0}}
					animate={{x: 0, opacity: 1}}
					exit={{x: 300, opacity: 0}}
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
							<div
								className='mx-auto flex max-w-full justify-between px-0 xl:max-w-4xl'>
								<MobileNav/>

								<div className="hidden h-6 text-2xl font-semibold sm:block">
									{metadata.headerTitle}
								</div>

								<div
									className='ml-[-0.60rem] lg:flex lg:items-center lg:justify-center'>
									<ul className='hidden lg:flex'>
										{Object.entries(headerNavLinks).map(([path, {
											name,
											href
										}]) => {
											const isActive = path === pathname;

											return (
												<Link
													key={path}
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
									<ThemeSwitch/>
								</div>
							</div>
						</nav>
						<main
							className='mx-auto mb-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0'>
							{children}
						</main>
						<Footer/>
					</div>
				</motion.div>
			</ThemeProvider>
		</AnimatePresence>
	);
};

export default LayoutWrapper;

959424
