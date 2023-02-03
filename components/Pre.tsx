'use client';

import { ReactNode, useRef, useState } from 'react';
import { MdContentCopy as CopyIcon } from 'react-icons/md';
import { JetBrains_Mono } from '@next/font/google';

export const jetbrainsMono = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
});

interface Props {
	children: ReactNode;
}

const Pre = ({ children }: Props) => {
	const textInput = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);
	const [copied, setCopied] = useState(false);

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
			className={`${jetbrainsMono.className} relative`}
		>
			{hovered && (
				<CopyIcon
					aria-label='Copy code'
					type='button'
					className={`absolute right-2 top-2 h-4 w-4 cursor-pointer rounded dark:bg-gray-800 ${
						copied
							? 'text-blue-400 focus:text-blue-400'
							: 'text-black dark:text-white'
					}`}
					onClick={onCopy}
				/>
			)}

			<pre className={`${jetbrainsMono.className}`}>{children}</pre>
		</div>
	);
};

export default Pre;
