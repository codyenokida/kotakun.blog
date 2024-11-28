import Image from "next/image";
import React from "react";
import { PROJECTS } from "@/app/config";
import ProjectCard from "@/app/components/project-card";
import BackButton from "@/app/components/back-button";
import Divider from "../components/divider";
import Hyperlink from "../components/hyperlink";

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
