import logger from '@/lib/logger';
import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
	try {
		logger.info('Fetching current time data for Europe/Copenhagen');

		const timeResponse = await axios.get(
			'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen',
			{ timeout: 2000 }
		);

		logger.info('Successfully fetched current time data');
		return NextResponse.json({ status: 200, data: timeResponse.data });
	} catch (error) {
		logger.error('Failed to fetch time data:', error);

		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			if (axiosError.code === 'ECONNABORTED') {
				logger.error('Request to time API timed out');
				return NextResponse.json({
					status: 500,
					error: 'Request timed out',
				});
			}
		}

		if (error instanceof Error) {
			logger.error(`Internal server error: ${error.message}`);
		} else {
			logger.error('Unknown error occured');
		}

		return NextResponse.json({
			status: 500,
			error: 'Failed to fetch time data',
		});
	}
}
