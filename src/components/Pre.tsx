import { ReactNode, useRef, useState } from 'react';
import { MdContentCopy as CopyIcon } from 'react-icons/md';

interface Props {
	children: ReactNode;
}

const Pre = ({ children }: Props) => {
	const textInput = useRef(null);
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
		setCopied(true);
		await navigator.clipboard.writeText(textInput.current.textContent);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<div
			ref={textInput}
			onMouseEnter={onEnter}
			onMouseLeave={onExit}
			className='relative'
		>
			{hovered && (
				<CopyIcon
					// size='small'
					aria-label='Copy code'
					type='button'
					className={`absolute right-2 top-2 h-4 w-4 cursor-pointer rounded dark:bg-gray-800 ${
						copied ? 'text-green-400 focus:text-green-400' : 'text-white'
					}`}
					onClick={onCopy}
				/>
			)}

			<pre>{children}</pre>
		</div>
	);
};

export default Pre;
