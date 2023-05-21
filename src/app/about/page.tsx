import { Header } from '@/components/Form';
import { allMes } from 'contentlayer/generated';
import Image from 'next/image';
import StackList from '@/components/list/StackList';
import { WorkStack } from '@/config/stack';
import { Mdx } from '@/components/Mdx';
import type { Metadata } from 'next';
import Resume from '@/components/Resume';

export const metadata: Metadata = {
	title: 'About',
	description: 'SRE Engineer at Safaricom.',
};

export default function About() {
	const { avatar, name, occupation, resume, company, body } = allMes[0];

	return (
		<section className='fade-in divide-y divide-gray-200 dark:divide-gray-500'>
			<Header title='About me.' />
			<div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
				<div className='flex flex-col items-center space-x-2 pt-8'>
					<Image
						src={avatar}
						alt='avatar'
						width='192'
						height='192'
						priority
						className='h-48 w-48 rounded-full'
					/>
					<h3 className='pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight'>
						{name}
					</h3>
					<div className='font-medium text-gray-500 dark:text-gray-400'>
						{occupation}
					</div>
					<div className='text-gray-500 dark:text-gray-400'>{company}</div>
				</div>

				<div className='dark:prose-dark prose max-w-none pb-0 pt-0 xl:col-span-2'>
					<Mdx code={body.code} />
					<span className='mt-8'>
						<Resume resume={resume} />
						<h2 className='mb-4 mt-8 text-2xl font-semibold dark:text-white'>
							Skills
						</h2>
						<StackList stack={WorkStack} />
					</span>
				</div>
			</div>
		</section>
	);
}
