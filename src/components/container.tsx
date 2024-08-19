import { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
	return <div className='p-6 border rounded-lg shadow-xl border-neutral-200'>{children}</div>
}
