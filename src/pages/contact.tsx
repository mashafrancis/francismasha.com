import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '../../data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { RoughNotation } from 'react-rough-notation';
import { ReactElement, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { contact } from '../config/contact';

function Contact(): ReactElement {
	const [randomColor] = useRandomColorPair();
	const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

	const handleCalendarState = () => setCalendarOpen((prevState) => !prevState);

	return (
		<>
			<PageSEO
				title={`Contact - ${siteMetadata.author}`}
				description={siteMetadata.description}
			/>
			<div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
				<Header title='Contact.' />
				<div className='container py-12'>
					<p>
						Do you have a project in mind? Want to hire me? or simply wanna
						chat? Feel free to
						<span
							className='ml-2 cursor-pointer !font-bold !text-black !no-underline dark:!text-white'
							onClick={handleCalendarState}
							role='button'
							tabIndex={0}
						>
							<RoughNotation
								show
								type='underline'
								strokeWidth={4}
								animationDelay={250}
								animationDuration={2000}
								color={randomColor}
							>
								schedule a meeting
							</RoughNotation>
						</span>
					</p>
				</div>
			</div>
			<PopupModal
				url={contact.calendly}
				onModalClose={handleCalendarState}
				open={isCalendarOpen}
				rootElement={
					typeof window !== 'undefined' && document.getElementById('__next')
				}
			/>
		</>
	);
}

export default Contact;
