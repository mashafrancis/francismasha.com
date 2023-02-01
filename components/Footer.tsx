import { ReactElement, memo } from 'react';

import SocialIcons from './SocialIcons';

function Footer(): ReactElement {
	const year: number = new Date().getFullYear();

	return (
		<div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
			<SocialIcons />
			<span className='mt-4 text-xs font-light lg:mt-8'>
				&copy; {year} Francis Masha Konde.
			</span>
		</div>
	);
}

export default memo(Footer);
