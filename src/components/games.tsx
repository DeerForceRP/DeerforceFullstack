import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import FiveM from '../../public/images/logos/FiveM.webp';
import Minecraft from '../../public/images/logos/Minecraft.webp';

const Games: FC = () => {
	return (
		<section className="px-0 py-24" id="games">
			<div className="container mx-auto sm:px-4">
				<div className="text-center">
					<h2 className="mb-4 mt-0 text-4xl uppercase">Games</h2>
					<h3 className="mb-16 text-base font-normal italic">
						Her kan du se hvilke spil vi er aktive i
					</h3>
				</div>
				<div className="flex flex-wrap justify-center">
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 rounded border border-solid border-orange-400 bg-blue-900 p-8 text-center opacity-95 transition-all hover:bg-gray-800">
							<Link href="/fivem">
								<Image
									height={224}
									width={224}
									src={FiveM}
									alt="FiveM Logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
						</div>
					</div>
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 rounded border border-solid border-orange-400 bg-blue-900 p-8 text-center opacity-95 transition-all hover:bg-gray-800">
							<Link href="/mc">
								<Image
									height={224}
									width={224}
									src={Minecraft}
									alt="FiveM Logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Games;
