import PageTitle from './PageTitle';
import { ReactElement } from 'react';

export default function Draft(): ReactElement {
	return (
		<div className='mt-24 text-center'>
			<PageTitle>
				Under Construction{' '}
				<span role='img' aria-label='roadwork sign'>
					🚧
				</span>
			</PageTitle>
		</div>
	);
}
