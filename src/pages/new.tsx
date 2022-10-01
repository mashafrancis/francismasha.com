import { PageSEO } from '@/components/SEO';
import PostForm from '@/components/PostForm';
import { useState } from 'react';
import siteMetadata from '@/data/siteMetadata';
import { postDateTemplate } from '@/layouts/PostLayout';

export default function New() {
	const [isCreatingPost, creatingPost] = useState<boolean>(false);

	const handleSubmit = ({ values }) => {
		console.log(
			'Class: default, Function: handleSubmit, Line 10 values():',
			values
		);
	};
	return (
		<>
			<PageSEO
				title='New blog post'
				description='Adding a new blog post read'
			/>
			<div className='fade-in'>
				<div className='space-y-2 pt-6 pb-8 md:space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						New post
					</h1>
				</div>

				<div className='mt-6'>
					<PostForm
						isSubmitting={isCreatingPost}
						defaultValues={{
							title: '',
							content: '',
							summary: '',
							date: new Date().toLocaleDateString(
								siteMetadata.locale,
								postDateTemplate
							),
						}}
						backTo='/'
						onSubmit={(values) => {
							console.log(
								'Class: default, Function: handleSubmit, Line 10 values():',
								values
							);
						}}
					/>
				</div>
			</div>
		</>
	);
}
