const getServerStatus = async (game: string, server: string) => {
	return await fetch(`/api/serverstatus?game=${game}&server=${server}`, {
		method: 'GET',
	});
};

const getWeather = async () => {
	return await fetch('/api/weather', {
		method: 'GET',
	});
};

const getTime = async () => {
	return await fetch('/api/time', {
		method: 'GET',
	});
};

const ServerStatusService = {
	getServerStatus,
	getWeather,
	getTime,
};

export default ServerStatusService;
