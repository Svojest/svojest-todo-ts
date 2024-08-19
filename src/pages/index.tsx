import { AddTodo } from '@/components/add-todo/add-todo'

import DefaultLayout from '@/layouts/default'
import { TodoProvider } from '@/providers/todo-provider'
import { TabsTodo } from '@/components/tabs-todo'

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className='flex flex-col items-center justify-center gap-4 '>
				<TodoProvider>
					<AddTodo />
					<TabsTodo />
				</TodoProvider>
			</section>
		</DefaultLayout>
	)
}
