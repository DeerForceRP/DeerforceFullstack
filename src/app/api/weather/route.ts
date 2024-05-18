import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=5bebf392ed47607d25810e724f3f74d3');
    return NextResponse.json({ status: 200, data: response.data });
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    return NextResponse.json({ status: 500, error: 'Failed to fetch weather data' });
  }
}
