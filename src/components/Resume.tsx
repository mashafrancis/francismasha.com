'use client';

import { RoughNotation } from 'react-rough-notation';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';

export default function Resume({ resume }: { resume: string }) {
	const [resumeColor] = useRandomColorPair();

	return (
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
	);
}
