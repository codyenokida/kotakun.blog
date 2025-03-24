import Image from "next/image";
import React from "react";
import { PROJECTS } from "@/app/config";
import ProjectCard from "@/app/components/project-card";
import BackButton from "@/app/components/back-button";
import Divider from "../components/divider";
import Link from "next/link";
import HyperLink from "../components/hyperlink";

const BackArrowSVG = ({ className }: { className: string }) => {
  return (
    <svg
      width="28"
      height="13"
      viewBox="0 0 28 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.3302 5.74103C23.91 5.70128 20.6266 4.26107 17.8545 4.35833M17.8545 4.35833C16.4641 4.40712 15.2023 4.84266 14.2426 6.03566C12.8939 7.7122 12.5958 11.5745 15.6342 11.391C17.4689 11.2801 17.9322 6.97635 17.8545 4.35833ZM17.8545 4.35833C17.831 3.567 17.7581 2.92968 17.6586 2.60873C16.9964 0.470831 13.4195 0.944345 11.8225 1.3724C8.89443 2.15721 6.05652 4.16753 3.60484 5.90426L3.57957 5.92216M7.07333 6.95271C5.74677 7.08984 4.52686 7.7091 3.16311 7.72037C2.77168 7.7236 1.9411 7.95164 1.97726 7.41797C2.04123 6.47397 2.22118 5.51879 2.39618 4.58987L2.39986 4.57032C2.45076 4.30014 2.56967 3.48737 2.56515 3.76226"
        stroke="#4F8F4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const SignatureSVG = () => {
  return (
    <svg
      width="216"
      height="41"
      viewBox="0 0 216 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="signature">
        <path
          id="english sig"
          d="M33.0526 9.41224C26.0913 11.2549 19.5739 14.8277 13.9687 19.3118C9.30789 23.0405 3.26464 28.814 1.1794 34.7048C-0.744135 40.1388 13.3997 38.9589 14.9988 38.8821C30.149 38.1549 43.2681 31.119 56.6858 24.748C57.1928 24.5073 65.9205 20.866 60.1191 22.4591C52.3142 24.6024 44.6904 27.3578 36.8866 29.4975C32.1058 30.8084 42.9788 25.4665 43.0953 25.4061C47.8794 22.9227 52.5757 20.5956 57.9447 19.7696C59.1515 19.584 56.5868 20.305 57.3724 19.3118C61.6828 13.8629 68.3779 9.55612 73.8527 5.37802C74.4067 4.95522 77.7346 2.49286 78.6022 1.77296C78.8877 1.53607 79.7738 0.981928 79.4033 1.00045C77.4007 1.10058 76.0272 3.17119 74.4249 4.37661C68.3723 8.93011 62.555 13.7854 56.8288 18.7396C53.8355 21.3293 49.5376 24.3352 47.1295 27.6092C44.302 31.4533 65.05 29.1312 66.2992 29.0111C67.5804 28.8881 85.562 25.6285 80.6908 31.2428C80.1422 31.8751 72.4848 39.0353 72.5365 39.0538C76.294 40.392 87.1034 36.2844 89.5604 35.5346C102.246 31.6633 113.978 26.107 126.269 21.2574"
          stroke="#363D4A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g id="sig">
          <g id="enoki">
            <path
              id="Vector 235"
              d="M139.705 11.2383H148.887"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 236"
              d="M145.316 6.13721V32.6618"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 237"
              d="M144.807 13.2783C144.647 15.6384 143.948 17.929 143.209 20.1653C142.786 21.4464 142.402 22.8022 141.746 23.9902"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 238"
              d="M145.826 13.7886C146.053 16.1803 147.01 18.5494 147.631 20.8636C147.844 21.6564 148.044 22.4521 148.24 23.2488C148.278 23.4006 148.261 23.425 148.377 23.4803"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 270"
              d="M152.76 30.7881C155.023 31.071 157.193 32.0074 159.358 32.68C160.091 32.9078 160.942 33.2077 161.694 33.1004"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 269"
              d="M154.371 28.0136C154.741 28.0136 158.017 27.9396 158 28.1366C157.904 29.2372 156.316 30.617 155.675 31.2816C154.534 32.464 153.433 33.3563 152 34"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 239"
              d="M151.947 6.64746H158.578"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 240"
              d="M155.519 6.64746C155.405 7.00381 155.066 7.2927 154.892 7.62642C154.581 8.22135 154.402 8.90059 154.233 9.54312C154.127 9.94546 153.988 10.3087 153.988 10.7282"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 241"
              d="M151.438 11.748C151.438 15.6732 151.432 19.5605 151.825 23.4667C151.895 24.1609 151.948 24.8247 151.948 25.5205"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 267"
              d="M152 12.0048C153.064 12.0048 154.127 12.0048 155.191 12.0048C155.504 12.0048 155.827 11.9919 156.141 12.0084C156.393 12.0217 156.296 12.3794 156.3 12.5091C156.35 14.3765 156.751 16.2848 157.109 18.1285C157.316 19.1984 157.701 20.1847 158.081 21.2155C158.426 22.1522 158.453 23.1081 159 24"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 243"
              d="M151.947 16.3389H156.028"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 244"
              d="M151.438 19.9097H156.028"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 245"
              d="M153 25H159.121"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 268"
              d="M154 26C153.812 26.5878 153.059 27.1927 152.653 27.6087C152.145 28.1289 151.567 28.5563 151 29"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g id="da">
            <path
              id="Vector 249"
              d="M163.085 14C162.954 14.0434 163.014 14.6322 163.014 14.6668C163.019 16.4201 163.092 18.1693 163.187 19.9177C163.311 22.1921 163.51 24.4695 163.51 26.7522"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 250"
              d="M164.191 13.8102C166.118 13.8102 168.045 13.8102 169.972 13.8102C170.531 13.8102 171.121 13.7615 171.679 13.8102C172.087 13.8458 171.912 15.7461 171.914 15.8641C171.964 18.1391 171.76 20.6096 172.195 22.8592C172.277 23.2807 172.206 25.7092 172.5 26"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 252"
              d="M167 15L168.27 26"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 251"
              d="M164.191 19.9097H170.823"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 253"
              d="M164 27L172.5 26.5"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g id="ko">
            <path
              id="Vector 254"
              d="M183.571 11C183.461 14.4448 183.161 17.8715 183.161 21.3212C183.161 22.6817 182.756 24.5263 183.571 25.7926"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 255"
              d="M180 21.7119C180 23.748 180 25.7841 180 27.8201C180 27.9249 180.594 27.3577 180.726 27.2739C181.926 26.5101 183.257 25.9258 184.552 25.3206C185.296 24.9729 186.775 24.0956 187.651 24.0956"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 256"
              d="M187.65 19.1616V25.7928"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 257"
              d="M190.025 16.5605C189.982 14.7634 190.307 21.4246 190.35 23.2217"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 258"
              d="M190.018 15.752C190.968 15.752 193.579 15.3313 194.53 15.3313C195.318 15.3313 196.671 14.9083 196.735 16.0154C196.885 18.6408 196.602 26.5344 196.602 23.9044"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 259"
              d="M191.018 19.7666H195.608"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 260"
              d="M191.018 24.252L196.78 23.9233"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 261"
              d="M193.719 16.272V33.1049"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g id="ta">
            <path
              id="Vector 262"
              d="M201 17.8695C205.092 17.715 209.133 17.3594 213.242 17.3594"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 263"
              d="M206.569 12C206.569 15.3173 206.743 18.643 206.515 21.9589C206.341 24.4693 205.759 27.0747 201.633 29"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 264"
              d="M207.119 19.3994C207.632 21.3775 209.43 23.3704 210.701 24.9519C211.914 26.4632 213.226 27.8754 214.77 29.0911"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              id="Vector 265"
              d="M209.16 28.5811L210.633 30"
              stroke="#363D4A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const C3AI_PROJECT = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8">
        <h3 className="text-3xl font-bold max-w-[280px]">building enterprise ai solutions with <strong><i>C3.AI</i></strong>.</h3>
      </div>
      <div className="flex flex-row items-center justify-between gap-8">
        <p><strong>C3.ai</strong> is the enterprise AI platform. As a Software Engineer on the Platform UI team, I contributed to building the design system and data visualization components on the platform.</p>
      </div>
      <div className="gap-6 md:col-span-full">
        <div className="bg-neutral-100 rounded-md h-full relative border-2 border-green-faded">
          <div className="w-full h-[280px] md:h-[600px]">
            <Image
              src="/projects/c3ai-project.png"
              alt="C3.ai"
              width={1200}
              height={1200}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <Link href="https://www.c3.ai" className="group">
            <div className="absolute top-2 right-2 p-2 bg-white rounded-lg flex">
              <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[104px] flex items-center justify-center">
                <span className="whitespace-nowrap font-bold">Visit website</span>
              </div>
              <BackArrowSVG className="group-hover:wiggle rotate-180 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </Link>
          <div className="flex flex-row gap-2 justify-between absolute bottom-0 left-0 right-0 p-4">
            <span className="text-sm font-bold bg-white rounded-md px-2 py-1 border-2 border-green-faded">C3.ai</span>
            <span className="text-sm bg-white rounded-md px-2 py-1 border-2 border-green-faded">Aug 2022 - Nov 2023</span>
          </div>
        </div>
      </div>
    </>
  )
}

const CODYS_CHIPS_PROJECT = () => {
  return (
    <>
      {/* Title */}
      <div className="flex flex-row items-center justify-center gap-8">
        <h3 className="text-3xl font-bold max-w-[280px]"><strong><i>Cody&apos;s Chip Catalogue</i></strong>: the internet&apos;s largest database of potato chips.</h3>
      </div>
      {/* Description */}
      <div className="flex flex-row items-center justify-between gap-8">
        <p>
          <strong>Cody&apos;s Chip Catalogue</strong> is the internet&apos;s largest database of potato chips. A fun project I&apos;ve been passionately maintaining and growing over the past few months. From designing the system and building the infrastructure to running AI-powered scripts and fostering a vibrant community, this project has allowed me to tackle exciting challenges and learn a great deal along the way.
        </p>
      </div>
      {/* Image 1 */}
      <div className="bg-neutral-100 rounded-lg h-full relative border-2 border-green-faded md:row-span-2">
        <div className="h-full w-full">
          <Image
            src="/projects/codys-chips/codys-chips-1.png"
            alt="Cody&apos;s Chip Catalogue"
            width={500}
            height={800}
            className="rounded-md h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-row gap-2 justify-between absolute bottom-0 left-0 right-0 p-4">
          <span className="text-sm font-bold bg-white rounded-md px-2 py-1 border-2 border-green-faded">Cody&apos;s Chip Catalogue</span>
          <span className="text-sm bg-white rounded-md px-2 py-1 border-2 border-green-faded">Oct 2024 - Present</span>
        </div>
        <Link href="https://www.codyschips.xyz/" className="group">
          <div className="absolute top-2 right-2 p-2 bg-white rounded-lg flex">
            <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[104px] flex items-center justify-center">
              <span className="whitespace-nowrap font-bold">Visit website</span>
            </div>
            <BackArrowSVG className="group-hover:wiggle rotate-180 w-6 h-6 md:w-8 md:h-8" />
          </div>
        </Link>
      </div>
      {/* Image 2 */}
      <div className="bg-neutral-100 rounded-lg h-[200px]">
        <Image
          src="/projects/codys-chips/codys-chips-2.png"
          alt="Cody&apos;s Chip Catalogue"
          width={500}
          height={800}
          className="rounded-md h-full object-cover" />
      </div>
      {/* Image 3 */}
      <div className="bg-neutral-100 rounded-lg h-[200px]">
        <Image
          src="/projects/codys-chips/codys-chips-3.png"
          alt="Cody&apos;s Chip Catalogue"
          width={500}
          height={800}
          className="rounded-md h-full object-cover" />
      </div>
    </>
  )
}

const AIRSWAP_PROJECT = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-8">
        <h3 className="text-3xl font-bold max-w-[280px]"><strong><i>AIRSWAP</i></strong> using blockchain to build a decentralized exchange.</h3>
      </div>
      <div className="flex flex-row items-center justify-between gap-8">
        <p><strong>AirSwap</strong> is the original Request-For-Quote (RFQ) Decentralized Exchange (dex) built on the Ethereum blockchain. I had the chance to be contributor #2 on the new web app for the AirSwap protocol. I helped design the new UI, build user flows, and implement features and animations.</p>
      </div>
      {/* Image 1 */}
      <div className="gap-6">
        <div className="bg-neutral-100 rounded-md h-full relative border-2 border-green-faded">
          <div className="w-full h-[280px] md:h-[400px]">
            <Image
              src="/projects/airswap-1.png"
              alt="AirSwap"
              width={1200}
              height={1200}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <Link href="https://www.airswap.xyz/" className="group">
            <div className="absolute top-2 right-2 p-2 bg-white rounded-lg flex">
              <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[104px] flex items-center justify-center">
                <span className="whitespace-nowrap font-bold">Visit website</span>
              </div>
              <BackArrowSVG className="group-hover:wiggle rotate-180 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </Link>
          <div className="flex flex-row gap-2 justify-between absolute bottom-0 left-0 right-0 p-4">
            <span className="text-sm font-bold bg-white rounded-md px-2 py-1 border-2 border-green-faded">AirSwap Landing Page</span>
            <span className="text-sm bg-white rounded-md px-2 py-1 border-2 border-green-faded">Jun 2021 - Jan 2022</span>
          </div>
        </div>
      </div>
      {/* Image 2 */}
      <div className="gap-6">
        <div className="bg-neutral-100 rounded-md h-full relative border-2 border-green-faded">
          <div className="w-full h-[280px] md:h-[400px]">
            <Image
              src="/projects/airswap-2.png"
              alt="AirSwap"
              width={1200}
              height={1200}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
          <Link href="https://swap.eth.limo/#/" className="group">
            <div className="absolute top-2 right-2 p-2 bg-white rounded-lg flex">
              <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[104px] flex items-center justify-center">
                <span className="whitespace-nowrap font-bold">Visit website</span>
              </div>
              <BackArrowSVG className="group-hover:wiggle rotate-180 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </Link>
          <div className="flex flex-row gap-2 justify-between absolute bottom-0 left-0 right-0 p-4">
            <span className="text-sm font-bold bg-white rounded-md px-2 py-1 border-2 border-green-faded">AirSwap DEX</span>
            <span className="text-sm bg-white rounded-md px-2 py-1 border-2 border-green-faded">Jun 2021 - Jan 2022</span>
          </div>
        </div>
      </div>
    </>
  )
}


export default function Page() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 mt-6 max-w-xl">
        <p>Hi! I&apos;m <strong>Kota</strong>, a frontend engineer based in New York City.</p>
        <p>I currently work at <HyperLink href="https://nominal.io">Nominal</HyperLink> as a frontend software engineer.</p>
        <p>Here, I share my craft, unfinished or imperfect projects, and the many other things I&apos;m exploring.</p>
        <p>Throughout the past few years, I&apos;ve worked with big corporations and startups, building well designed, fast, and delightful user experiences.</p>
        <p>I&apos;ve been exploring new ways to build software on the web. I&apos;m always learning and trying new things.</p>
        <p>When I&apos;m not building, I like blogging about my life, looking out to the ocean, and running in the streets of California.</p>
        <p>I&apos;m interested with helping people, the environment, and the well being of the world. If you&apos;re interested in working with me, please reach out!</p>
        <SignatureSVG />
        <p><HyperLink href="https://www.linkedin.com/in/codyenokida/">LinkedIn</HyperLink> / <HyperLink href="https://github.com/codyenokida">GitHub</HyperLink> / <HyperLink href="/">Blog</HyperLink></p>
        <Divider />
        <h2 className="mx-auto mb-2 text-center">~ notable contributions on the <i>INTERNET</i> ~</h2>
        <Divider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-3xl lg:max-w-4xl">
        <C3AI_PROJECT />
        <div className="col-span-1 md:col-span-2">
          <Divider />
        </div>
        <CODYS_CHIPS_PROJECT />
        <div className="col-span-1 md:col-span-2">
          <Divider />
        </div>
        <AIRSWAP_PROJECT />
      </div>
    </section>
  );
}
