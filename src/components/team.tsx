import { TwitchIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

type Member = {
	id: string;
	name: string;
	avatarUrl: string;
	socialMedia?: { type: 'twitter' | 'twitch'; url: string }[];
};

type TeamMemberRole = {
	memberId: string;
	roles: string[];
};

type TeamProps = {
	name: string;
	members: TeamMemberRole[];
};

type TeamComponentProps = {
	teamName: string;
	memberName?: string;
};

const members: Member[] = [
	{
		id: '1',
		name: 'ArtemisDK',
		avatarUrl:
			'https://cdn.discordapp.com/avatars/96589915017474048/9ead733f2d23dec2229cb92e94840645.webp',
		socialMedia: [
			{ type: 'twitter', url: '#' },
			{ type: 'twitch', url: 'https://www.twitch.tv/artemis_dk' },
		],
	},
	{
		id: '2',
		name: 'Laura_1999',
		avatarUrl:
			'https://cdn.discordapp.com/avatars/376336026089553921/75ae670b3c2d408ed8ec505ad70fba4d.webp',
		socialMedia: [
			{ type: 'twitch', url: 'https://www.twitch.tv/lausee_1999' },
		],
	},
	{
		id: '3',
		name: 'JohnDoe',
		avatarUrl: 'https://example.com/johndoe-avatar.jpg',
		socialMedia: [{ type: 'twitter', url: 'https://twitter.com/johndoe' }],
	},
	{
		id: '4',
		name: 'JaneSmith',
		avatarUrl: 'https://example.com/janesmith-avatar.jpg',
		socialMedia: [
			{ type: 'twitter', url: 'https://twitter.com/janesmith' },
		],
	},
];

const teams: TeamProps[] = [
	{
		name: 'Community',
		members: [
			{ memberId: '1', roles: ['CEO', 'Web Developer'] },
			{ memberId: '2', roles: ['Ledelse'] },
		],
	},
	{
		name: 'Marketing Team',
		members: [
			{ memberId: '3', roles: ['Marketing Specialist'] },
			{ memberId: '4', roles: ['Social Media Manager'] },
		],
	},
];

const findTeam = (teamName: string) => {
	return teams.find((team) => team.name === teamName);
};

const findMember = (memberId: string) => {
	return members.find((member) => member.id === memberId);
};

const Team: FC<TeamComponentProps> = ({ teamName, memberName }) => {
	const team = findTeam(teamName);

	if (!team) {
		return <p>Team not found</p>;
	}

	const membersToDisplay = memberName
		? team.members.filter((teamMember) => {
				const member = findMember(teamMember.memberId);
				return member?.name === memberName;
			})
		: team.members;

	if (membersToDisplay.length === 0) {
		return <p>Member not found</p>;
	}

	return (
		<section className="px-0 py-24">
			<div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
				<div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight">
						{team.name}
					</h2>
				</div>
				<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
					{membersToDisplay.map((teamMember, index) => {
						const member = findMember(teamMember.memberId);
						if (!member) return null;

						return (
							<div key={index} className="text-center">
								<Image
									className="tems-center mx-auto mb-4 justify-center rounded-full"
									src={member.avatarUrl}
									alt={`${member.name} Avatar`}
									width={144}
									height={144}
								/>
								<h3 className="mb-1 text-2xl font-bold tracking-tight">
									<Link href="#">{member.name}</Link>
								</h3>
								<p>{teamMember.roles.join(' & ')}</p>
								<ul className="mt-4 flex justify-center space-x-4">
									{member.socialMedia &&
										member.socialMedia.map(
											(social, index) => (
												<li key={index}>
													<Link
														href={social.url}
														className={`${
															social.type ===
															'twitter'
																? 'text-[#00acee] hover:text-gray-900 dark:hover:text-white'
																: 'dark:-text-gray-900 text-[#6441a5] dark:hover:text-white'
														}`}
													>
														{social.type ===
														'twitter' ? (
															<TwitterIcon />
														) : (
															<TwitchIcon />
														)}
													</Link>
												</li>
											)
										)}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Team;
