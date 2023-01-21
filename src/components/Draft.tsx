import { ReactElement } from 'react';

import PageTitle from './PageTitle';

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
