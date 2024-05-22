'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import Link from 'next/link';
import type { FC } from 'react';

interface ServerGuideModalProps {}

const ServerGuideModal: FC<ServerGuideModalProps> = () => {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button asChild variant="link">
						<Link className="underline" href="#">
							Server Guide
						</Link>
					</Button>
				</DialogTrigger>
				<DialogContent className="h-[80vh] sm:max-w-[900px]">
					<DialogHeader>
						<DialogTitle>Server Guide</DialogTitle>
					</DialogHeader>
					<div className="m-4 mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-black bg-gray-300 p-5 text-sm text-black shadow-md">
						<p className="font-bold underline">
							Server Guide: Kom Godt i Gang
						</p>
						<p>
							Velkommen til vores server! Her er en guide, der vil
							hjælpe dig med at komme godt i gang og være
							opdateret på alle muligeheder og funktioner på vores
							server.
						</p>
						<p className="font-bold underline">Ved Rådhuset:</p>
						<p>
							Ved Rådhuset har du mulighed for at vælge mellem to
							forskelligeg startmuligheder: Arbejdsløs eller
							Taxachauffør.
						</p>
						<p className="font-bold underline">
							Whitelistede Jobs:
						</p>
						<p>
							Vi har et udvalg af whitelistede jobs på vores
							server, herunder Betjent, EMS, Advokat, Dommer, og
							flere. For at få adgang til disse job, skal du
							ansøge om at blive whitelistede. Du skal sende din
							ansøgning og afvente svar. Hvis du bliver
							accepteret, kan du starte din rolle i serveren. Hvis
							ikke, kan du stadig deltage i serveren og udforske
							andre muligheeder.
						</p>
						<p className="font-bold underline">Køb en Bil:</p>
						<p>
							Besøg bilforhandleren for at købe din egen bil.
							Dette vil give dig mulighed for at udforske Los
							Santos på egen hånd eller sammen med venner.
						</p>
						<p className="font-bold underline">
							Whitelist Procedure:
						</p>
						<ul className="list-decimal">
							<li>Send din ansøgning</li>
							<li>Vent på svar</li>
							<li>
								Hvis du får besked på det, så sæt dig i afventer
								whitelist og tag samtalen
							</li>
							<li>Ellers join serveren</li>
							<li>Done</li>
						</ul>
						<p className="font-bold underline">Serveren:</p>
						<p>
							På vores server er der et væld af ikoner, der
							repræsentere forskellige steder og muligheder, som
							du kan besøge. Nogle steder, såsom Kokain farm, Hash
							Mark & Fremstilling, vil ikke være markeret på
							kortet. Vi opfordrer til, at du udforsker og finder
							disse steder gennem rollespil. Det er en god idé at
							skabe forbindelser og danne venskaber på serveren
							for at forbedre din oplevelse.
						</p>
						<p className="font-bold underline">Chat Funktioner:</p>
						<p>
							<kbd>/me</kbd> = Handling
						</p>
						<p className="font-bold underline">
							Keybinds til serveren:
						</p>
						<p>
							De fleste keybinds kan findes under indstillinger i
							spillet. Læs venliggst grundigt igennem keybinds for
							at undgå gentagne spørgsmål
						</p>
						<p className="font-bold italic">
							!!Læs nu grundigt hvad der står, så vi ikke skal
							forklar det til alle sammen!!
						</p>
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

export default ServerGuideModal;
