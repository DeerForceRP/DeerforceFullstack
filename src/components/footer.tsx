import { ModeToggle } from '@/components/themeswitcher';
import { HandCoinsIcon, LucideHandshake } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';

const Footer: FC = () => {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className="rounded-none p-4">
			<div className="flex items-center justify-between py-4">
				<div className="text-sm">
					&copy; {currentYear}{' '}
					<Link href="#" className="hover:underline">
						Deerforce
					</Link>
				</div>
				<div className="flex space-x-4">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="#"
									className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<InstagramIcon />
									<span className="sr-only">Instagram</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								Følg os på Instagram
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="#"
									className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<DiscordIcon />
									<span className="sr-only">Discord</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Join vores Discord</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="#"
									className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<YoutubeIcon />
									<span className="sr-only">Youtube</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Tjek vores YouTube</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="#"
									className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<LucideHandshake />
									<span className="sr-only">Dybhosting</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Tjek vores samarbejdspartner</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Link
									href="#"
									className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<HandCoinsIcon />
									<span className="sr-only">Donationer</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Donér</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<ModeToggle />
				</div>
			</div>
		</footer>
	);
};

function DiscordIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
		</svg>
	);
}

function InstagramIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function YoutubeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
			<path d="m10 15 5-3-5-3z" />
		</svg>
	);
}

export default Footer;
