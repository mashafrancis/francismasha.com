import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

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
					'underlined mx-3 hidden px-1 transition-all md:inline-block'
				)}
			>
				{text}
			</Link>
		</li>
	);
}

const LayoutWrapper = ({ children }: Props) => {
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
				<nav className='top-0 left-0 right-0 z-10 w-full border-gray-200 p-4 backdrop-blur-lg backdrop-filter dark:border-gray-600 lg:fixed lg:sticky lg:border-b lg:p-2 lg:px-0'>
					<div className='mx-auto flex max-w-full justify-between px-0 xl:max-w-4xl'>
						<MobileNav />

						<div className='ml-[-0.60rem] lg:flex lg:items-center lg:justify-center'>
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
				<main className='mx-auto mb-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0'>
					{children}
				</main>
				<Footer />
			</div>
		</motion.div>
	);
};

export default LayoutWrapper;
