import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
    }
}
/* import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import url from "url";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = url.parse(req.url as string, true).query;

    const game = query?.game as string | undefined;
    const server = query?.server as string | undefined;

    console.log("Game:", game);
    console.log("Server:", server);

    if (!game || !server) {
      return NextResponse.json({
        status: 400,
        error: "Missing game or server query parameter.",
      });
    }

    if (game === "fivem") {
      let dynamicJsonUrl: string;

      switch (server) {
        case "main":
          dynamicJsonUrl = "http://45.83.246.44:30120/dynamic.json";
          break;
        case "event":
          dynamicJsonUrl = "http://45.83.246.44:30122/dynamic.json";
          break;
        case "dev":
          dynamicJsonUrl = "http://45.83.246.44:30121/dynamic.json";
          break;
        default:
          return res.status(400).json({ status: "Invalid server specified." });
      }

      const [weatherResponse, timeResponse, serverResponse] = await Promise.all(
        [
          axios.get(
            "https://api.openweathermap.org/data/2.5/weather?lat=55.7529724&lon=9.4210553&appid=5bebf392ed47607d25810e724f3f74d3",
          ),
          axios.get(
            "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen",
          ),
          axios.get(dynamicJsonUrl),
        ],
      );

      const responseData = {
        weather: weatherResponse.data,
        time: timeResponse.data,
        server: serverResponse.data,
      };
      return NextResponse.json({ status: 200, data: responseData });
    } else {
      return NextResponse.json({
        status: 400,
        error: "Invalid game specified.",
      });
    }
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json({ status: 500, error: "Internal server error." });
  }
}
 */