import { DefaultTags } from '../components/DefaultTags';
import { PageSEO } from '../components/SEO';
import metadata from './metadata';

export default function Head() {
	return (
		<>
			<DefaultTags />
			<PageSEO
				title={metadata.title.default}
				description={metadata.description}
			/>
		</>
	);
}
