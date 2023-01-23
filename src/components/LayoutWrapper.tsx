import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

import headerNavLinks from '../../data/headerNavLinks';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

interface Props {
	children: ReactNode;
}

function NavItem({ href, text }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<li className='capsize'>
			<Link
				href={href}
				className={clsx(
					isActive
						? 'font-semibold text-gray-800 dark:text-gray-100'
						: 'font-normal text-gray-600 dark:text-gray-300',
					'underlined mx-3 hidden px-1 transition-all md:inline-block',
				)}
			>
				{text}
			</Link>
		</li>
	);
}

const LayoutWrapper = ({ children }: Props) => {
	const navRef = useRef<HTMLDivElement>(null);
	const control = useAnimation();

	const addShadowToNavbar = useCallback(async () => {
		if (window.pageYOffset > 10) {
			navRef.current?.classList.add(
				...[
					'shadow',
					'backdrop-blur-xl',
					'bg-white/70',
					'dark:bg-gray-900',
				],
			);

			await control.start('visible');
		} else {
			navRef.current?.classList.remove(
				...[
					'shadow',
					'backdrop-blur-xl',
					'bg-white/70',
					'dark:bg-gray-900',
				],
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
				<nav ref={navRef}
				     className='top-0 left-0 right-0 z-10 w-full p-4 lg:fixed lg:sticky lg:p-2 lg:px-0'>
					<div
						className='mx-auto flex max-w-full justify-between px-0 xl:max-w-4xl'>
						<MobileNav />

						<div
							className='ml-[-0.60rem] lg:flex lg:items-center lg:justify-center'>
							<ul className='hidden lg:flex'>
								{headerNavLinks.map((link) => (
									<NavItem
										key={link.title}
										href={link.href}
										text={link.title}
									/>
								))}
							</ul>
						</div>

						<div className='flex items-center text-base leading-5'>
							<ThemeSwitch />
						</div>
					</div>
				</nav>
				<main
					className='mx-auto mb-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0'>
					{children}
				</main>
				<Footer />
			</div>
		</motion.div>
	);
};

export default LayoutWrapper;
