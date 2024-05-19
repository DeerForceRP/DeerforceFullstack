import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=5bebf392ed47607d25810e724f3f74d3",
      { timeout: 2000 },
    );
    return NextResponse.json({ status: 200, data: response.data });
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return NextResponse.json({
      status: 500,
      error: "Failed to fetch weather data",
    });
  }
}
