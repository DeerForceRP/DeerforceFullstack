import AboutUs from '@/components/aboutus';
import Footer from '@/components/footer';
import Games from '@/components/games';
import Header from '@/components/header';
import Navigation from '@/components/navigation';
import Portfolio from '@/components/portfolio';
import ServerStatus from '@/components/serverstatus';
import Team from '@/components/team';

export default function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<AboutUs />
			<ServerStatus />
			<Portfolio count={8} />
			<Games />
			<Team teamName="Community" />
			<Footer />
		</>
	);
}
