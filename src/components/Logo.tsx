import Image from 'next/image';

const Logo = (): JSX.Element => (
	<Image
		src='/static/logo.png'
		width='36'
		height='36'
		alt='Francis Masha logo'
	/>
);

export default Logo;
