import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";

interface AboutImagesProps {
  imageUrls: [string, string, string];
}

const AboutImages: React.FC<AboutImagesProps> = ({ imageUrls }) => {
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

  return (
    <div className="flex justify-between">
      {imageUrls.map(async (url, index) => {
        const base64 = await generatePlaceholder(url);

        return (
          <div
            key={index}
            className="w-[calc(33.33%-10px)] aspect-square overflow-hidden rounded-md border-2 border-green-faded relative"
          >
            <Image
              src={url}
              alt={`Image ${index + 1}`}
              layout="fill"
              className="object-cover"
              placeholder="blur"
              blurDataURL={base64}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AboutImages;
