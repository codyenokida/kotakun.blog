'use client'

import React, { useEffect, useRef } from "react";

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
  autoplay = true,
  loop = false,
  isVertical = false,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvas = () => {
      if (video.paused || video.ended) return;

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Request next frame
      animationRef.current = requestAnimationFrame(updateCanvas);
    };

    video.play();

    video.addEventListener('play', () => {
      updateCanvas();
    });

    video.addEventListener('pause', () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [videoRef]);

  return (
    <figure className="my-8">
      <div
        className={`${isVertical ? "max-w-[50%] mx-auto" : "w-full"
          } border-2 border-green-faded bg-green-faded rounded-md shadow-sm`}
      >
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay={autoplay}
          loop={loop}
          playsInline
          muted
          style={{ display: 'none' }}
        >
          Your browser does not support the video tag.
        </video>
        <canvas
          ref={canvasRef}
          className="w-full rounded-md shadow-lg"
        />
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
