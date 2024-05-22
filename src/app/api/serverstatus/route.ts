import logger from '@/lib/logger';
import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import url from 'url';

export async function GET(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<NextResponse> {
	try {
		const query = url.parse(req.url!, true).query;
		const game = query?.game as string | undefined;
		const server = query?.server as string | undefined;

		logger.info(`Received request with: ${game} and server: ${server}`);

		if (!game || !server) {
			logger.error('Missing game or server query parameter');
			return NextResponse.json({
				status: 400,
				error: 'Missing game or server query parameter.',
			});
		}

		if (game === 'fivem') {
			const serverUrls = new Map<string, string>([
				['main', 'http://45.83.246.44:30120/dynamic.json'],
				['event', 'http://45.83.246.44:30122/dynamic.json'],
				['dev', 'http://45.83.246.44:30121/dynamic.json'],
			]);

			const dynamicJsonUrl = serverUrls.get(server);

			if (dynamicJsonUrl) {
				try {
					const serverResponse = await axios.get(dynamicJsonUrl, {
						timeout: 2000,
					});
					logger.info(`Fetched data from server ${server}`);
					return NextResponse.json({
						status: 200,
						data: serverResponse.data,
					});
				} catch (error) {
					if (axios.isAxiosError(error)) {
						const axiosError = error as AxiosError;
						if (axiosError.code === 'ECONNABORTED') {
							logger.error('Request to server timed out');
							return NextResponse.json({
								status: 500,
								error: 'Reques timed out',
							});
						}
					}
					logger.error(
						`Error fetching data from server: ${server} - ${error}`
					);
					return NextResponse.json({
						status: 500,
						error: 'Internal server error',
					});
				}
			} else {
				logger.error('Invalid server specified');
				return NextResponse.json({
					status: 400,
					error: 'Invalid server specified',
				});
			}
		} else {
			logger.error('Invalid game specified.');
			return NextResponse.json({
				status: 400,
				error: 'Invalid game specified.',
			});
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			if (axiosError.code === 'ECONNABORTED') {
				logger.error('Request timed out');
				return NextResponse.json({
					status: 500,
					error: 'Request timed out.',
				});
			}
		}

		if (error instanceof Error) {
			logger.error(`Internal server errro: ${error.message}`);
		} else {
			logger.error('Unknow error occured');
		}

		return NextResponse.json({
			status: 500,
			error: 'Internal server error.',
		});
	}
}
