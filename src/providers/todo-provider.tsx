import { createContext, useContext, useState, ReactNode } from 'react'

interface Todo {
	id: number
	text: string
	completed: boolean
	deleted: boolean
}

interface TodoContextType {
	todos: Todo[]
	addTodo: (text: string) => void
	toggleTodo: (id: number) => void
	getCounts: () => { all: number; completed: number; current: number };
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const useTodoContext = () => {
	const context = useContext(TodoContext)

	if (!context) {
		throw new Error('useTodoContext must be used within a TodoProvider')
	}

	return context
}

export const TodoProvider = ({ children }: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodo = (text: string) => {
		setTodos(prevTodos => [
			...prevTodos,
			{ id: Date.now(), text, completed: false, deleted: false }
		])
	}


	const toggleTodo = (id: number) => {
		setTodos(prevTodos =>
			prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		)
	}

	const getCounts = () => {
		const all = todos.length;
		const completed = todos.filter((todo) => todo.completed).length;
		const current = todos.filter((todo) => !todo.completed).length;
		return { all, completed, current };
	  };

	return (
		<TodoContext.Provider value={{ todos, addTodo, toggleTodo, getCounts }}>{children}</TodoContext.Provider>
	)
}
