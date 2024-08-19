import { Link } from '@nextui-org/link'

import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/config/site'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative flex flex-col h-screen'>
			<Navbar />
			<main className='container flex-grow px-6 pt-16 mx-auto max-w-7xl'>{children}</main>
			<footer className='flex items-center justify-center w-full py-3'>
				<Link
					isExternal
					className='flex items-center gap-1 text-current'
					href={siteConfig.links.telegram}
					title='telegram'
				>
					<span className='text-default-600'>Created by</span>
					<p className='text-primary'>Svojest</p>
				</Link>
			</footer>
		</div>
	)
}
