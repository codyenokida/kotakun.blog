import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

type DynamicBlurImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: any;
};

async function generatePlaceholder(imageUrl: string) {
  try {
    const file = await fs.readFile(
      path.join(process.cwd(), "public", imageUrl)
    );
    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (error) {
    console.error("Error generating placeholder:", error);
    return undefined;
  }
}

export default async function DynamicBlurImage({
  src,
  alt,
  width,
  height,
  className,
}: DynamicBlurImageProps) {
  const base64 = await generatePlaceholder(src);
  const isWebpGif =
    src.toLowerCase().endsWith(".webp") || src.toLowerCase().includes("gif");
  const unoptimized = isWebpGif;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={base64}
      className={className}
      unoptimized={unoptimized}
    />
  );
}
