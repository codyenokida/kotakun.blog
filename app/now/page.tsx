import dynamic from "next/dynamic";

import BackButton from "@/app/components/back-button";
import HyperLink from "@/app/components/hyperlink";
import { LAT, LON, NOW_DATA } from "@/app/now/now";
import Divider from "../components/divider";

export const metadata = {
  title: "what i'm up to now",
  description:
    "This is a now page inspired by nownownow.com, that shows what i'm up to now.",
};

export default function Page() {
  const NowMap = dynamic(() => import("@/app/components/now-map"), {
    loading: () => (
      <div className="w-full h-[400px] bg-sky-200 rounded-md border-green-faded border-2"></div>
    ),
    ssr: false,
  });

  const nowData = NOW_DATA[0];

  return (
    <section>
      <BackButton />
      <h1 className="title font-semibold text-4xl tracking-tighter">
        what i&apos;m up to now
      </h1>
      <p>
        <i>
          * this page is all about what i&apos;m doing now. it&apos;s inspired
          by{" "}
          <HyperLink href="https://nownownow.com/about">
            nownownow.com
          </HyperLink>
          .
        </i>
      </p>
      <div className="prose mt-8">
        <NowMap lat={LAT} lon={LON} />
        <h2 className="mt-8">{nowData.date}</h2>
        <p>
          <b>Location:</b> {nowData.location}
        </p>
        <p>
          <b>Currently:</b> {nowData.currently}
        </p>
        <p>
          <b>Day Job:</b> {nowData.dayJob}
        </p>
        <p>
          <b>Interests:</b> {nowData.interests.join(", ")}
        </p>
        <p>
          <b>Last updated:</b> {nowData.lastUpdated}
        </p>
      </div>
      <Divider />
      <div className="prose mt-8">
        <h1 className="mt-8">Archives</h1>
        {NOW_DATA.slice(1).map((data, index) => (
          <div key={index} className="mb-8">
            <h3>{data.date}</h3>
            <p>
              <b>Location:</b> {data.location}
            </p>
            <p>
              <b>Currently:</b> {data.currently}
            </p>
            <p>
              <b>Day Job:</b> {data.dayJob}
            </p>
            <p>
              <b>Interests:</b> {data.interests.join(", ")}
            </p>
            <p>
              <b>Last updated:</b> {data.lastUpdated}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
