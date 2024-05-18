"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import type { FC } from "react";

interface RulesModalProps {}

const RulesModal: FC<RulesModalProps> = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button asChild variant="link">
            <Link className="underline" href="#">
              Regler
            </Link>
          </Button>
        </DialogTrigger>
        <DialogContent className="h-[80vh] overflow-auto sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Regler</DialogTitle>
          </DialogHeader>
          <div>
            <Button asChild>
              <Link
                href="#forord"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-black px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Forod
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#generelle"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-orange-500 px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Generelle
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#roleplay"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-red-600 px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Roleplay
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#2nd"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-gray-500 px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Flere Karakter
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#korsel"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-orange-400 px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Kørsel
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#arbejde"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-green-900 px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Arbejde
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#bugs"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-yellow-500 px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Bugs
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#bander"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-[#ADFF2F] px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Grupperinger / Bander
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#vaaben"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-[#8B4513] px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Våben & Skud
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#roeveri"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-[#FF66FF] px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Røveri
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#karakterdrab"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-[#C97A57] px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Karakterdrab
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#koebsalg"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-[#00A3AA] px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Køb & Salg (Real Money Trading)
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="#bandekrig"
                className="m-1 inline-block flex-auto select-none whitespace-nowrap rounded border bg-[#631100] px-3 py-1 text-center align-middle text-xl font-bold uppercase leading-normal text-white no-underline shadow-md"
              >
                Bandekrig
              </Link>
            </Button>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="forord"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-black bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h4>Forord - færrer regler, mere RP!</h4>
              <Separator />
              <p className="m-0 text-sm font-bold">
                Velkommen til Deerforce! Inden du tilslutter dig vores server,
                bedes du venligst læse og forstå følgende retningslinjer. Det er
                afgørende for at opretholde en sjov, sikker og respektfuld
                spiloplevelse for alle vores brugere.
              </p>
              <p className="font-bold">Obligatorisk Læsning:</p>
              <p>
                For at sikre en behagelig spiloplevelse for alle, forventer vi,
                at alle brugere gennemgår følgende retningslinjer, inden de
                tilslutter sig serveren første gang. Manglende overholdelse af
                disse retningslinjer kan resultere i fjernelse fra whitelist og
                behov for at ansøge igen.
              </p>
              <br />
              <p className="font-bold">Rollespil:</p>
              <p>
                Rollespil, eller RP. er kernen i vores spiloplevelse. Vi
                opfordrer til kreativitet, samarbejde og engagement i at skabe
                spændende og underholdende scenarier med dine karakterer. Vi er
                alle Deerforce, og vi har alle ansvaret for at sikre en positiv
                spiloplevelse.
              </p>
              <p className="font-bold">Forståelse af Dårlig RP:</p>
              <p>
                Dårligt RP kan have en negativ indvirking på serverens atmosfære
                og oplevelse for andre spillere. Eksempler inkludere:
              </p>
              <ul className="list-disc">
                <li>
                  Urealistisk eller urealistisk hurtige flugter fra politiet.
                </li>
                <li>Overdreven brug af magt som betjent uden rimelig årsag.</li>
                <li>
                  Manglende karakterkonsistens, f.eks. skiftenede mellem
                  forskellige roller for hurtigt.
                </li>
                <li>Manglende engagement i længevarende scenarier.</li>
              </ul>
              <p className="font-bold">Fremme af Godt RP:</p>
              <p>
                Vi opfordrer alle brugere til aktivt at bidrage til en positiv
                RP-oplevelse ved at:
              </p>
              <ul className="list-disc">
                <li>
                  Engagere sig i scenarier og stræbe efter at forlænge dem for
                  maksimere sjovet.
                </li>
                <li>
                  Overveje din karakter og dens historie, når du trægger
                  beslutninger
                </li>
                <li>
                  Være åben for interaktion og give plads til spændene
                  RP-muligheder
                </li>
                <li>
                  Skabe troværdige historier og forklaringer, især i kritiske
                  situationer.
                </li>
              </ul>
              <p className="font-bold">Flexibilitet og Ansvar:</p>
              <p>
                Vi værdsætter friheden i vores spiloplevelse, men medføre også
                et ansvar for at opretholde en positiv atmosvære. Ved at være
                den del af Deerforce-fælleskabet acceptere du dette ansvar og
                forpligter dig til at bidrage til en positiv og sjov
                spiloplevelse for alle.
              </p>
              <p className="font-bold">Regelændringer og Opdateringer:</p>
              <p>
                Vi forbeholder os retten til at ændre, tilføje eller fjerne
                regler for at sikre en retfærdig og sjov spiloplevelse for alle.
                Det er vigtigt at holde dig opdateret med eventuelle ændringer,
                da serveren forsat er i udviklingsfasen.
              </p>
              <p>
                Vi værdsætter dit engagement og bidrag til
                Deerforce-fællesskabet. Lad os sammen skabe fantastiske og
                mindreværdige rollespiloplevelser!
              </p>
              <br />
              <p className="italic">Enjoy, Holder fra Deerforce</p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="generelle"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-orange-500 bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5 className="uppercase">Generelle Regler / Outgame Regler</h5>
              <Separator />
              <p>
                0.0:{" "}
                <span className="font-bold">Kontakt af Serverpersonale:</span>{" "}
                Det er ikke tilladt at kontakte serverpersonalet via private
                beskeder uden forudgående accept. Brug venligst vores
                supportkanaler på Discord til eventuelle henvendelser.
              </p>
              <p>
                0.1: <span className="font-bold">Rekalme og Links:</span>{" "}
                Rekalme og/eller deling af links er strengt forbudt på serveren.
              </p>
              <p>
                0.2:{" "}
                <span className="font-bold">
                  Respekt og Positivt Fælleskab:
                </span>{" "}
                Deerforce fordømmer enhver for for udstilling, chikane, racisme,
                mobning, toksicitet eller andre former for negativ adfærd. Vi
                forbeholer os retten til at sanktionere for at opretholde et
                positvt og respektfuldt fællesskab.
              </p>
              <p>
                0.3:{" "}
                <span className="font-bold">
                  Indblanding i Admin/Support-sager
                </span>{" "}
                Du må ikke vlande dig i andre brugers admin- eller
                support-sager, medindre du selv hare været en direkte del af
                situaionen. Grove overtrædelser, såsom RDM (Random Deathmatch),
                VDM (Vehicle Deathmatch), Bugabuse osv., er undtaget fra denne
                regel.
              </p>
              <p>
                0.4:{" "}
                <span className="font-bold">Personlig Brugerinformation:</span>{" "}
                Din bruger og whitelist hos Deerforce er personlige og må ikke
                udleveres eller udlånes til andre eller tredjepart.
              </p>
              <p>
                0.5: <span className="font-bold">Respektfuld Adfærd:</span> Vær
                venlig at vise respekt over for alle brugere på serveren samt på
                Discord. Behandl andre med den samme respekt, som du gerne vil
                modtage.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="roleplay"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-red-600 bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>Roleplay Regler</h5>
              <Separator />
              <p>
                1.0: <span className="font-bold">Beviskrab ved Anklager:</span>{" "}
                Det er påkrævet at have beviser og karakter-ID, hvis du ønsler
                at anklage en anden spiller for et regelbrud eller tvivlsomt
                scenarie. Vi anbefaler at have et optagelsesprogram som Medal.tv
                kørende, men det er ikke et krav.
              </p>
              <p>
                1.1:{" "}
                <span className="font-bold">
                  Max Antal Kriminelle i Et RP-Scenarie:
                </span>{" "}
                Der må højest værer 15 kriminelle med samme kriminelle formål i
                et RP-scenarie. Andet vil blive betragtet som powergaming.
              </p>
              <br />
              <p>
                1.2:{" "}
                <span className="font-bold">
                  Brug af Optagelser i RP-Scenarier:
                </span>{" "}
                Optagelser fra streams eller tredjepartsprogrammer er ikke
                tilladt i RP-scenarier, medmindre de stammer fra godkendte
                overvågningskameraer (f.eks. banker, politistationer, hospitaler
                osv.) eller mobiltelefonoptagelser i first-person.
              </p>
              <p>
                1.3: <span className="font-bold">Forbud mod Voldtægt RP:</span>{" "}
                Voldtægts RP er ikke tilladt under nogen omstændigheder.
              </p>
              <br />
              <p>
                1.4:{" "}
                <span className="font-bold">
                  Forbud mod Lukning af FiveM Under Igangværende Scenarier:
                </span>{" "}
                Det er ikke tilladt at lukke FiveM, hvis man er involveret i et
                igangværende RP-scenarie. Ved forudsete hændelser som nedbrud
                eller bugs, skal du vende tilbage hurtigst muligt til scenariet
                eller informere i #rp-snak med en gyldig undskyldning.
              </p>
              <p>
                1.5: <span className="font-bold">FearRP:</span> Du skal frygte
                for dit liv i RP-situationer. Det betyder, at du ikke må trække
                våben, hvis der peges våben mod dig.
              </p>
              <ul className="list-disc">
                <li>
                  <span className="underline">Eksempel:</span>
                  <li>
                    Du røver en butik og løber ud af butikken med dit våben. Ude
                    på den anden side står en betjent med våben trukket mod dig,
                    her må du ikke prøve at trække dit våben mod betjenten - du
                    skal FRYGTE dit liv.
                  </li>
                </li>
              </ul>
              <p>
                1.6: <span className="font-bold">Meta-gaming:</span> Du må ikke
                bruge viden, som du har fået udenfor spillet, i spillet. Dette
                inkluderer at bruge oplysninger fra chats, streams eller
                ændringer i spillet uden for RP-scenarier.
              </p>
              <ul className="list-disc">
                <li>
                  <span className="underline">Eksempler kunne være:</span>
                  <li>
                    Du har lige talt med en god ven, som fortæller dig om noget
                    in-game, og bruger det in-game uden at din karatker selv har
                    oplevet det.
                  </li>
                  <li>
                    Du har lige set en #changelog på discord, og spiller på
                    dette fremfor at finde ud af det via RP
                  </li>
                  <li>
                    Du har lige set en stream og fået viden ud fra det og
                    spiller på det
                  </li>
                </li>
              </ul>
              <p>
                1.7: <span className="font-bold">RDM/VDM Forbud:</span> Random
                DeathMatch(RDM) og VehicleDeathMatch(VDM) er ikke tilladt. Ingen
                RP må foregå forud for at slå en person ned.
              </p>
              <p>
                1.8:{" "}
                <span className="font-bold">
                  Out of Character (OOC) Forbud:
                </span>{" "}
                Det er ikke tilladt at bryde ud af karakter i spillet. Al
                kommunikation skal foregå i karakter (in-game).
              </p>
              <ul className="list-disc">
                <li>
                  Udtalelser som{" "}
                  <span className="italic">
                    "Jeg er lige oppe i hovedet", "Jeg har ansøgt kommunen om at
                    blive gruppering" & "nervefejl"
                  </span>{" "}
                  er absolut no-go.
                </li>
              </ul>
              <p></p>
              <p>
                1.9: <span className="font-bold">Powergaming Forbud:</span>{" "}
                Powergaming, såsom at undlade at svare ærligt i /do-commands
                eller maniåulere RP-scenarier ved at bruge viden om regler eller
                spilmekaniker, er ikke tilladt.
              </p>
              <ul className="list-disc">
                <li>
                  <span className="underline">
                    Følgende er eksempler på powergaming:
                  </span>
                  <li>
                    Ikke at svare 100% ærligt på{" "}
                    <span className="italic">/do</span>-commands. Bemærk at
                    "in-character" må din karakter lyve alt det den vil, men{" "}
                    <span className="underline">du</span> skal altid svare 100%
                    ærligt i <span className="italic">/do</span>
                  </li>
                  <li>
                    At du bruger overnaturlige kræfter til at vende et scenarie
                    til din fordel - eller at tvinge en anden spiller ud i et
                    scenarie, hvor de ikke får muligheden for at deltage aktivt
                    i scenariet
                  </li>
                  <li>
                    At bruge din viden omkring reglerne eller game mechanics til
                    at manipulere RP scenarier.
                  </li>
                </li>
              </ul>
              <p></p>
              <p>
                1.10:{" "}
                <span className="font-bold">Passende Handlinger/Emotes:</span>{" "}
                Du skal vælge handlinger/emotes, der passer til den situation,
                du er i.
              </p>
              <ul className="list-disc">
                <li>
                  <span className="underline">Eksempler:</span>
                  <li>Argumenter når du forhandler med NPC'er</li>
                  <li>
                    Plant / Farm handling ved høst (svampe, valmuer etc.) når
                    man er kriminel.
                  </li>
                </li>
              </ul>
              <p>
                1.11:{" "}
                <span className="font-bold">
                  Forbud mod Ændring af Karakterens Udseende:
                </span>{" "}
                Det er ikke tilladt at ændre grundelementerne i din karakter
                udseende for at undgå genkendelse.
              </p>
              <ul className="list-disc">
                <li>
                  <span className="underline">
                    Følgende er <span className="italic">ikke</span> tilladt:
                  </span>
                  <li>Skifte hele din karakter model</li>
                  <li>Skifte din karakters ansigt</li>
                  <li>
                    Skifte markant hudfarve ift. hvad din karakter havde før
                  </li>
                </li>
              </ul>
              <ul className="list-disc">
                <li>
                  <span className="underline">
                    Følgende er eksempler på hvad der er tilladt:
                  </span>
                  <li>Skifte hårfarve og frisure</li>
                  <li>
                    Benytte hatte, masker og andet tøj til at gøre dig mindre
                    genkendelig
                  </li>
                </li>
              </ul>
              <p></p>
              <p>
                1.12:{" "}
                <span className="font-bold">
                  Holdning til at Vinde Situationer:
                </span>{" "}
                Alle skal huske, at vi er her for at have det sjovt, og at have
                holdningen om at skulle vinde alle situationer er ikke
                konstruktivt.
              </p>
              <p>
                1.13:{" "}
                <span className="font-bold">
                  Misbrug af Ingame Chat eller Twatter:
                </span>{" "}
                Misbrug af ingame chat eller Twatter er ikke tilladt.
              </p>
              <p>
                1.14:{" "}
                <span className="font-bold">
                  Forbud mod Brug af 3. Parts Programmer til Kommunikation:
                </span>{" "}
                Brug af 3. parts programmer til kommunikation uden for serveren
                er ikke tilladt.
              </p>
              <p>
                1.15: <span className="font-bold">RP fremfor Gunplay:</span> RP
                bør vægtes over gunplay. Det er bedre at forsøge at RP'e dig ud
                af en situation end blot at bruge våben.
              </p>
              <p>
                1.16:{" "}
                <span className="font-bold">
                  Ingen Bodycams eller Straming fra Bilen:
                </span>{" "}
                Din karatker kan ikke være bodycams eller streame ud af bilen.
                Dette ødelægger RP'en og du skal ikke kræve et klip fra
                betjenten for at blive arresteret.
              </p>
              <p>
                1.17:{" "}
                <span className="font-bold">
                  Overvågning af Seperat Discord:
                </span>{" "}
                Hvis din bande eller firma har en seperat Discord, skal der være
                mindst ét medled fra Deerforce Staff-teamet til stede, og
                staff-medlemmet skal have adgang til at se alt på Discorden for
                at undgå meta-gaming eller andre regelbrud.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="2nd"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-gray-500 bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>Flere karakterer</h5>
              <Separator />
              <p>
                <span className="font-bold">2.0</span> : Hvis du har flere
                whitelistede karakterer, må de ikke have nogen relationer eller
                kendskab til hinanden.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="korsel"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-orange-400 bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>KØRSEL</h5>
              <Separator />
              <p>
                <span className="font-bold">3.0</span> : Såfremt man er i en
                jagt/flugt, er det kun tilladt at benytte farbare veje, stier,
                gyder eller lign. som er markeret på kortet
              </p>
              <ul>
                <li>
                  Der er massere af sjove, alternative og "off-road" veje
                  markeret på kortet
                </li>
                <li>Mindre flyvehop er også OK</li>
                <li>
                  Reglen er lavet med det formål at skabe nogle sjovere, længere
                  og mere realistiske chases{" "}
                  <span className="underline">for alle</span>
                </li>
              </ul>
              <p></p>
              <p>
                <span className="font-bold">3.1</span> : En{" "}
                <span className="font-bold text-red-600">Manager</span> kan til
                en hver tid bestemme, at dit køretøj er totaltskadet, f.eks. ved
                bevidste vanvids påkørsler eller kørsel i havet m.v.
              </p>
              <p></p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="arbejde"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-green-900 bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>ARBEJDE</h5>
              <Separator />
              <p>
                <span className="font-bold">4.0</span> : Når du er på arbejde,
                forventes det, at du fokuserer på dine arbejdsopgaver. Ønsker du
                at udføre andre aktiviteter, bør du afslutte dit arbejde og tage
                fri. Det er vigtigt at respektere arbejdstiden og anvende
                fritiden til personlige aktiviteter.
              </p>
              <p>
                <span className="font-bold">4.1</span> : Det er vigtigt at vælge
                det passende arbejdskøretøj i overensstemmelse med din rolle.
                For eksempel bør en pengetransportør ikke anvende en sportsvogn
                til udførelsen af deres opgaver. Det er essentielt at overholde
                denne retningslinje for at opretholde realisme og troværdighed i
                spillet.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="bugs"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-yellow-500 bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>BUGS, SNYD, HACKING, EXPLOITING</h5>
              <Separator />
              <p>
                <span className="font-bold">5.0</span> : Enhver form for
                hacking, exploitation, modding eller andre former for snyd er
                strengt forbudt. Overtrædelse af denne regel vil medføre
                øjeblikkeligt permanent udelukkelse fra spillet uden forudgående
                varsel. Vi opretholder disse strenge retningslinjer for at sikre
                fair og ærlig spiloplevelse for alle deltagere.
              </p>
              <p>
                <span className="font-bold">5.1</span> : Opdager en spiller en
                bug eller fejl i spillet, skal dette øjeblikkeligt rapporteres
                til en <span className="font-bold text-red-600">Manager</span>{" "}
                eller svarlig person. Misbrug af sådanne fejl eller udladelse af
                at rapportere dem vil resultere i permanent udelukkelse fra
                spillet uden yderlige advarsel. Det er vigtigt at samarbejde om
                at identificere og løse fejl for at opretholde spillets
                integritet og kvalitet.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="bander"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-[#ADFF2F] bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>GRUPPERINGER / BANDER</h5>
              <Separator />
              <p>
                <span className="font-bold">6.0</span> : En gruppering eller
                bande kan maksimalt bestå af{" "}
                <span className="font-bold">15 medlemmer</span>. Dette loft er
                fastsat for at sikre en rimelig og håndterbar størrelse for
                grupperne og for at opretholde en balanceret dynamik i spillet.
              </p>
              <p>
                <span className="font-bold">6.1</span> : Det er ikke tilladt for
                banderne at danne en decideret klike eller inddrage sig i
                ekslusivt samarbejde. Dog er det tilladt at koordinere og
                samarbejde midlertidigt om kortsigtede fællesmål. Det er vigtigt
                at understrege, at vi opfordrer til rollespil (RP) frem for
                voldelige handlinger såsom mord og hævntogter. Dette sikrer en
                mere dynamisk og berigende spiloplevelser for alle involverede
                parter.
              </p>
              <p>
                <span className="font-bold">6.2</span> : Som medlem af en bande
                er det tilladt at stjæle fra bande-lageret én gang. Dog må det
                samlede værdi af det sjålne ikke overstige 10% af den samlede
                værdi af lageret. Denne regel er indført for at tilskynde til
                ansvarlig adfærd og samtidig tillade en vis grad af interaktion
                mellem bandemedlemmerne.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="vaaben"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-[#8B4513] bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>VÅBEN &amp; SKUD</h5>
              <Separator />
              <p>
                <span className="font-bold">7.0</span> : Efter brug af
                skydevåben mod andre spillere er det påkrævet, at der går mindst
                30 minutter, før du logger af fra spillet. Denne foranstaltning
                er implementeret for at give andre spillere en rimelig chance
                for at reagere på din handling og for at opretholde en retfærdig
                og balanceret spiloplevelse for alle involverede parter. Ved at
                respektere denne regel bidrager alle til en mere dynamisk og
                interaktiv spiloplevelse, hvor retfærdighed og hensyn til andre
                spilleres oplevelse er i fokus.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="roeveri"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-[#FF66FF] bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>RØVERIER</h5>
              <Separator />
              <p>
                <span className="font-bold">8.0</span> : Enhver form for bank-
                eller butiksrøveri skal planlægges omhyggeligt. Dette indebærer,
                at spillere ikke bør udføre røverier mod butikker eller banker
                flere gange om dagligt i form af røveristreaks, eller forlade
                området efter påbegyndelsen af et røveri uden at fuldføre det.
                Planlægning af røverier er afgørende for at opretholde en
                realistisk og balanceret spiloplevelse.
              </p>
              <p>
                <span className="font-bold">8.1</span> : Under bank- eller
                butiksrøverier er det tilladt at tage gidsler, så længe dette er
                en del af røveriscenariet, og gidslerne inddrages
                hensigtsmæssigt. Denne regel sikrer, at røverier udspiller sig
                på en realistisk og ansvarlig måde.
              </p>
              <p>
                <span className="font-bold">8.2</span> : Før der fortages
                skyderi under et bank- eller butiksrøveri, skal der gøres et
                forsøg på at indlede forhandlinger. Dette skridt er afgørende
                for at undgå unødvendigt vold og fremme muligheden for en
                fredelig løsning.
              </p>
              <p>
                <span className="font-bold">8.3</span> : Røveri af andre
                spillere er tilladt med det formål at stjæle de værdier, de bære
                på sig. Det er dog ikke tilladt at tvinge en spiller til at
                overdrage en bil eller et hjem under røveri
              </p>
              <p>
                <span className="font-bold">8.4</span> : Det er ikke tilladt at
                tvinge spillere til at fjerne køretøjer fra deres garage,
                medmindre køretøjet er blevet parkeret få sekunder før, og dette
                er naturlig del af røveriscenariet. På denne måde er det ikke
                tilladt at campere foran garager med det formål at røve udbytte.
                Disse regler er indført for at sikre, at røveri af køretøj,
                udføres på en rimelig og realistisk måde.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="karakterdrab"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-[#C97A57] bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>KARAKTERDRAB (CK)</h5>
              <Separator />
              <p>
                <span className="font-bold">9.0</span> : Når du får en ny
                karakter, vil denne naturligvis ikke have kenskab til
                begivenheder,d er har fundet sted med tidligere karakterer.
                Dette sikrer, at spiloplevelsen forbliver autenstisk og
                realistisk.
              </p>
              <p>
                <span className="font-bold">9.1</span> : En karakter kan ikke
                blive dræbt uden samtykke fra spilleren, medmindre særlige
                undtagelser gælder:
              </p>
              <ul className="list-disc">
                <li>
                  Hvis en spiller nægter genoplivning fra EMS eller politiet,
                  betragtes det som en accept af karakterdrab.
                </li>
                <li>
                  Hvis en spiller begår selvmord in-game, kan en medarbejder fra
                  EMS erklære karakteren for død, hvilket vil betragtes som
                  karakterdrab.
                </li>
                <li>
                  Det kan besluttes af{" "}
                  <span className="text-red-600">Manager</span>/
                  <span className="text-blue-500">Admin</span>, at en karakter
                  er død efter et voldsomt RP-scenarie, hvis mindst tre{" "}
                  <span className="text-red-600">Manager</span>/
                  <span className="text-blue-500">Admin</span> er enige om det.
                </li>
              </ul>
              <p>
                <span className="font-bold">9.2</span> : Det er ikke tilladt at
                give eller gamble værdier væk før et karakterdrab, og det er
                heller ikke tilladt at modtage værdier på en ny karakter efter
                et karakterdrab.
              </p>
              <p>
                <span className="font-bold">9.3</span> : Efter et karakterdrab
                kan spilleren vælge en valgfri donationsbil fra den dræbte
                karakters garage, forudsat at køretøjet er placeret i garagen
                tilhørende den afdøde karakter.
              </p>
              <p>
                <span className="font-bold">9.4</span> : Hvis en spiller ænsker
                en anden spiller dræbt eller CK'et (Character Kill), skal der
                indsendes en ansøgning via en ticket på Discord. Ansøgningen
                skal indeholde en kort forklaring på baggrunden for CK'et samt
                et tekstdokument, der tydeligt beskriver grundlaget og
                baggrunden for det ønskede CK. Det kræves, at det har været
                RP-scenarie mellem den dræbte og ansøgningen. Der skal også
                fremsendes en videofil fra scenariet, så ledelsen kan vurdere
                det. HVis en ansøgning godkendes, kan der udføres et drab på den
                ansøgte person.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="koebsalg"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-[#00A3AA] bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>KØB &amp; SALG (REAL MONEY TRADING)</h5>
              <Separator />
              <p>
                <span className="font-bold">10.0</span> : Det er strengt forbudt
                at handle med rigtige penge eller andre ting af værdi for ting
                indei spillet. Denne handling er i direkte modstid med FiveM's
                egne Servicevilkår og er derfor ikke tilladt. Opdages sådanne
                aktiviteter, vil det medføre øjeblikkelig permanent udelukkelse
                fra spillet uden varsel. Disse foranstaltninger er nødvendige
                for at sikre spillets integritet og retfærdighed.
              </p>
              <p>
                <span className="font-bold">10.1</span> : Forsøg på at handle
                med rigtige penge eller ting af værdi straffes på samme måde som
                beskrevet i regel 14.0. Dette understreger vigtigheden af at
                overholde reglerne og undgå enhver form for handel, der ikk er i
                overensstemmelse med FiveM's retninglinjer.
              </p>
            </div>
          </div>
          <div className="m-4 shadow-md">
            <div
              id="bandekrig"
              className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-[#631100] bg-gray-300 p-5 text-sm dark:text-black"
            >
              <h5>"GODKENDT BANDEKRIG"</h5>
              <p>
                <span className="font-bold">
                  OBS! Man kan sagtens gå i krig uden en godkendt bandekrig, men
                  så vil disse regler ikke være gældende.
                  <br />
                  Dette skal ses som tilbud, hvor der er opsat spilleregler for
                  de parter der måtte deltage i en{" "}
                  <span className="italic">'godkendt bandekrig'</span>.
                </span>
              </p>
              <Separator />
              <p>
                <span className="font-bold">11.0</span> : For at starte en krig
                imod en anden gruppering skal der sendes en ansøgning via en
                ticket på vores Discord-kanal. Ansøgningen skal kort beskrive
                hensigten og vedhæfte en udfærdiget skriftligt dokument, der
                forklar grundlaget for ønsket om en krig.
              </p>
              <p>
                <span className="font-bold">11.1</span> : En bandekrig kan
                foregå mellem to ELLER flere godkendte grupperinger.
                Grupperinger må ikke kæmpe på samme side (samme modstander) i en
                bandekrig med flere deltagere.
              </p>{" "}
              <br />
              <p>
                <span className="font-bold">Grundlæggende:</span>
              </p>
              <p>
                <span className="font-bold">11.2</span> : Såfremt en krig bliver
                godkendt af <span className="text-red-600">Manager</span> skal{" "}
                <span className="underline">alle</span> de involverede
                grupperinger gøres bekendt med at en officiel krig vil starte.
                Krigen er først officielt startet, når alle involverede
                grupperinger er underrettet.
              </p>
              <p>
                <span className="font-bold">11.3</span> : En gruppering kan
                maximalt have <span className="font-bold">15 medvirkende</span>{" "}
                spillere i krigen. (jf. regel 8.0)
              </p>
              <p>
                <span className="font-bold">11.4</span> : Det er kun
                whitelistede spillere til deltagende grupperinger, som kan
                deltage i en bandekrig.
              </p>
              <p>
                <span className="font-bold">11.5</span> : Spillere som ikke er
                whitelisted til en deltagende gruppering ved bandekrigens
                godkendelse, kan ikke deltage i krigen.
              </p>
              <p>
                <span className="font-bold">11.6</span> : Det er yderligere
                tilladt at have 2 spottere i krigen. Disse må IKKE ikke hjælpe
                til med midler (våben, penge, etc.)
              </p>{" "}
              <br />
              <p>
                <span className="font-bold">Igangværende krige:</span>
              </p>
              <p>
                Under en godkendt krig er ALLE medlemmer fra de involverede
                grupperinger, spottere samt evt. frivilligt{" "}
                <span className="italic">deltagende</span> underlagt de
                pågældende regler:
              </p>
              <div>
                <p>
                  <span className="font-bold">11.7</span> : Når en spiller
                  bliver nedkæmpet (ved brug af våben), skal han/hun bære et
                  synligt "OUT armbånd" på højre håndled, således andre
                  deltagere tydeligt kan se, at vedkommende ikke deltager aktivt
                  i krigen længere.
                </p>
                <ul>
                  <li>
                    Alle nedkæmpelser skal dokumenteres på video og godkendes af{" "}
                    <span className="text-red-600">Manager</span> /{" "}
                    <span className="text-blue-500">Admin</span>.
                  </li>
                  <li>
                    Afvises en nedkæmpelse kan karakteren fortsætte i krigen.
                  </li>
                  <li>
                    Såfremt en spiller bliver nedkæmpet og ikke "genoplivet"
                    inden for 10 min, vil spilleren være ude af krigen,{" "}
                    <span className="italic">uanset</span> hvordan scenariet
                    fortsætter.
                  </li>
                  <li>
                    Det er ikke tilladt at bringe en nedkæmpet modstander som
                    gidsel til sit eget eller andres tilholdssted.
                  </li>
                </ul>
              </div>
              <p>
                <span className="font-bold">11.8</span> Det er ikke tilladt for
                andre aktive deltagere at bære "OUT armbåndet". Overtrædelse
                medfører øjeblikkelig udelukkelse fra krigen.
              </p>
              <p>
                <span className="font-bold">11.9</span> : Såfremt en deltager i
                krigen har 3 efterfølgende dages inaktivitet, kan{" "}
                <span className="text-red-600">Manager</span> udlukke deltageren
                fra krigen (for at undgå "stalling")
              </p>
              <p>
                <span className="font-bold">11.10</span> : Under krigen skal
                grupperingens deltagere iføre sig synligt tøj med logo/navn
                eller andet tøj genkendeligt fra grupperingen. Dette gælder ikke
                spottere.{" "}
                <span className="italic">
                  (Bandetøj kan udfærdiges i samarbejde med vores skinnere fra{" "}
                  <span className="text-purple-800">Dev Team</span>)
                </span>
              </p>
              <p>
                <span className="font-bold">11.11</span> : Det er ikke tilladt
                for bander at angribe en deltagende bande ved en
                undergrundslæge.
              </p>
              <p>
                <span className="font-bold">11.12</span> : Det er tilladt for en
                deltagende bande at rushe et tilholdssted, såfremt der gives en
                “invitation” fra modstanderen. Tilladelsen går frem til næste
                servergenstart (kl. 18 eller 06){" "}
              </p>{" "}
              <br />
              <p>
                <span className="font-bold">
                  Afslutning af en krig/konflikt:
                </span>
              </p>
              <div>
                <p>
                  <span className="font-bold">11.13</span> : En bandekrig kan
                  afsluttes med godkendelse af{" "}
                  <span className="text-red-600">Manager</span> på følgende vis:{" "}
                </p>
                <ul>
                  <li>
                    Alle deltagere i en deltagende gruppering er nedkæmpet.{" "}
                  </li>
                  <li>
                    Et af de deltagende grupperinger "kaster håndklædet i
                    ringen".{" "}
                  </li>
                  <li>
                    Der aftales en gensidig våbenhvile blandt de deltagende
                    grupperinger.
                  </li>
                </ul>
              </div>
              <p>
                <span className="font-bold">11.14</span> :{" "}
                <span className="text-red-600">Manager</span> kan til enhver tid
                afbryde en krig.
              </p>
            </div>
          </div>
          <p></p>
          <div className="m-4 shadow-md">
            <div className="mx-auto my-0 w-full rounded-sm border-l-8 border-solid border-black bg-gray-300 p-5 text-sm dark:text-black">
              <p>
                Er du permanent bannede kan du efter 30 dage ansøge om unban.
                Dette er dog undtaget folk der har benyttet sig af exploits,
                hacking eller lignende bantyper. Alle andre former for ban kan
                appelleres.
              </p>
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

export default RulesModal;
