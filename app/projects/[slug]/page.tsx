import {defaultDimensions, projects, SubProject} from "config/projects";
import {notFound} from "next/navigation";
import {Children, CSSProperties, useCallback} from "react";
import Image from 'next/image';
import {H1, H2, H3} from "components/Form";
import Conditional from "components/Conditional";
import DeploymentList from "components/list/DeploymentList";
import StackList from "components/list/StackList";

export async function generateStaticParams() {
	return projects.map((post) => ({
		slug: post.slug,
	}));
}

export default function Project({params}) {
	const project = projects.find(({slug}) => slug === params.slug)

	console.log('Class: default, Function: Project, Line 20 project():', project);

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

	const [height, width] = dimensions ?? defaultDimensions;

	const renderScreenShotList = useCallback(
		(screenshot: string) => {
			const style: CSSProperties = {
				height,
				width,
			};

			return (
				<div
					className='bg-placeholder-light dark:bg-placeholder-dark mr-2 flex-shrink-0 overflow-hidden rounded'
					style={style}
				>
					<Image
						loading='eager'
						src={screenshot}
						height={height}
						width={width}
						// objectFit='cover'
						alt=''
						priority
						placeholder='blur'
						blurDataURL='data:...'
					/>
				</div>
			);
		},
		[height, width],
	);

	const renderSubProjectList = useCallback(
		({title, deployment, description}: SubProject) => (
			<>
				<H3>{title}</H3>
				<Conditional condition={!!deployment}>
					<DeploymentList deployment={deployment}/>
				</Conditional>
				<p className='mt-2 mb-4 font-light'>{description}</p>
			</>
		),
		[],
	);

	const hasDeployments = !!deployment;
	const hasScreenshots = !!screenshots.length;
	const hasSubProjects = !!subProjects.length;

	return (
		<>
			<H1 className='lg:text-5x mb-4 text-3xl font-bold dark:text-white'>
				{title}
			</H1>
			<p className='mb-4 font-normal'>{description}</p>

			<H2>Stack</H2>
			<StackList stack={stack}/>

			<Conditional condition={hasDeployments}>
				<H2>Deployments</H2>
				<DeploymentList deployment={deployment}/>
			</Conditional>

			{/*<Conditional condition={hasScreenshots}>*/}
			{/*	<H2 className='my-4'>Screenshots</H2>*/}
			{/*	<ScrollContainer*/}
			{/*		className='list mt-4 mb-1 flex overflow-auto'*/}
			{/*		hideScrollbars={false}*/}
			{/*	>*/}
			{/*		{Children.toArray(screenshots.map(renderScreenShotList))}*/}
			{/*	</ScrollContainer>*/}
			{/*</Conditional>*/}

			<Conditional condition={hasSubProjects}>
				<H2 className='mt-4'>More Products</H2>
				<p className='mt-1 mb-4 '>Some additional products</p>
				{Children.toArray(subProjects.map(renderSubProjectList))}
			</Conditional>
		</>
	);
}
