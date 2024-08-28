import React from "react";

interface VideoPlayerProps {
  src: string;
  caption: string;
  autoplay?: boolean;
  loop?: boolean;
  isVertical?: boolean;
}

const VideoPlayer = ({
  src,
  caption,
  autoplay = false,
  loop = false,
  isVertical = false,
}: VideoPlayerProps) => {
  return (
    <figure className="my-8">
      <div
        className={`${
          isVertical ? "max-w-[50%] mx-auto" : "w-full"
        } border-2 border-green-faded bg-green-faded rounded-md shadow-sm`}
      >
        <video
          src={src}
          controls
          autoPlay={autoplay}
          loop={loop}
          className="w-full rounded-md shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-2 w-[90%] mx-auto text-gray text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default VideoPlayer;
