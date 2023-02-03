'use client';

import { Header } from 'components/Form';
import { allMes } from 'contentlayer/generated';
import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';
import StackList from 'components/list/StackList';
import { WorkStack } from 'config/stack';
import { useRandomColorPair } from 'lib/hooks/useRandomColorPair';
import { Mdx } from 'components/Mdx';

export const metadata = {
	title: 'About',
	description: 'SRE Engineer at Safaricom.',
};

export default function About() {
	const { avatar, name, occupation, resume, company, body } = allMes[0];
	const [resumeColor] = useRandomColorPair();

	return (
		<section className='fade-in divide-y divide-gray-300 dark:divide-gray-800'>
			<Header title='About me.' />
			<div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
				<div className='flex flex-col items-center space-x-2 pt-8'>
					<Image
						src={avatar}
						alt='avatar'
						width='192'
						height='192'
						className='h-48 w-48 rounded-full'
					/>
					<h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
						{name}
					</h3>
					<div className='font-medium text-gray-500 dark:text-gray-400'>
						{occupation}
					</div>
					<div className='text-gray-500 dark:text-gray-400'>{company}</div>
				</div>

				<div className='prose max-w-none pt-0 pb-0 dark:prose-dark xl:col-span-2'>
					<Mdx code={body.code} />
					<span className='mt-8'>
						<a
							className='!font-normal !text-black !no-underline dark:!text-white'
							href={resume}
							target='_blank'
							rel='noreferrer'
						>
							<RoughNotation
								show
								type='box'
								animationDelay={250}
								animationDuration={2000}
								strokeWidth={2}
								color={resumeColor}
							>
								Resume
							</RoughNotation>
						</a>
						<h2 className='mt-8 mb-4 text-2xl font-semibold dark:text-white'>
							Skills
						</h2>
						<StackList stack={WorkStack} />
					</span>
				</div>
			</div>
		</section>
	);
}
