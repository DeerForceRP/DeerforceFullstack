import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import url from "url";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = url.parse(req.url as string, true).query;

    const game = query?.game as string | undefined;
    const server = query?.server as string | undefined;

    if (!game || !server) {
      return NextResponse.json({
        status: 400,
        error: "Missing game or server query parameter.",
      });
    }

    if (game === "fivem") {
      const serverUrls = new Map([
        ["main", "http://45.83.246.44:30120/dynamic.json"],
        ["event", "http://45.83.246.44:30122/dynamic.json"],
        ["dev", "http://45.83.246.44:30121/dynamic.json"]
      ]);

      const dynamicJsonUrl = serverUrls.get(server);

      if (dynamicJsonUrl) {
        const serverResponse = await axios.get(dynamicJsonUrl);

        return NextResponse.json({ status: 200, data: serverResponse.data });
      } else {
        return NextResponse.json({ status: 400, error: 'Invalid server specified' });
      }
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
