'use client';

import { MenuIcon, MountainIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
	NavigationMenu,
	NavigationMenuLink,
	NavigationMenuList,
} from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Navigation() {
	return (
		<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
			<Link className="mr-6 hidden lg:flex" href="#">
				<MountainIcon className="h-6 w-6" />
				<span className="sr-only">Deerforce</span>
			</Link>
			<NavigationMenu className="hidden lg:flex">
				<NavigationMenuList>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="#"
						>
							Home
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="#"
						>
							About
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="#"
						>
							Services
						</Link>
					</NavigationMenuLink>
					<NavigationMenuLink asChild>
						<Link
							className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
							href="#"
						>
							Contact
						</Link>
					</NavigationMenuLink>
				</NavigationMenuList>
			</NavigationMenu>
			<Sheet>
				<SheetTrigger asChild>
					<Button className="lg:hidden" size="icon" variant="outline">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link href="#">
						<MountainIcon className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</Link>
					<div className="grid gap-2 py-6">
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold data-[active]:bg-gray-100/50 dark:data-[active]:bg-gray-800/50"
							href="#"
						>
							Home
						</Link>
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold data-[active]:bg-gray-100/50 dark:data-[active]:bg-gray-800/50"
							href="#"
						>
							About
						</Link>
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold data-[active]:bg-gray-100/50 dark:data-[active]:bg-gray-800/50"
							href="#"
						>
							Services
						</Link>
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold data-[active]:bg-gray-100/50 dark:data-[active]:bg-gray-800/50"
							href="#"
						>
							Contact
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
}
