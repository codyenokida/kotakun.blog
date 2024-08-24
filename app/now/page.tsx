import BackButton from "@/app/components/back-button";
import HyperLink from "@/app/components/hyperlink";
import { CURRENT_LOCATION, LAT, LON } from "@/app/config";
import dynamic from "next/dynamic";

export default function Page() {
  const NowMap = dynamic(() => import("@/app/components/now-map"), {
    loading: () => (
      <div className="w-full h-[400px] bg-sky-200 rounded-md border-green-faded border-2"></div>
    ),
    ssr: false,
  });

  return (
    <section className="summary">
      <BackButton />
      <h1 className="title font-semibold text-2xl tracking-tighter mb-8">
        what i&apos;m up to now
      </h1>
      <div className="mt-8">
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
        <NowMap lat={LAT} lon={LON} />
        <h2 className="mt-8">2024, july</h2>
        <p>
          <b>Location:</b> {CURRENT_LOCATION}
        </p>
        <p>
          <b>Currently:</b> I&apos;m in Taiwan!!! I&apos;m so excited to be here
          and see what this place has to offer. I&apos;ve spent the past two
          weeks with Ashley and her relatives. We spent the first half with her
          father&apos;s family in Songshan District. We spent the following week
          going on a 12 person roadtrip (cousins, aunts, uncles included) family
          in Songshan District. We spent the following week going on a 12 person
          roadtrip (cousins, aunts, uncles included) down to Kenting National
          Park. Fun family time and was a fun time to meet all the folks. Taiwan
          is hot and humid, but has some amazing food and great culture. Career
          wise, I&apos;ve been interviewing. I made it pretty far into
          interviews at one place but rejected for not having the right amount
          of experience. It&apos;s tough to be a junior in this market. Tough
          luck, but I&apos;m confident in my skills so I&apos;ll keep on
          grinding! 2 more weeks in Taiwan and then I&apos;m off to Japan!
        </p>
        <p>
          <b>Day Job:</b> Not Applicable
        </p>
        <p>
          <b>Interests:</b> Reading Twitter, Cryptocurrencies, Coding, Indie
          Internet Content
        </p>
        <p>
          <b>Last updated:</b> 7/30/2024
        </p>
      </div>
    </section>
  );
}
