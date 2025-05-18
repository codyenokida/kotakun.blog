'use client'

import React, { useEffect, useRef, useCallback } from "react";

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
  const observerRef = useRef<IntersectionObserver>();

  const updateCanvas = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!video || !canvas || !ctx || video.paused || video.ended) return;

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw current video frame
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Request next frame
    animationRef.current = requestAnimationFrame(updateCanvas);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const handlePlay = () => {
      updateCanvas();
    };

    const handlePause = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            video.pause();
          } else if (autoplay) {
            video.play();
          }
        });
      },
      { threshold: 0.1 }
    );

    // Start observing the video element
    observerRef.current.observe(canvas);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    if (autoplay) {
      video.play();
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [autoplay, updateCanvas]);

  return (
    <figure className="my-8">
      <div
        className={`${isVertical ? "max-w-[70%] mx-auto" : "w-full"
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
          className={`${isVertical ? "min-h-[360px] w-full" : "w-full min-h-[211px]"} rounded-md shadow-lg mx-auto `}
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
