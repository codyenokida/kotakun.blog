// import Image from "next/image";

// import styles from "./HeroImage.module.scss";
import DynamicBlurImage from "./blur-image";

type HeroImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <div className="flex flex-col gap-1">
      <DynamicBlurImage
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="rounded-md border-2 border-green-faded w-full h-[240px] md:h-[400px] object-cover"
      />
      <figcaption className="w-3/4 m-auto text-gray-600 italic text-center">
        {caption}
      </figcaption>
    </div>
  );
}
