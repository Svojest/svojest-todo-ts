import { useTodoContext } from '@/providers/todo-provider'
import { Checkbox } from '@nextui-org/checkbox'
import { cn } from '@nextui-org/theme'

type TStatus = 'all' | 'completed' | 'current'
export const TodoList = ({ status }: { status: TStatus }) => {
	const { todos, toggleTodo } = useTodoContext()

	const filteredTodos = todos.filter(todo => {
		if (status === 'completed') return todo.completed
		if (status === 'current') return !todo.completed
		return true
	})

	return (
		<div className='flex flex-col w-full sm:w-[400px] gap-2 '>
			{filteredTodos.map(todo => (
				<Checkbox
					key={todo.id}
					lineThrough
					defaultChecked={todo.completed}
					checked={todo.completed}
					isSelected={todo.completed}
					onChange={() => toggleTodo(todo.id)}
					classNames={{
						base: cn(
							'flex max-w-full bg-content1',
							'hover:bg-content2 items-center justify-start',
							'cursor-pointer rounded-lg gap-2 p-4 m-0 border-2 border-transparent',
							'data-[selected=true]:border-primary data-[selected=true]:opacity-50'
						)
					}}
				>
					<p>{todo.text}</p>
				</Checkbox>
			))}
		</div>
	)
}
