
"use client"

import React, { useState, useRef, useEffect } from 'react';

interface ASCIIVideoConverterProps {
    src: string;
}

const ASCIIVideoConverter: React.FC<ASCIIVideoConverterProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true); // Start as playing
    const [error, setError] = useState<string | null>(null);

    // More comprehensive ASCII characters from darkest to lightest
    const ASCII_CHARS = [
        '@', '#', '8', '&', 'o', ':', '*', '.', ' '
    ];

    const prefillCanvas = (canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            setError('Failed to get canvas context');
            return;
        }

        // Set canvas dimensions
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // Prefill canvas with ASCII_CHARS[0] in green color
        ctx.fillStyle = '#5D8A32';
        ctx.font = '13px monospace';
        const char = ASCII_CHARS[3];
        const charWidth = ctx.measureText(char).width;
        const charHeight = 8; // Approximate height for 13px font size

        for (let y = 0; y < canvas.height; y += charHeight) {
            for (let x = 0; x < canvas.width; x += charWidth) {
                ctx.fillText(char, x, y);
            }
        }
    };

    const processFrame = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            setError('Failed to get canvas context');
            return;
        }

        // Ensure video has loaded metadata
        if (video.videoWidth === 0 || video.videoHeight === 0) {
            setError('Video metadata not loaded');
            return;
        }

        // Set canvas dimensions
        const scale = 0.075; // Slightly adjusted scale
        const scaledWidth = Math.floor(video.videoWidth * scale);
        const scaledHeight = Math.floor(video.videoHeight * scale);

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Clear canvas completely black
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create temporary canvas for processing
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) {
            setError('Failed to get temporary canvas context');
            return;
        }
        tempCanvas.width = scaledWidth;
        tempCanvas.height = scaledHeight;

        // Draw scaled-down video frame to temp canvas
        tempCtx.drawImage(
            video,
            0, 0, video.videoWidth, video.videoHeight,
            0, 0, scaledWidth, scaledHeight
        );

        // Get pixel data from temp canvas
        const imageData = tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
        const data = imageData.data;

        // Prepare for ASCII rendering
        ctx.fillStyle = 'white';
        ctx.font = '13px monospace';

        // Convert pixels to ASCII with color
        for (let y = 0; y < scaledHeight; y++) {
            for (let x = 0; x < scaledWidth; x++) {
                const index = (y * scaledWidth + x) * 4;
                const r = data[index];
                const g = data[index + 1];
                const b = data[index + 2];

                // Calculate brightness
                const brightness = (r + g + b) / 4;
                const charIndex = Math.floor(
                    (brightness / 255) * (ASCII_CHARS.length - 1)
                );

                // Set fill style to the pixel color
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

                // Draw ASCII character
                ctx.fillText(
                    ASCII_CHARS[charIndex],
                    x * (1 / scale),
                    y * (1 / scale)
                );
            }
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Prefill the canvas before the video loads
        prefillCanvas(canvas);

        if (!video) return;

        // Reset error state
        setError(null);

        // Event listeners for video loading and frame updates
        const handleLoadedMetadata = () => {
            processFrame();
        };

        const handleTimeUpdate = () => {
            processFrame();
        };

        // Add event listeners
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('timeupdate', handleTimeUpdate);

        // Start playing the video automatically
        video.play();

        // Cleanup
        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [src, videoRef.current]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="w-full h-[280px] rounded-md max-w-xl mx-auto">
            <div className="relative">
                <video
                    ref={videoRef}
                    src={src}
                    className="hidden"
                    preload="metadata"
                    loop // Enable infinite loop
                    playsInline // Prevent fullscreen on mobile
                    muted
                />
                <canvas
                    ref={canvasRef}
                    className="w-full border-2 border-green h-[280px] rounded-md bg-black transition-all duration-300"
                />
                {error && (
                    <div className="absolute inset-0 flex items-center justify-center text-red-500">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ASCIIVideoConverter;