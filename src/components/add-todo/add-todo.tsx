import { useTodoContext } from '../../providers/todo-provider'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { FormEvent, useRef, useState } from 'react'
import { SendHorizontalIcon, XIcon } from 'lucide-react'

export const AddTodo = () => {
	const [text, setText] = useState('')
	const { addTodo } = useTodoContext()
	const inputRef = useRef<HTMLInputElement>(null)

	// const initialInputProps = {
	// 	label: 'What needs to be done?',
	// 	value: text,
	// 	onChange: (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
	// }
	// const { getClearButtonProps } = useInput(initialInputProps)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (text.length === 0) {
			return
		} else {
			addTodo(text)
			setText('')
			if (inputRef.current) {
				inputRef.current.focus()
			}
		}
	}

	// Добавить при reset getClearButtonProps
	const handleReset = () => {
		setText('')
		if (inputRef.current) {
			inputRef.current.blur()
		}
	}

	return (
		<form className='flex flex-col w-full gap-3 sm:w-1/2' onSubmit={handleSubmit}>
			<Input
				ref={inputRef}
				label='What needs to be done?'
				value={text}
				onChange={e => setText(e.target.value)}
				endContent={
					<>
						<div className='flex gap-1'>
							{text.length !== 0 ? (
								<Button
									type='reset'
									isIconOnly
									variant='ghost'
									onClick={handleReset}
									aria-label='reset'
								>
									<XIcon size={16} />
								</Button>
							) : null}
							<Button type='submit' isIconOnly variant='flat' aria-label='add'>
								<SendHorizontalIcon size={16} />
							</Button>
						</div>
					</>
				}
				classNames={{ inputWrapper: 'pb-[6px]' }}
			/>
		</form>
	)
}
