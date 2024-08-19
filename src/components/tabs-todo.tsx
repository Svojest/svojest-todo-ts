import { Badge } from '@nextui-org/badge'
import { Tab, Tabs } from '@nextui-org/tabs'
import { TodoList } from './todo-list'
import { useTodoContext } from '@/providers/todo-provider'
import { cn } from '@nextui-org/theme'

export const TabsTodo = () => {
	const { getCounts } = useTodoContext()
	const counts = getCounts()

	return (
		<Tabs aria-label='Разделы Todo'>
			<Tab
				key={'all'}
				title={
					<Badge
						content={counts.all}
						color='default'
						size='sm'
						variant='solid'
						classNames={{ badge: cn('right-[-5px] border-none') }}
					>
						<span>All</span>
					</Badge>
				}
				className='relative max-sm:w-full'
			>
				<TodoList status='all' />
			</Tab>
			<Tab
				key={'current'}
				title={
					<Badge
						content={counts.current}
						color='danger'
						size='sm'
						variant='solid'
						classNames={{ badge: cn('right-[-5px] border-none') }}
					>
						<span>Current</span>
					</Badge>
				}
				className='max-sm:w-full'
			>
				<TodoList status='current' />
			</Tab>
			<Tab
				key={'complete'}
				title={
					<Badge
						content={counts.completed}
						color='primary'
						size='sm'
						variant='solid'
						classNames={{ badge: cn('right-[-5px] border-none') }}
					>
						<span>Completed</span>
					</Badge>
				}
				className='max-sm:w-full'
			>
				<TodoList status='completed' />
			</Tab>
		</Tabs>
	)
}
