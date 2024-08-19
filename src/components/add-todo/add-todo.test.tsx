import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { TodoProvider } from '../../providers/todo-provider'
import { AddTodo } from './add-todo'

describe('AddTodo Component', () => {
	test('renders input and buttons', () => {
		render(
			<TodoProvider>
				<AddTodo />
			</TodoProvider>
		)

		// Проверяем наличие поля ввода с соответствующим лейблом
		expect(screen.getByLabelText(/What needs to be done?/i)).toBeInTheDocument()

		// Проверяем наличие кнопки отправки
		expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument()
	})

	test('allows the user to add a todo', () => {
		render(
			<TodoProvider>
				<AddTodo />
			</TodoProvider>
		)

		const input = screen.getByLabelText(/What needs to be done?/i)
		const submitButton = screen.getByRole('button', { name: 'add' })

		// Вводим текст в поле ввода
		fireEvent.change(input, { target: { value: 'New Todo' } })

		// Нажимаем кнопку отправки
		fireEvent.click(submitButton)
	})

	test('shows reset button after typing in input', async () => {
		render(
			<TodoProvider>
				<AddTodo />
			</TodoProvider>
		)

		// Ищем поле ввода
		const input = screen.getByLabelText(/What needs to be done?/i)

		// Вводим текст в поле ввода
		fireEvent.change(input, { target: { value: 'New Todo' } })

		// Ожидаем, что кнопка сброса появится после ввода текста
		await waitFor(() => {
			expect(screen.getByRole('button', { name: 'reset' })).toBeInTheDocument()
		})
	})

	test('hides reset button when input is cleared', async () => {
		render(
			<TodoProvider>
				<AddTodo />
			</TodoProvider>
		)

		const input = screen.getByLabelText(/What needs to be done?/i)

		// Вводим текст в поле ввода
		fireEvent.change(input, { target: { value: 'New Todo' } })

		// Ожидаем, что кнопка сброса появится после ввода текста
		await waitFor(() => {
			expect(screen.getByRole('button', { name: 'reset' })).toBeInTheDocument()
		})

		// Очищаем поле ввода
		fireEvent.change(input, { target: { value: '' } })

		// Ожидаем, что кнопка сброса исчезнет после очистки текста
		await waitFor(() => {
			expect(screen.queryByRole('button', { name: 'reset' })).not.toBeInTheDocument()
		})
	})
})
