import { H3 } from '@/components/Form';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import { Toc } from '../types/Toc';

interface Props {
	tableOfContents: Toc;
	setIsTOCActive: (val: boolean) => void;
	isTOCActive: boolean;
}

export default function TableOfContents({
	tableOfContents,
	setIsTOCActive,
	isTOCActive,
}: Props) {
	const [toc, setToc] = useState(tableOfContents);

	useEffect(() => {
		setToc(tableOfContents.filter((table: any) => table.heading.toLowerCase()));
	}, [tableOfContents]);

	const size = useWindowSize();

	return (
		<>
			{tableOfContents.length > 0 && (
				<>
					<div
						className={`fixed h-full print:hidden ${
							isTOCActive
								? 'left-0 top-[44px] opacity-100 md:top-[60px]'
								: '-left-full opacity-0'
						} font-barlow bg-darkWhite dark:bg-darkPrimary fixed z-50 flex h-screen w-full flex-col gap-1 overflow-y-scroll p-10 !pb-[100px] text-neutral-800 transition-all duration-500 dark:text-gray-200 md:left-0 md:max-w-[35%] md:p-14 md:opacity-100 lg:max-w-[30%]`}
					>
						<H3 className='-ml-[5px] mt-2 text-xl font-bold md:-ml-[6px] md:text-2xl'>
							Table of Contents
						</H3>

						<div className='relative mb-20 flex flex-col before:absolute before:left-0 before:h-full before:w-[1.5px] before:bg-neutral-500'>
							{toc.map((content) => {
								return (
									<Link
										key={content.heading}
										href={content.url}
										className='hover:bg-darkSecondary relative overflow-hidden rounded-tr-md rounded-br-md border-l-2 border-neutral-300 px-2 py-0.5 font-normal text-neutral-700 hover:text-gray-400 dark:text-neutral-200 dark:hover:border-white md:py-1 md:line-clamp-1'
										style={{ marginLeft: `${content.level * 15}px` }}
										onClick={() => {
											if (size.width < 768) {
												setIsTOCActive(false);
											}
											setIsTOCActive(false);
										}}
									>
										{content.heading}
									</Link>
								);
							})}
						</div>
					</div>

					<button
						onClick={() => {
							setIsTOCActive(!isTOCActive);
						}}
						className='fixed bottom-0 z-50 w-full bg-black py-2 font-medium text-white outline-none dark:bg-white dark:text-black md:hidden'
					>
						Table of Contents
					</button>
				</>
			)}
		</>
	);
}
