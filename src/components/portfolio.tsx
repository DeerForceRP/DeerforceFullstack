'use client';

import PortfolioService from '@/services/PortfolioService';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface PortfolioProps {
	count: number;
	folder?: string;
}

interface ServerResponse {
	count: number;
	folder: string;
	images: string[];
}

export default function Portfolio({ count, folder }: PortfolioProps) {
	const [serverResponse, setServerResponse] = useState<ServerResponse | null>(
		null
	);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchImages = async () => {
			setLoading(true);
			try {
				const response = await PortfolioService.getImages(
					count,
					folder || ''
				);

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data: ServerResponse = await response.json();
				setServerResponse(data);
			} catch (error) {
				console.info('Failed to fetch server status:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchImages();
	}, [count, folder]);

	return (
		<section className="px-0 py-24 text-center" id="portfolio">
			<div className="container mx-auto sm:px-4">
				<h2 className="mb-4 mt-0 text-4xl uppercase dark:text-white">
					Portfolio
				</h2>
				<h3 className="mb-16 text-base font-normal italic dark:text-white">
					Billeder fra serveren
				</h3>
			</div>
			<div className="grid grid-cols-2 gap-2 md:grid-cols-4">
				{loading ? (
					<>
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
						<Skeleton className="h-[125px] w-[250px] rounded-xl" />
					</>
				) : serverResponse ? (
					serverResponse.images.map(
						(image: string, index: number) => (
							<figure className="max-w-lg" key={index}>
								<Image
									src={image}
									width={480}
									height={270}
									alt="Portfolio image"
									className="rounded-lg blur-sm transition duration-150 ease-in-out hover:filter-none"
								/>
								<figcaption className="mt-2 text-center text-sm dark:text-white">
									A caption for the above image
								</figcaption>
							</figure>
						)
					)
				) : (
					<div className="text-center">
						<h2 className="mb-4 mt-0 text-4xl uppercase dark:text-white">
							Portfolio
						</h2>
						<h3 className="mb-16 text-base font-normal italic dark:text-white">
							Billeder fra serveren
						</h3>
					</div>
				)}
			</div>
		</section>
	);
}
