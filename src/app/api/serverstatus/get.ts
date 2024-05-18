import type { AxiosResponse } from "axios";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.query.game === "fivem") {
      const weatherPromise = axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=55.7529724&lon=9.4210553&appid=5bebf392ed47607d25810e724f3f74d3",
      );
      const timePromise = axios.get(
        "https://timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen",
      );

      let serverData: AxiosResponse<string | number> | null = null;
      switch (req.query.server) {
        case "event":
          serverData = await axios
            .get("http://45.83.246.44:30122/dynamic.json")
            .catch((err: string) => {
              console.log(err);
              return null;
            });
          break;
        case "dev":
          serverData = await axios
            .get("http://45.83.246.44:30121/dynamic.json")
            .catch((err: string) => {
              console.log(err);
              return null;
            });
          break;
        default:
          serverData = await axios
            .get("http://45.83.246.44:30120/dynamic.json")
            .catch((err: string) => {
              console.log(err);
              return null;
            });
          break;
      }

      const [weatherResponse, timeResponse] = await Promise.all([
        weatherPromise,
        timePromise,
      ]);

      const responseData = {
        weather: weatherResponse.data,
        time: timeResponse.data,
        server: serverData ? serverData.data : null,
      };
      return res.status(200).json(responseData);
      return new Response(JSON.stringify(responseData), { status: 200 });
    } else {
      return res.status(400).json({ error: "Invalid game specified." });
      return new Response("Invalid game specified", { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
    return new Response("Internal server error", { status: 500 });
  }
};
