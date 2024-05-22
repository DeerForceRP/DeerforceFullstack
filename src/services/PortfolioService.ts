const getImages = async (count: number, folder: string) => {
	return await fetch(`/api/getrandomimages?count=${count}&folder=${folder}`, {
		method: 'GET',
	});
};

const PortfolioService = {
	getImages,
};

export default PortfolioService;
