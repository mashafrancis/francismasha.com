import dynamic from 'next/dynamic';

const Banner = dynamic(import('components/Banner'));

export default async function HomePage() {
	return (
		<section>
			<Banner />
		</section>
	);
}
