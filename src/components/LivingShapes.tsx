'use client';

import { useEffect } from 'react';

const LivingShapes = () => {
	useEffect(() => {
		const wrapper =
			typeof window !== 'undefined' && document.getElementById('wrapper');
		const rand = (min, max) =>
			Math.floor(Math.random() * (max - min + 1) + min);
		const uniqueRand = (min, max, prev) => {
			let next = prev;
			while (prev === next) next = rand(min, max);
			return next;
		};

		const combinations = [
			{ configuration: 1, roundness: 1 },
			{ configuration: 1, roundness: 2 },
			{ configuration: 1, roundness: 4 },
			{ configuration: 2, roundness: 2 },
			{ configuration: 2, roundness: 3 },
			{ configuration: 3, roundness: 3 },
		];

		let prev = 0;

		setInterval(() => {
			const index = uniqueRand(0, combinations.length - 1, prev),
				combination = combinations[index];

			wrapper.dataset.configuration = String(
				combination.configuration as number,
			);
			wrapper.dataset.roundness = String(combination.roundness as number);

			prev = index;
		}, 3000);
	}, []);

	return (
		<div
			id='wrapper'
			// className='fade-in flex flex-1 flex-col'
			data-configuration='1'
			data-roundness='1'
		>
			<div className='shape'></div>
			<div className='shape'></div>
			<div className='shape'></div>
			<div className='shape'></div>
			<div className='shape'></div>
			<div className='shape'></div>
			<div className='shape'></div>
		</div>
	);
};

export default LivingShapes;
