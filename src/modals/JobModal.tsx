'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface Job {
	title: string;
	category: string;
	image: string;
	details: string;
	link: string;
	openPositions: number;
}

interface JobListProps {
	jobs: Job[];
	filterCategory: string;
}

const JobsList: FC<JobListProps> = ({ jobs, filterCategory }) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

	useEffect(() => {
		const filtered = jobs.filter(
			(job: Job) =>
				job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
				(filterCategory === 'All' || job.category === filterCategory)
		);
		setFilteredJobs(filtered);
	}, [searchTerm, filterCategory, jobs]);

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button asChild variant="link">
						<Link className="underline" href="#">
							Job Opslagstavle
						</Link>
					</Button>
				</DialogTrigger>
				<DialogContent className="h-[80vh] sm:max-w-[900px]">
					<DialogHeader>
						<DialogTitle>{filteredJobs.length} Jobs</DialogTitle>
					</DialogHeader>
					<div className="mx-auto my-5 max-w-4xl">
						<Input
							className="mb-5 box-border w-full rounded-lg border border-solid border-gray-800 px-6 py-3 text-lg"
							type="text"
							placeholder="Search Jobs..."
							value={searchTerm}
						/>
						<div className="grid grid-cols-3 gap-6">
							{filteredJobs.map((job, index) => (
								<div
									className="relative flex flex-col rounded-2xl bg-blue-400 p-6 shadow-md dark:bg-blue-900"
									key={index}
								>
									<Image
										src={job.image}
										alt={job.title}
										width={60}
										height={60}
									/>
									<h3 className="m-0 px-0 py-2.5 text-xl dark:text-white">
										{job.title}
									</h3>
									<div className="mt-1 flex-1 text-sm leading-7 dark:text-white">
										{job.details}
									</div>
									<Button asChild color="green">
										<Link href={job.link}>
											More Details
										</Link>
									</Button>
									<Badge
										className="absolute right-6 top-10"
										color={
											job.openPositions <= 5
												? 'failure'
												: job.openPositions <= 15
													? 'warning'
													: 'success'
										}
									>
										{job.openPositions === 1
											? `${job.openPositions} open position`
											: `${job.openPositions} open positions`}
									</Badge>
								</div>
							))}
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Close
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default JobsList;
