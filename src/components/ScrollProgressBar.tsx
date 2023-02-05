'use client';

import { useCallback, useEffect, useState } from 'react';

export default function ScrollProgressBar() {
	const [scroll, setScroll] = useState('0');

	const progressBarHandler = useCallback(() => {
		const totalScroll = document.documentElement.scrollTop;
		const windowHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scroll = `${totalScroll / windowHeight}`;

		setScroll(scroll);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', progressBarHandler);
		return () => window.removeEventListener('scroll', progressBarHandler);
	}, [progressBarHandler]);
	return (
		<div
			className='!fixed left-0 top-0 h-0.5 w-full origin-top-left transform  bg-gray-700 duration-300  dark:bg-white'
			style={{
				transform: `scale(${scroll},1)`,
				zIndex: 100,
			}}
		/>
	);
}
