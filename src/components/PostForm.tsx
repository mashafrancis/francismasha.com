import { TextField } from '@/components/TextField';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useEffect } from 'react';
import { useLeaveConfirm } from '@/lib/form';
import { ButtonLink } from '@/components/ButtonLink';
import { Button } from '@/components/Button';
import { FaMarkdown } from 'react-icons/fa';

type FormData = {
	title: string;
	date: string | Date;
	summary: string;
	content: string;
};

type PostFormProps = {
	defaultValues?: FormData;
	isSubmitting?: boolean;
	backTo: string;
	onSubmit: SubmitHandler<FormData>;
};

const PostForm = ({
	defaultValues,
	isSubmitting,
	onSubmit,
	backTo,
}: PostFormProps): JSX.Element => {
	const { control, register, formState, getValues, reset, handleSubmit } =
		useForm<FormData>({
			defaultValues,
		});

	useLeaveConfirm({ formState });

	const { isSubmitSuccessful } = formState;

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset(getValues());
		}
	}, [isSubmitSuccessful, reset, getValues]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField
				{...register('title', { required: true })}
				placeholder='Title'
				required
				className='!py-1.5 text-lg font-normal'
			/>

			<TextField
				{...register('summary', { required: true })}
				placeholder='Brief summary'
				required
				className='!py-1.5 text-lg font-normal'
			/>

			<TextField
				{...register('date', { required: true })}
				placeholder='Publish date'
				required
				className='!py-1.5 text-lg font-normal'
			/>

			<div className='mt-6'>
				<Controller
					name='content'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<MarkdownEditor
							// label='Post'
							value={field.value}
							onChange={field.onChange}
							onTriggerSubmit={handleSubmit(onSubmit)}
							required
						/>
					)}
				/>
			</div>

			<div className='mt-8 flex items-center justify-between gap-4'>
				<div className='flex gap-4'>
					<Button
						variant='primary'
						type='submit'
						isLoading={isSubmitting}
						loadingChildren={`${defaultValues ? 'Saving' : 'Publishing'}`}
					>
						{defaultValues?.title ? 'Save' : 'Publish'}
					</Button>
					<ButtonLink href={backTo} variant='secondary'>
						Cancel
					</ButtonLink>
				</div>
				{!isSubmitting && (
					<a
						href='https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax'
						target='_blank'
						rel='noreferrer'
						className='text-secondary hover:text-blue flex items-center gap-2 transition-colors'
					>
						<FaMarkdown />
						<span className='text-sm'>Markdown supported</span>
					</a>
				)}
			</div>
		</form>
	);
};

export default PostForm;
