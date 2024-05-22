import Image from 'next/image';
import background from '../../public/images/background.webp';
import Status from './status';

export default function ServerStatus() {
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
							Server Status
						</span>
						<h2 className="my-4 text-3xl font-bold dark:text-white sm:text-4xl">
							Server{' '}
							<span className="text-indigo-600">Status</span>
						</h2>
						<div className="flex flex-wrap content-center justify-center gap-4 text-center">
							<Status game="fivem" server="main" />
							<Status game="fivem" server="dev" />
							<Status game="fivem" server="event" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
