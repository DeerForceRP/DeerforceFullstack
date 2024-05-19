import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const timeResponse = await axios.get(
      "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen",
      { timeout: 2000 },
    );
    return NextResponse.json({ status: 200, data: timeResponse.data });
  } catch (error) {
    console.error("Failed to fetch time data:", error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.code === "ECONNABORTED") {
        return NextResponse.json({
          status: 500,
          error: "Request timed out",
        });
      }
    }
    return NextResponse.json({
      status: 500,
      error: "Failed to fetch time data",
    });
  }
}
