"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image src={project.logo} alt={project.name} width={24} height={24} />
        <h2 className="text-xxl font-semibold mb-0 capitalize">
          {project.name}
        </h2>
      </div>
      <p className="text-gray-60">{project.description}</p>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <li
            key={index}
            className="bg-green-faded text-black px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div
        className="relative md:h-96 h-64 w-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="rounded-md object-cover"
        />
        <div
          className={`absolute bottom-0 left-0 w-full p-4 transition-all duration-300 ease-in-out ${
            isMobile || isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ease-in-out ${
                  isMobile ? "" : "md:opacity-0 md:translate-y-5"
                }`}
                style={{
                  transitionDelay: isHovered ? "0ms" : "300ms",
                  opacity: isMobile || isHovered ? 1 : 0,
                  transform:
                    isMobile || isHovered
                      ? "translateY(0)"
                      : "translateY(20px)",
                }}
              >
                <button className="bg-black text-white px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105">
                  GitHub
                </button>
              </Link>
            )}
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 ease-in-out ${
                isMobile ? "" : "md:opacity-0 md:translate-y-5"
              }`}
              style={{
                transitionDelay: isHovered ? "150ms" : "150ms",
                opacity: isMobile || isHovered ? 1 : 0,
                transform:
                  isMobile || isHovered ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <button className="bg-white text-black p-2 rounded-md transition-all duration-300 hover:bg-green-faded hover:rotate-[-6deg] relative">
                <div className="absolute inset-0 border border-black rounded-md pointer-events-none"></div>
                Launch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
