"use client";

import type { AxiosResponse } from "axios";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PortfolioProps {
  count: number;
  folder?: string;
}

interface ServerResponse {
  count: number;
  folder: string;
  images: string[];
}

export default function Portfolio({ count, folder}: PortfolioProps) {
  const [serverResponse, setServerResponse] = useState<ServerResponse | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

  }, [count, folder]);

  return (
    <>
      {loading ? (
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      ) : (

      )}
    </>
  )
}
