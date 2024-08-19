import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
} from '@nextui-org/navbar'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { HeartFilledIcon, TelegramIcon } from '@/components/icons'

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth='xl' position='sticky'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand className='gap-3 max-w-fit'>
					<Link className='flex items-center justify-start gap-1' color='foreground' href='/'>
						<p className='font-bold text-inherit'>SVOJEST TODO</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
				<Link isExternal href={siteConfig.links.telegram}>
					<TelegramIcon className='text-default-500' size={20} />
				</Link>
				<NavbarItem className='hidden gap-2 sm:flex'>
					<ThemeSwitch />
				</NavbarItem>

				<NavbarItem className='hidden md:flex'>
					<Button
						isExternal
						as={Link}
						className='text-sm font-normal text-default-600 bg-default-100'
						href={
							'https://krasnoyarsk.hh.ru/applicant/resumes/view?resume=d26f48efff0b5c3f1a0039ed1f707179344571'
						}
						startContent={<HeartFilledIcon className='text-danger' />}
						variant='flat'
					>
						CV
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className='pl-4 sm:hidden basis-1' justify='end'>
				<Link isExternal href={siteConfig.links.telegram}>
					<TelegramIcon className='text-default-500' size={20} />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<Button
					isExternal
					as={Link}
					className='text-sm font-normal text-default-600 bg-default-100'
					href={
						'https://krasnoyarsk.hh.ru/applicant/resumes/view?resume=d26f48efff0b5c3f1a0039ed1f707179344571'
					}
					startContent={<HeartFilledIcon className='text-danger' />}
					variant='flat'
				>
					CV
				</Button>
			</NavbarMenu>
		</NextUINavbar>
	)
}
