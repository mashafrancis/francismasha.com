import { Children, ReactElement, useCallback } from 'react'

import { Stack, StackInfo } from '@/config/stack'

interface StackListProps {
	stack: Stack[]
}

function StackList(props: StackListProps): ReactElement {
	const { stack } = props

	const renderList = useCallback((stack) => {
		const { value, color } = StackInfo[stack]

		return (
			<span
				className='mb-3 mr-3 rounded-full px-3 py-2 text-xs font-medium text-white'
				style={{ background: color }}
				key={stack}
			>
				{value}
			</span>
		)
	}, [])

	return (
		<div className='mb-2 flex flex-wrap'>
			{Children.toArray(stack.map(renderList))}
		</div>
	)
}

export default StackList
