import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const folder = searchParams.get('folder');
	const countParam = searchParams.get('count');

	// Determine the image folder path based on the optional folder parameter
	const imageFolder = folder
		? path.join(process.cwd(), 'public', 'images', 'portfolio', folder)
		: path.join(process.cwd(), 'public', 'images', 'portfolio');

	console.log(imageFolder);

	// Default count to 8 if not provided
	let count = 8;
	if (countParam) {
		const parsedCount = parseInt(countParam);
		if (isNaN(parsedCount)) {
			return NextResponse.json(
				{ error: 'Invalid count parameter' },
				{ status: 400 }
			);
		}
		count = parsedCount;
	}

	// Allowed file extensions
	const allowedExtensions = ['.webp'];

	// Read the directory and filter for allowed extensions
	let images;
	try {
		images = fs.readdirSync(imageFolder).filter((file) => {
			const ext = path.extname(file).toLowerCase();
			return allowedExtensions.includes(ext);
		});
	} catch (error) {
		return NextResponse.json(
			{ error: 'Folder not found' },
			{ status: 404 }
		);
	}

	// Shuffle and select images
	const shuffledImages = images.sort(() => Math.random() - 0.5);
	const selectedImages = shuffledImages.slice(0, count);

	// Construct image paths for the response
	const imagePaths = folder
		? selectedImages.map((image) => `/images/portfolio/${folder}/${image}`)
		: selectedImages.map((image) => `/images/portfolio/${image}`);

	// Respond with the selected image paths
	return NextResponse.json({ images: imagePaths });
}
