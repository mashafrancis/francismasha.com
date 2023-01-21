import LivingShapes from '@/components/LivingShapes';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import Link from 'next/link';
import { ReactElement, memo } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface BannerProps {
	frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): ReactElement {
	const { frontMatter } = props;
	const [aboutColor, contactColor] = useRandomColorPair();

	return (
		<div className='banner grid gap-2 xl:grid-cols-2 xl:items-center'>
			<div className='fade-in col-span-1 flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-0'>
				<h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
					Hi, I'm {frontMatter.shortname}.
				</h1>
				<p className='my-4 text-lg lg:my-4 lg:text-2xl'>
					{frontMatter.occupation}.
				</p>
				<p className='font-light lg:text-xl'>
					Read more on my
					<Link className='ml-2 mr-2 font-normal text-black' href='/projects'>
						<RoughNotation
							show
							type='highlight'
							animationDelay={250}
							animationDuration={2000}
							color={contactColor}
						>
							projects
						</RoughNotation>
					</Link>
					,
					<Link className='ml-2 mr-2 font-normal text-black' href='/about'>
						<RoughNotation
							show
							type='highlight'
							animationDelay={250}
							animationDuration={2000}
							color={aboutColor}
						>
							about me
						</RoughNotation>
					</Link>
					or you can
					<Link className='ml-2 font-normal text-black' href='/contact'>
						<RoughNotation
							show
							type='highlight'
							animationDelay={250}
							animationDuration={2000}
							color={contactColor}
						>
							contact me
						</RoughNotation>
					</Link>
					.
				</p>
			</div>
			<LivingShapes />
		</div>
	);
}

export default memo(Banner);
