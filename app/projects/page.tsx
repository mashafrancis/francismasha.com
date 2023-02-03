import { Header } from 'components/Form';
import config from 'config';
import Card from 'components/Card';

export const metadata = {
	title: 'Projects',
};

export default function Projects() {
	return (
		<div className='fade-in divide-y divide-gray-300 dark:divide-gray-800'>
			<Header title='Projects.' />
			<div className='container py-12'>
				<div className='-m-4 flex flex-wrap'>
					{config.projects.map(({ slug, title, description, banner }) => (
						<Card
							key={slug}
							title={title}
							description={description}
							banner={banner}
							href={`/projects/${slug}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
