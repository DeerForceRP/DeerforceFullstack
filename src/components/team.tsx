import { TwitchIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const Team: FC = () => {
	return (
		<section className="px-0 py-24">
			<div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
				<div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight">
						Vores Hold
					</h2>
				</div>
				<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
					<div className="text-center">
						<Image
							className="tems-center mx-auto mb-4 justify-center rounded-full"
							src="https://cdn.discordapp.com/avatars/96589915017474048/9ead733f2d23dec2229cb92e94840645.webp"
							alt="Avatar Logo"
							width={144}
							height={144}
						/>
						<h3 className="mb-1 text-2xl font-bold tracking-tight">
							<Link href="#">ArtemisDK</Link>
						</h3>
						<p>CEO &amp; Web Developer</p>
						<ul className="mt-4 flex justify-center space-x-4">
							<li>
								<Link
									href="#"
									className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
								>
									<TwitterIcon />
								</Link>
							</li>
							<li>
								<Link
									href="https://www.twitch.tv/artemis_dk"
									className="dark:-text-gray-900 text-[#6441a5] dark:hover:text-white"
								>
									<TwitchIcon />
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-center text-gray-500 dark:text-gray-400">
						<Image
							className="mx-auto mb-4 items-center justify-center rounded-full"
							src="https://cdn.discordapp.com/avatars/376336026089553921/75ae670b3c2d408ed8ec505ad70fba4d.webp"
							alt="Avatar logo"
							width={144}
							height={144}
						/>
						<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<Link href="#">Laura_1999</Link>
						</h3>
						<p>Ledelse</p>
						<ul className="mt-4 flex justify-center space-x-4">
							<li>
								<Link
									href="https://www.twitch.tv/lausee_1999"
									className="text-[#6441a5] hover:text-gray-900 dark:hover:text-white"
								>
									<TwitchIcon />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
