import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
			<div className="mx-auto px-4 py-8 lg:px-6 lg:py-16">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
						404
					</h1>
					<p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
						Something's missing.
					</p>
					<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
						Sorry, we can't find that page. You'll find lots to
						explore on the home page.
					</p>
					<Button asChild>
						<Link href="/">Back to homepage</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
