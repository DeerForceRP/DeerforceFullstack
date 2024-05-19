import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");
  const countParam = searchParams.get("count");

  let imageFolder: string;
  let imagePaths: string[];

  if (typeof folder === "string") {
    if (folder) {
      imageFolder = path.join(
        process.cwd(),
        "public",
        "images",
        "portfolio",
        folder,
      );
    } else {
      imageFolder = path.join(process.cwd(), "public", "images", "portfolio");
    }
  } else {
    return NextResponse.json(
      { error: "Invalid folder paramter" },
      { status: 400 },
    );
  }

  let count: number;
  if (typeof countParam === "string") {
    count = parseInt(countParam);
    if (isNaN(count)) {
      return NextResponse.json(
        { error: "Invalid count paramter" },
        { status: 400 },
      );
    }
  } else {
    count = 8;
  }

  const allowedExtensions: string[] = [".webp"];
  let images: string[];
  try {
    images = fs.readdirSync(imageFolder).filter((file: string) => {
      const ext: string = path.extname(file).toLowerCase();
      return allowedExtensions.includes(ext);
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error reading image directory" },
      { status: 500 },
    );
  }

  const shuffledImages: string[] = images.sort(() => Math.random() - 0.5);

  const selectedImages: string[] = shuffledImages.slice(0, count);

  if (typeof folder === "string") {
    if (folder) {
      imagePaths = selectedImages.map(
        (image: string) => `/images/portfolio/${folder}/${image}`,
      );
    } else {
      imagePaths = selectedImages.map(
        (image: string) => `/images/portfolio/${image}`,
      );
    }
  } else {
    return NextResponse.json(
      { error: "Invalid folder paramter" },
      { status: 400 },
    );
  }

  return NextResponse.json({ images: imagePaths }, { status: 200 });
}
