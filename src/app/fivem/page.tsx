import AboutUs from '@/components/aboutus';
import Companies from '@/components/companies';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import Portfolio from '@/components/portfolio';
import ServerStatus from '@/components/serverstatus';
import Team from '@/components/team';
import { WhitelistApplication } from '@/components/whitelist-application';

export default function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<ServerStatus />
			<Portfolio count={8} />
			<AboutUs />
			{/* Whitelist Application Component here */}
			<WhitelistApplication />
			{/* Job applications Component here */}
			<Companies />
			{/* Streamers Component here */}
			<Team teamName="FiveM" />
			{/* FAQ Component here */}
			<Footer />
		</>
	);
}
