'use client';

import { useEffect } from 'react';
import { Boundary } from '@/components/Boundary';
import Button from '@/components/Button';

export default function Error({ error, reset }: any) {
	useEffect(() => {
		console.log('logging error:', error);
	}, [error]);

	return (
		<Boundary labels={['Error UI']} color='pink'>
			<div className='space-y-4'>
				<div className='text-vercel-pink'>
					<strong className='font-bold'>Error:</strong> {error?.message}
				</div>
				<div>
					<Button onClick={() => reset()}>Try Again</Button>
				</div>
			</div>
		</Boundary>
	);
}
