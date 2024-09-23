import Image from "next/image";
import React from "react";
import { PROJECTS } from "@/app/config";
import ProjectCard from "@/app/components/project-card";
import BackButton from "@/app/components/back-button";
import Divider from "../components/divider";
import Hyperlink from "../components/hyperlink";

const ReactSvgIcon = () => (
  <svg
    width="19"
    height="17"
    viewBox="0 0 19 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8931 14.5419C11.691 15.2067 13.9584 15.2966 14.3292 15.2037C14.6586 15.1212 14.2096 13.4521 13.9196 12.582C13.6923 11.9 13.1215 10.9459 12.7497 10.3466C12.0671 9.24627 11.6208 8.06393 11.1591 6.8534C10.5154 5.16554 9.79594 3.40711 8.71789 1.96064C8.31173 1.41567 8.04084 1.11032 7.39721 1.18478C6.7082 1.26448 6.11062 1.66188 5.49767 1.97382C5.38223 2.03257 4.73072 2.30317 4.70592 2.46673C4.51493 3.72633 4.83456 5.13688 5.24759 6.34261C5.62396 7.44132 6.23658 8.35595 6.73666 9.38091C7.12681 10.1806 7.53939 10.9925 8.08788 11.6885C8.91411 12.737 9.87716 13.6954 10.8931 14.5419Z"
      stroke="#61DAFB"
      stroke-linecap="round"
    />
    <path
      d="M5.08073 8.97407C4.52923 9.70374 4.02567 10.5742 3.75973 11.4614C3.59895 11.9931 3.40695 12.7019 3.46441 13.0003C3.63966 13.9103 4.21832 14.5018 4.94446 14.7195C5.51548 14.8907 6.21576 14.8863 6.82709 14.7511C7.46904 14.6092 7.8598 14.294 8.38507 13.7618C9.74822 12.3807 10.9727 10.4774 12.0044 8.71351C12.7022 7.5205 14.5782 5.82697 14.9824 4.4786C15.2656 3.53355 13.9509 2.02507 13.0163 1.74491C12.5105 1.5933 12.1255 1.82177 11.6291 2.16475C10.5614 2.90228 9.54006 3.77197 8.63419 4.83455C7.45337 6.21964 6.19538 7.49929 5.08073 8.97407Z"
      stroke="#61DAFB"
      stroke-linecap="round"
    />
    <path
      d="M1.8367 9.521C3.88602 10.6331 6.50813 11.1836 9.08795 11.1836C10.1096 11.1836 11.1126 11.1429 12.1282 11.0971C12.7728 11.068 13.4365 10.8518 14.0763 10.7511C14.8431 10.6305 15.565 10.3974 16.3097 10.1937C16.7277 10.0794 17.3902 9.87019 17.5789 9.4345C17.8546 8.79792 17.4306 8.48534 17.1165 7.98333C16.7854 7.45422 16.0848 7.11858 15.5423 6.82048C14.334 6.15662 12.9981 5.72452 11.6411 5.47983C10.6035 5.29271 9.45541 5.34811 8.39923 5.30684C6.99884 5.25213 5.81686 5.57727 4.48336 5.90749C3.77667 6.08249 2.84823 6.28992 2.24009 6.68593C2.01057 6.83539 1.80331 7.0158 1.57105 7.16165C1.31922 7.31977 1.30648 7.59535 1.1283 7.81035C0.718481 8.30483 1.38188 9.27419 1.8367 9.521ZM1.8367 9.521C2.12306 9.67639 2.38337 9.88297 2.68284 10.0159C2.86954 10.0988 3.05603 10.3187 3.2535 10.3187"
      stroke="#61DAFB"
      stroke-linecap="round"
    />
    <path
      d="M8.85098 8.12901C8.85098 8.31158 8.8699 8.67149 9.10579 8.71147C9.12897 8.75861 9.31952 8.71147 9.3693 8.71147C9.5051 8.71147 9.62988 8.65688 9.72429 8.56087C9.88803 8.39436 9.82313 8.06041 9.72429 7.87765C9.66019 7.75913 9.47332 7.75473 9.36059 7.75473C9.23621 7.75473 9.02141 7.7338 8.90978 7.80678C8.81335 7.86982 8.85098 8.03077 8.85098 8.12901Z"
      fill="#61DAFB"
      stroke="#61DAFB"
      stroke-linecap="round"
    />
  </svg>
);

export default function Page() {
  return (
    <section>
      <BackButton />
      <h1 className="title font-semibold text-4xl tracking-tighter">
        my foot print on the internet
      </h1>
      <div className="flex flex-col gap-4">
        <p>
          I&apos;m{" "}
          <Hyperlink href="/about">
            <strong>Kota (Cody) Enokida</strong>
          </Hyperlink>
          , a <strong>web engineer</strong> working on building fun things on
          the internet. I have a bachelor&apos;s degree in{" "}
          <strong>Computer Science</strong> from the{" "}
          <strong>University of California</strong>{" "}
          <span className="text-bold inline-flex items-center">
            <strong>, Irvine</strong>
            <Image
              src="/petr.png"
              alt="UCI petr sticker"
              width={24}
              height={24}
            />
          </span>
          . I have a strong background in building frontend interfaces with{" "}
          <strong>React</strong> and <strong>TypeScript</strong>.
        </p>
        <p>
          Most recently, I was developing web-based software at{" "}
          <Hyperlink href="https://c3.ai/">C3.ai</Hyperlink>, improving the
          design system, data visualization, and components library. We built
          the{" "}
          <Hyperlink href="https://c3.ai/c3-ai-platform/application-development/ui-development/">
            ui framework
          </Hyperlink>
          .
        </p>
        <p>
          I also have experience working at{" "}
          <Hyperlink href="https://www.beyond.ai/">Beyond Limits AI</Hyperlink>,{" "}
          <Hyperlink href="https://studentcenter.uci.edu/">
            UC Irvine SCES
          </Hyperlink>
          , and{" "}
          <Hyperlink href="https://www.augmintedlabs.io/">
            Augminted Labs
          </Hyperlink>{" "}
          as a <strong>Frontend Engineer</strong>/
          <strong>Full Stack Engineer</strong>.
        </p>
        <p>
          I&apos;m actively looking for opportunities! If you&apos;ve fancied
          anything I&apos;ve made, feel free to reach out on{" "}
          <Hyperlink href="https://twitter.com/hammockman3000">
            Twitter
          </Hyperlink>
          ,{" "}
          <Hyperlink href="https://www.linkedin.com/in/codyenokida/">
            LinkedIn
          </Hyperlink>
          , <Hyperlink href="https://github.com/codyenokida">Github</Hyperlink>,
          or <Hyperlink href="mailto:codyenokida@gmail.com">Email</Hyperlink>.
        </p>
        <Divider />
        <div className="flex flex-col gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
