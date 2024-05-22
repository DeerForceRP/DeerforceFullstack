import Image from 'next/image';
import Link from 'next/link';
import background from '../../public/images/background.webp';
import { JobsListData } from '../data/jobs';
import JobsList from '../modals/JobModal';
import RulesModal from '../modals/RulesModal';
import ServerGuideModal from '../modals/ServerGuideModal';

export default function AboutUs() {
	return (
		<section className="items-center justify-center px-0 py-24 text-center align-middle">
			<div className="max-w-screen-xl items-center sm:flex">
				<div className="p-10 sm:w-1/2">
					<div className="object-center text-center">
						<Image src={background} alt="" />
					</div>
				</div>
				<div className="p-5 sm:w-1/2">
					<div>
						<span className="border-b-2 border-indigo-600 uppercase text-gray-500 dark:text-white">
							About Us
						</span>
						<h2 className="my-4 text-3xl font-bold dark:text-white sm:text-4xl">
							About <span className="text-indigo-600">Us</span>
						</h2>
						<div className="text-gray-700 dark:text-white">
							<p className="font-bold">Velkommen til Deerforce</p>
							<p className="font-bold">Hvad er DeerForce?</p>
							<p>
								DeerForce er et ny opstartet fællesskab for dem
								som gerne vil lave & opleve noget fedt RP - Vi
								stræber os nemlig efter at det skal være sjovt
								at spille. Ikke for mange regler der sætter et
								loft for jeres scenarier.
							</p>
							<p className="font-bold">
								Hvordan bliver jeg en del af DeerForce's
								fælleskab?
							</p>
							<p>
								Når du tilslutter dig vores discord, så er du
								allerede en del af vores fællesskab.
							</p>
							<p>
								Før du kan komme ind og lave dejlig RP på vores
								server skal du dog først igennem en whitelist
								process.
							</p>
							<p className="font-bold">Whitelist jobs</p>
							<p>
								Kunne du godt tænke dig et whitelistede job, så
								tjek vores{' '}
								<JobsList
									jobs={JobsListData}
									filterCategory="All"
								/>
								, for åbne stillinger
							</p>
							<p className="font-bold">
								Tjek server status her:{' '}
								<Link className="underline" href="#status">
									Server Status
								</Link>
							</p>
							<p className="font-bold">
								Tjek vores server-guide: <ServerGuideModal />
							</p>
							<p className="font-bold">
								Læs vores regler her: <RulesModal />
							</p>
							<p>
								Husk at gå ind og tjekke vores super dejlige
								samarbejdspartnere{' '}
								<Link
									className="underline"
									href="https://www.dybhosting.com"
								>
									Dybhosting
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
