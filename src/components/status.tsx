"use client";

import ServerStatusService from "@/services/ServerStatusService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface Props {
  game: string;
  server: string;
}

export default function Status({ game, server }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      setIsLoading(true);
      try {
        const [weatherResponse, timeResponse, serverResponse] = await Promise.all([
          ServerStatusService.getWeather(),
          ServerStatusService.getTime(),
          ServerStatusService.getServerStatus(game, server).catch((error) => {
            console.log('Failed to fetch server satus:', error);
            return null;
          }),
        ]);

        const weatherData = weatherResponse.ok ? await weatherResponse.json() : null;
        const timeData = timeResponse.ok ? await timeResponse.json() : null;
        const serverData = serverResponse ? await serverResponse.json() : null;

        setStatus({
          weather: weatherData,
          time: timeData,
          server: serverData,
        });
      } catch (error) {
        console.error("An error occured while fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStatus();
  }, [game, server]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (status !== null) {
    return (
      <Card className="max-w-screen">
        <CardHeader>
          <CardTitle>FiveM - {server}</CardTitle>
        </CardHeader>
        <CardContent>
          {status.server === null ? (
            <>
            <p>
              <span className="font-bold">Status: </span>
              <span className="text-red-600">
                <span className="animate-ping rounded-full opacity-75">&bull;</span>
                Offline
              </span>
            </p>
            </>
          ) : (
            <>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Spillere online: </span>
              {status.server.data.clients}/{status.server.data.sv_maxclients}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Status: </span>
              <span className="text-lime-600">
                <span className="animate-ping rounded-full opacity-75">&bull;</span>
                Online
              </span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Vejr: </span>
              {status.weather.data.weather[0].main}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Klokkeslæt: </span>
              {status.time.data.time}
            </p>
            <p className="font-gray-700 font-normal dark:text-gray-400">
              <span className="font-bold">Connect: </span>
              <Button asChild color="success">
                <Link href="fivem://connect/cfx.re/join/wz7zdy">Tilslut</Link>
              </Button>
            </p>
            </>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-screen">
      <CardHeader>
        <CardTitle>
          FiveM - {server}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-bold">Status: </span>
          <span className="text-red-600">
            <span className="animate-ping rounded-full opacity-75">&bull;</span>
            Offline
          </span>
        </p>
      </CardContent>
    </Card>
  )

  /* return (
    <>
      {status ? (
        <div>
          {status.server === null ? (
            <Card className="max-w-screen">
              <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                FiveM
              </h4>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Status: </span>
                <span className="text-red-600">
                  <span className="animate-ping rounded-full opacity-75">
                    &bull;
                  </span>
                  Offline
                </span>
              </p>
            </Card>
          ) : (
            <Card className="max-w-screen">
              {server === "main" && (
                <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  FiveM - Main
                </h4>
              )}
              {server === "dev" && (
                <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  FiveM - Dev
                </h4>
              )}
              {server === "event" && (
                <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  FiveM - Event
                </h4>
              )}
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Spillere online: </span>
                {status.server.clients}/{status.server.sv_maxclients}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Status: </span>
                <span className="text-lime600">
                  <span className="animate-ping rounded-full opacity-75">
                    &bull;
                  </span>
                  Online
                </span>
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Vejr: </span>
                {status.weather.weather[0].main}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold">Klokkeslæt: </span>
                {status.time.time}
              </p>
              {server === "main" && (
                <p className="font-gray-700 font-normal dark:text-gray-400">
                  <span className="font-bold">Connect: </span>
                  <Button asChild color="success">
                    <Link href="fivem://connect/cfx.re/join/wz7zdy">
                      Tislut
                    </Link>
                  </Button>
                </p>
              )}
              {server === "dev" && (
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Connect: </span>
                  <Button asChild color="success">
                    <Link href="fivem://connect/cfx.re/join/pglrx7">
                      Tilslut
                    </Link>
                  </Button>
                </p>
              )}
              {server === "event" && (
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Connect: </span>
                  <Button asChild color="success">
                    <Link href="fivem://connect/cfx.re/join/wdrej2">
                      Tilslut
                    </Link>
                  </Button>
                </p>
              )}
            </Card>
          )}
        </div>
      ) : (
        <Card className="max-w-sm">
          {server === "main" && (
            <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              FiveM - Main
            </h4>
          )}
          {server === "dev" && (
            <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              FiveM - Dev
            </h4>
          )}
          {server == "event" && (
            <h4 className="tracking-tright text-xl font-semibold text-gray-900 dark:text-white">
              FiveM - Event
            </h4>
          )}
        </Card>
      )}
    </>
  ); */
}
