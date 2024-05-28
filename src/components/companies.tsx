import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import FiveM from '../../public/images/logos/FiveM.webp';

const Companies: FC = () => {
	return (
		<section className="px-0 py-24" id="companies">
			<div className="container mx-auto sm:px-4">
				<div className="text-center">
					<h2 className="mb-4 mt-0 text-4xl capitalize">Firmaer</h2>
					<h3 className="mb-16 text-base font-normal italic">
						Firmaer på serveren
					</h3>
				</div>
				<div className="flex flex-wrap justify-center">
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 p-8 text-center">
							<Link href="#">
								<Image
									height={224}
									width={244}
									src={FiveM}
									alt="Comapny logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
							<h4 className="mb-0 mt-6">UPD</h4>
						</div>
					</div>
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 p-8 text-center">
							<Link href="#">
								<Image
									height={224}
									width={244}
									src={FiveM}
									alt="Comapny logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
							<h4 className="mb-0 mt-6">EMS</h4>
						</div>
					</div>
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 p-8 text-center">
							<Link href="#">
								<Image
									height={224}
									width={244}
									src={FiveM}
									alt="Comapny logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
							<h4 className="mb-0 mt-6">DOJ</h4>
						</div>
					</div>
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 p-8 text-center">
							<Link href="#">
								<Image
									height={224}
									width={244}
									src={FiveM}
									alt="Comapny logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
							<h4 className="mb-0 mt-6">Ümuts Pizzaria</h4>
						</div>
					</div>
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 p-8 text-center">
							<Link href="#">
								<Image
									height={224}
									width={244}
									src={FiveM}
									alt="Comapny logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
							<h4 className="mb-0 mt-6">Harrelson Investment</h4>
						</div>
					</div>
					<div className="px-4 lg:w-1/3">
						<div className="mb-4 p-8 text-center">
							<Link href="#">
								<Image
									height={224}
									width={244}
									src={FiveM}
									alt="Comapny logo"
									className="mx-auto rounded-lg border-solid border-black"
								/>
							</Link>
							<h4 className="mb-0 mt-6">Vanilla Unicorn</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Companies;
