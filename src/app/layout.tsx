import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: {
		template: 'Deerforce | %s',
		default: 'Deerforce',
	},
	description: 'Deerforce community official website',
	generator: 'Next.js',
	applicationName: 'deerforcetypescript',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'React', 'Typescript'],
	authors: [{ name: 'Nikolaj Madsen' }],
	creator: 'Nikolaj Madsen',
	publisher: 'Nikolaj Madsen',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: 'Deerforce',
		description: 'Deerforce community official website',
		url: 'www.example.com',
		siteName: 'Deerforce',
		images: [
			{
				url: 'https://nextjs.org/og.png',
				width: 800,
				height: 600,
			},
			{
				url: 'https://nextjs.org/og-alt.png',
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {},
	manifest: '',
	verification: {
		google: 'google',
		yandex: 'yandex',
		yahoo: 'yahoo',
		other: {
			me: ['my-email', 'my-link'],
		},
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
	return (
		<>
			<html lang="en">
				<head />
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
