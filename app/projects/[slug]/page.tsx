import { Deployment, projects, SubProject } from '@/config/projects';
import { notFound } from 'next/navigation';
import { Children, useCallback } from 'react';
import { H2, H3, Header } from '@/components/Form';
import Conditional from '@/components/Conditional';
import DeploymentList from '@/components/list/DeploymentList';
import StackList from '@/components/list/StackList';
import ScreenshotScroll from '@/components/screenshot-scroll';

export default function Project({ params }) {
	const project = projects.find(({ slug }) => slug === params.slug);

	if (!project) {
		notFound();
	}

	const {
		title,
		description,
		shortDescription,
		banner,
		dimensions,
		stack,
		deployment,
		screenshots,
		subProjects,
	} = project;

	const renderSubProjectList = useCallback(
		({ title, deployment, description }: SubProject) => (
			<>
				<H3>{title}</H3>
				<Conditional condition={!!deployment}>
					<DeploymentList deployment={deployment as Deployment} />
				</Conditional>
				<p className='mb-4 mt-2 font-light'>{description}</p>
			</>
		),
		[],
	);

	const hasDeployments = !!deployment;
	const hasScreenshots = !!screenshots.length;
	const hasSubProjects = !!subProjects.length;

	return (
		<section>
			<Header title={title} />
			<p className='mb-4 font-normal'>{description}</p>

			<H2>Stack</H2>
			<StackList stack={stack} />

			<Conditional condition={hasDeployments}>
				<H2>Deployments</H2>
				<DeploymentList deployment={deployment} />
			</Conditional>

			<Conditional condition={hasScreenshots}>
				<H2 className='my-4'>Screenshots</H2>
				<ScreenshotScroll screenshots={screenshots} dimensions={dimensions} />
			</Conditional>

			<Conditional condition={hasSubProjects}>
				<H2 className='mt-4'>More Products</H2>
				<p className='mb-4 mt-1 '>Some additional products</p>
				{Children.toArray(subProjects.map(renderSubProjectList))}
			</Conditional>
		</section>
	);
}
