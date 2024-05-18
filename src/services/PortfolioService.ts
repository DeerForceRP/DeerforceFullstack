const getImages = async (count: string, folder: string) => {
    return await fetch(`/api/getrandomimages?count=${count}&folder=${folder}`, {
        method: 'GET',
    });
}

export default getImages;