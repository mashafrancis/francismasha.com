import { classNames } from '@/lib/classnames';
import { handleUploadImages, markdownToHtml } from '@/lib/editor';
import TextareaAutosize, {
	TextareaAutosizeProps,
} from 'react-textarea-autosize';
import TextareaMarkdown, {
	TextareaMarkdownRef,
} from 'textarea-markdown-editor';
import { HtmlView } from '@/components/HtmlView';
import {
	MdCode,
	MdFormatBold,
	MdFormatItalic,
	MdFormatListBulleted,
	MdOutlineLink,
} from 'react-icons/md';
import { useRef, useState } from 'react';
import { Switch } from '@headlessui/react';
import { browserEnv } from '../env/browser';

type MarkdownEditorProps = {
	label?: string;
	value: string;
	onChange: (value: string) => void;
	onTriggerSubmit?: () => void;
} & Omit<
	TextareaAutosizeProps,
	'value' | 'onChange' | 'onKeyDown' | 'onInput' | 'onPaste' | 'onDrop'
>;

const TOOLBAR_ITEMS = [
	{
		commandTrigger: 'bold',
		icon: <MdFormatBold className='h-6 w-6' />,
		name: 'Bold',
	},
	{
		commandTrigger: 'italic',
		icon: <MdFormatItalic className='h-6 w-6' />,
		name: 'Italic',
	},
	{
		commandTrigger: 'unordered-list',
		icon: <MdFormatListBulleted className='h-6 w-6' />,
		name: 'Unordered List',
	},
	{
		commandTrigger: 'link',
		icon: <MdOutlineLink className='h-6 w-6' />,
		name: 'Link',
	},
	{
		commandTrigger: 'code',
		icon: <MdCode className='h-6 w-6' />,
		name: 'Link',
	},
];

function MarkdownPreview({ markdown }: { markdown: string }) {
	return (
		<div className='mt-8 border-b pb-6'>
			{markdown ? (
				<HtmlView html={markdownToHtml(markdown)} />
			) : (
				<p>Nothing to preview</p>
			)}
		</div>
	);
}

export function MarkdownEditor({
	label,
	value,
	minRows = 15,
	onChange,
	onTriggerSubmit,
	...rest
}: MarkdownEditorProps) {
	const textareaMarkdownRef = useRef<TextareaMarkdownRef>(null);
	const [showPreview, setShowPreview] = useState(false);

	return (
		<div>
			{label && <label className='mb-2 block font-normal'>{label}</label>}
			<div>
				<div className='bg-primary flex items-center justify-between gap-4 rounded border px-4 py-px'>
					<div className='-ml-2 flex gap-2'>
						{TOOLBAR_ITEMS.map((toolbarItem) => (
							<button
								key={toolbarItem.commandTrigger}
								type='button'
								onClick={() => {
									textareaMarkdownRef.current?.trigger(
										toolbarItem.commandTrigger
									);
								}}
								className={classNames(
									'focus-ring mr-2 inline-flex h-8 w-8 items-center justify-center rounded focus:border disabled:cursor-default disabled:opacity-50',
									!showPreview && 'hover:text-blue transition-colors'
								)}
								disabled={showPreview}
								title={toolbarItem.name}
							>
								{toolbarItem.icon}
							</button>
						))}
					</div>

					<Switch.Group as='div' className='flex items-center'>
						<Switch
							checked={showPreview}
							onChange={(value) => {
								if (!value) {
									textareaMarkdownRef.current?.focus();
								}
								setShowPreview(value);
							}}
							className={classNames(
								showPreview ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-700',
								'focus-ring relative inline-flex h-[18px] w-8 flex-shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out'
							)}
						>
							<span
								className={classNames(
									showPreview ? 'translate-x-4' : 'translate-x-0.5',
									'inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform duration-200 ease-in-out dark:bg-gray-100'
								)}
							/>
						</Switch>
						<Switch.Label
							as='span'
							className='ml-2 cursor-pointer select-none text-sm'
						>
							Preview
						</Switch.Label>
					</Switch.Group>
				</div>

				<div className={classNames('relative mt-2', showPreview && 'sr-only')}>
					<TextareaMarkdown.Wrapper
						ref={textareaMarkdownRef}
						commands={[
							{
								name: 'indent',
								enable: false,
							},
						]}
					>
						<TextareaAutosize
							{...rest}
							value={value}
							onChange={(event) => {
								onChange(event.target.value);
							}}
							onKeyDown={(event) => {
								const { code, metaKey } = event;
								if (code === 'Enter' && metaKey) {
									onTriggerSubmit?.();
								}
							}}
							onPaste={(event) => {
								if (browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD) {
									const filesArray = Array.from(event.clipboardData.files);

									if (filesArray.length === 0) {
										return;
									}

									const imageFiles = filesArray.filter((file) =>
										/image/i.test(file.type)
									);

									if (imageFiles.length === 0) {
										return;
									}

									event.preventDefault();

									handleUploadImages(event.currentTarget, imageFiles);
								}
							}}
							onDrop={(event) => {
								if (browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD) {
									const filesArray = Array.from(event.dataTransfer.files);

									if (filesArray.length === 0) {
										return;
									}

									const imageFiles = filesArray.filter((file) =>
										/image/i.test(file.type)
									);

									if (imageFiles.length === 0) {
										return;
									}

									event.preventDefault();

									handleUploadImages(event.currentTarget, imageFiles);
								}
							}}
							className='block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
							minRows={minRows}
						/>
					</TextareaMarkdown.Wrapper>
				</div>

				{showPreview && <MarkdownPreview markdown={value} />}
			</div>
		</div>
	);
}
