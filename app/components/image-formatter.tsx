import Image from "next/image";
import DynamicBlurImage from "./blur-image";

type ImageSource = {
  src: string;
  alt: string;
  caption?: string;
  type?: "portrait" | "landscape";
};

type ImageFormatterProps = {
  imageSources: Array<ImageSource>;
};

export default function ImageFormatter({
  imageSources = [],
}: ImageFormatterProps) {
  const isPortrait = (imageSource: ImageSource) =>
    !imageSource.type || imageSource.type === "portrait";

  return (
    <div className="image-formatter flex flex-col md:flex-row gap-3 self-center items-baseline w-full md:w-fit">
      {imageSources.map((imageSource) => (
        <div
          className={`flex flex-col justify-center items-center ${
            isPortrait(imageSource)
              ? "w-full md:w-[280px] lg:w-[400px]"
              : "w-full md:w-[360px] lg:w-[480px]"
          }`}
          key={imageSource.alt}
        >
          <DynamicBlurImage
            src={imageSource.src}
            alt={imageSource.alt}
            width={1200}
            height={1200}
            className={`w-full lg:w-[320px] object-cover border-2 border-green-faded bg-green-faded rounded-md shadow-sm ${
              isPortrait(imageSource)
                ? "w-full h-[480px] md:w-[280px] md:h-[440px] lg:w-[400px] lg:h-[540px]"
                : "w-full h-[280px] md:w-[360px] lg:w-[480px] lg:h-[320px]"
            }`}
          />
          <figcaption className="w-[90%] mx-auto text-gray text-center italic">
            {imageSource.caption}
          </figcaption>
        </div>
      ))}
    </div>
  );
}
