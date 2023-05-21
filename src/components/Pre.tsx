'use client';

import { ReactNode, useRef, useState } from 'react';
import { MdContentCopy as CopyIcon } from 'react-icons/md';
import { fontMono } from '@/app/fonts';

interface Props {
	children: ReactNode;
}

const Pre = ({ children }: Props) => {
	const textInput = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState<boolean>(false);
	const [copied, setCopied] = useState<boolean>(false);

	const onEnter = () => {
		setHovered(true);
	};

	const onExit = () => {
		setHovered(false);
		setCopied(false);
	};

	const onCopy = async () => {
		if (textInput.current !== null) {
			setCopied(true);
			await navigator.clipboard.writeText(textInput.current.textContent!);
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	};

	return (
		<div
			ref={textInput}
			onMouseEnter={onEnter}
			onMouseLeave={onExit}
			className='relative font-mono'
		>
			{hovered && (
				<CopyIcon
					aria-label='Copy code'
					type='button'
					className={`absolute right-2 top-2 h-4 w-4 cursor-pointer rounded dark:bg-gray-800 ${
						copied ? 'text-blue-400 focus:text-blue-400' : 'text-white'
					}`}
					onClick={onCopy}
				/>
			)}

			<pre className={`${fontMono.className} font-mono not-italic`}>
				{children}
			</pre>
		</div>
	);
};

export default Pre;
