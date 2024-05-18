import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const timeResponse = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen');
        return NextResponse.json({ status: 200, data: timeResponse.data });
    } catch (error) {
        console.error('Failed to fetch time data:', error);
        return NextResponse.json({ status: 500, error: 'Failed to fetch time data' });
    }
}