"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface PortfolioProps {
  count: number;
  folder?: string;
}

interface ServerResponse {
  count: number;
  folder: string;
  images: string[];
}

export default function Portfolio({ count, folder }: PortfolioProps) {
  const [serverResponse, setServerResponse] = useState<ServerResponse | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {}, [count, folder]);

  return (
    <>
      {loading ? (
        <Skeleton className="h-[20px] w-[100px] rounded-full" />
      ) : (
        <></>
      )}
    </>
  );
}
