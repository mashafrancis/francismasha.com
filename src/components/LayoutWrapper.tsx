import headerNavLinks from '../data/headerNavLinks';
import { ReactNode } from 'react';
import Footer from './Footer';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import siteMetadata from '@/data/siteMetadata';
import Link from 'next/link';

interface Props {
	children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
	return (
		<SectionContainer>
			<div className='flex h-screen flex-col justify-between'>
				<header className='flex items-center justify-end py-8 sm:justify-between'>
					<div>
						<Link
							href='/'
							aria-label={siteMetadata.headerTitle}
							className='text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none'
						>
							{typeof siteMetadata.headerTitle === 'string' ? (
								<div className='hidden text-2xl font-medium sm:block'>
									{siteMetadata.headerTitle}
								</div>
							) : (
								siteMetadata.headerTitle
							)}
						</Link>
					</div>

					<div className='flex items-center text-base leading-5'>
						<div className='hidden sm:block'>
							{headerNavLinks.map((link) => (
								<Link
									key={link.title}
									href={link.href}
									className='underlined p-1 font-normal text-gray-700 hover:text-gray-500 focus:outline-none dark:text-gray-100 sm:p-4'
								>
									{link.title}
								</Link>
							))}
						</div>
					</div>

					<div className='flex items-center text-base leading-5'>
						<ThemeSwitch />
						<MobileNav />
					</div>
				</header>
				<main className='mb-auto'>{children}</main>
				<Footer />
			</div>
		</SectionContainer>
	);
};

export default LayoutWrapper;
