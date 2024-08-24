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
              ? "w-full md:w-[280px] lg:w-[320px]"
              : "w-full md:w-[360px] lg:w-[400px]"
          }`}
          key={imageSource.alt}
        >
          <DynamicBlurImage
            src={imageSource.src}
            alt={imageSource.alt}
            width={1200}
            height={1200}
            className={`w-full lg:w-[320px] object-cover border-2 border-green-faded rounded-sm ${
              isPortrait(imageSource)
                ? "w-full h-[420px] md:w-[280px] md:h-[440px] lg:w-[320px] lg:h-[460px]"
                : "w-full h-[280px] md:w-[360px] lg:w-[400px]"
            }`}
          />
          <figcaption className="w-[90%] mx-auto text-gray-600 text-center italic">
            {imageSource.caption}
          </figcaption>
        </div>
      ))}
    </div>
  );
}
