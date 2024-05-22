export interface Job {
	title: string;
	image: string;
	details: string;
	openPositions: number;
	link: string;
	category: string;
}

export const JobsListData: Job[] = [
	{
		title: 'Software Engineer',
		image: '/images/companys/lspd.webp',
		details:
			'Responsible for designing, developing and maintaining software systems and applications.',
		openPositions: 10,
		link: '#',
		category: 'Engineering',
	},

	{
		title: 'Data Scientist',
		image: '/images/companys/lspd.webp',
		details:
			'Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.',
		openPositions: 30,
		link: '#',
		category: 'Data',
	},

	{
		title: 'Project Manager',
		image: '/images/companys/lspd.webp',
		details:
			'Responsible for planning, executing and closing projects on time and within budget.',
		openPositions: 1,
		link: '#',
		category: 'Manager',
	},

	{
		title: 'Product Manager',
		image: '/images/companys/lspd.webp',
		details:
			'Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.',
		openPositions: 35,
		link: '#',
		category: 'Manager',
	},

	{
		title: 'Sales Representative',
		image: '/images/companys/lspd.webp',
		details:
			'Responsible for reaching out to potential customers and closing sales deals.',
		openPositions: 4,
		link: '#',
		category: 'Sale',
	},

	{
		title: 'Marketing Manager',
		image: '/images/companys/lspd.webp',
		details:
			'Responsible for creating and executing marketing strategies to promote a company or product.',
		openPositions: 11,
		link: '#',
		category: 'Manager',
	},
];
