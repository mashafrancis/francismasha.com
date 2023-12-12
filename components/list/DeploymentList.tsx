import { Children, ReactElement, ReactNode } from 'react'

import { Colors } from '@/config/colors'
import { Deployment } from '@/config/projects'
import { AiOutlineLink } from 'react-icons/ai'

interface DeploymentListProps {
	deployment: Deployment
}

function DeploymentList(props: DeploymentListProps): ReactElement {
	const { deployment } = props

	function renderList(type: string): ReactNode {
		const background = Colors[type]
		const link = deployment[type]

		return (
			<a
				className='mr-2 flex items-center rounded-sm px-2 py-1 text-xs font-medium text-white'
				href={link}
				style={{ background }}
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiOutlineLink className='mr-1' size={15} />
				{type}
			</a>
		)
	}

	return (
		<div className='flex'>
			{Children.toArray(Object.keys(deployment).map(renderList))}
		</div>
	)
}

export default DeploymentList
