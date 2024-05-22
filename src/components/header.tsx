import Image from 'next/image';
import Link from 'next/link';
import background from '../../public/images/background.webp';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Header() {
	return (
		<section>
			<div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
				<div className="mr-auto place-self-center lg:col-span-7">
					<Link
						href="#"
						className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-500 pr-4 text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
						role="alert"
					>
						<Badge
							color="purple"
							className="mr-3 rounded-full px-4 py-1.5 text-xs text-black"
						>
							New
						</Badge>{' '}
						<span className="text-sm font-medium">
							Flowbite is out! See whats's new
						</span>
						<svg
							className="ml-2 size-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</Link>
					<h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
						Payments tool for software companies
					</h1>
					<p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
						From checkout to global sales tax compliance, companies
						around the world use Flowbite to simplify their payment
						stack.
					</p>
					<Button
						asChild
						className="mr-3 inline-flex px-5 py-3"
						color="purple"
					>
						<Link href="#">
							Get Started
							<svg
								className="-mr-1 ml-2 size-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</Link>
					</Button>
				</div>
				<div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
					<Image src={background} width={943} height={706} alt="" />
				</div>
			</div>
		</section>
	);
}
