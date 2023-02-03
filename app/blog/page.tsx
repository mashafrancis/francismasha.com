import { Header } from 'components/Form';

export const metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
	return (
		<section>
			<Header title='All posts.' />
		</section>
	);
}
