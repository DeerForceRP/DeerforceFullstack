"use client";

import ServerStatusService from "@/services/ServerStatusService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface WeatherData {
  data: {
    weather: { main: string }[];
  };
}

interface TimeData {
  data: {
    time: string;
  };
}

interface ServerData {
  status: number;
  data: {
    clients: number;
    sv_maxclients: number;
  };
}

interface StatusData {
  weather: WeatherData | null;
  time: TimeData | null;
  server: ServerData | null;
}

interface Props {
  game: string;
  server: string;
}

const translateWeather = (englishWeather: string): string => {
  switch (englishWeather.toLowerCase()) {
    case "clear":
      return "klart";
    case "clouds":
      return "skyet";
    case "rain":
      return "regn";
    case "thunderstrom":
      return "tordenvejr";
    case "snow":
      return "sne";
    default:
      return englishWeather;
  }
};

export default function Status({ game, server }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<StatusData | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      setIsLoading(true);
      try {
        const [weatherResponse, timeResponse, serverResponse] =
          await Promise.all([
            ServerStatusService.getWeather(),
            ServerStatusService.getTime(),
            ServerStatusService.getServerStatus(game, server).catch(
              (error: Error) => {
                console.log("Failed to fetch server status:", error);
                return null;
              },
            ),
          ]);

        if (!weatherResponse.ok || !timeResponse.ok || !serverResponse) {
          throw new Error("Failed to fetch data");
        }

        const weatherData: WeatherData | null = await weatherResponse.json();
        const timeData: TimeData | null = await timeResponse.json();
        const serverData: ServerData | null = await serverResponse.json();

        setStatus({
          weather: weatherData,
          time: timeData,
          server: serverData,
        });
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStatus();
  }, [game, server]);

  useEffect(() => {
    console.log(status);
  }, [status]);

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (status && status.server && status.server.data) {
    const { clients, sv_maxclients } = status.server.data;

    return (
      <Card className="max-w-screen">
        <CardHeader>
          <CardTitle>
            FiveM - {server.charAt(0).toUpperCase() + server.slice(1)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Spillere online: </span>
            {clients}/{sv_maxclients}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Status: </span>
            <span className="text-lime-600">
              <span className="animate-ping rounded-full opacity-75">
                &bull;
              </span>
              Online
            </span>
          </p>
          <p className="font-normal capitalize text-gray-700 dark:text-gray-400">
            <span className="font-bold">Vejr: </span>
            {status.weather
              ? translateWeather(status.weather.data.weather[0].main)
              : "Ukendt"}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Klokkeslæt: </span>
            {status.time?.data.time || "Ukendt"}
          </p>
          <p className="font-gray-700 font-normal dark:text-gray-400">
            <span className="font-bold">Connect: </span>
            <Button asChild color="success">
              <Link href="fivem://connect/cfx.re/join/wz7zdy">Tilslut</Link>
            </Button>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-screen">
      <CardHeader>
        <CardTitle>
          FiveM - {server.charAt(0).toUpperCase() + server.slice(1)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Status: </span>
          <span className="text-red-600">
            <span className="animate-ping rounded-full opacity-75">&bull;</span>
            Offline
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
