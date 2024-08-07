"use client";

import { AnimationControls, TargetAndTransition, VariantLabels, motion } from "framer-motion";

type FramerAnimateProps =
  | boolean
  | VariantLabels
  | AnimationControls
  | TargetAndTransition
  | undefined;

type FramerInitialProps = boolean | VariantLabels | undefined;

type SVGProps = {
  width?: number;
  height?: number;
  initialPosition: any;
  initialAnimate: FramerAnimateProps;
  animate?: FramerAnimateProps;
};

export default function Asteroid({
  width = 64,
  height = 64,
  initialPosition,
  initialAnimate,
  animate,
}: SVGProps) {
  return (
    <motion.div
      initial={initialPosition}
      animate={initialAnimate}
      style={{ position: "absolute" }}
    >
      <motion.svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        animate={animate}
        drag
        dragSnapToOrigin
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileDrag={{ scale: 1.2 }}
      >
        <path
          d="M52.7171 17.7726C55.1243 21.9419 52.8417 28.0733 51.7228 32.7618C50.2066 39.1147 49.4713 45.5937 42.7263 49.488C36.3938 53.1441 29.9997 50.2151 23.9839 48.7768C18.863 47.5525 12.8712 46.7975 10.2645 42.2826C8.67462 39.5288 14.1623 28.7194 14.1533 25.6222C14.1302 17.6763 13.0252 16.9838 21.2263 12.2489C25.0925 10.0167 29.2172 8.78972 33.2126 8.49987C37.4761 8.19059 39.4736 11.406 42.9718 13.1482C46.1357 14.724 50.9128 14.6474 52.7171 17.7726Z"
          fill="#ACACAC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.9238 8.7286C37.3584 9.20049 38.5506 10.0872 39.7878 11.0074C40.7562 11.7277 41.7522 12.4685 42.9136 13.0469C43.9979 13.587 45.2717 13.9329 46.5504 14.2802C47.7455 14.6048 48.9449 14.9305 49.9978 15.417C49.9769 18.3677 48.4367 21.2301 45.6965 22.8121C41.5832 25.1869 36.3235 23.7776 33.9487 19.6643C31.816 15.9704 32.7352 11.352 35.9238 8.7286Z"
          fill="#D9D9D9"
        />
        <path
          d="M27.6646 32.861C29.2083 35.5346 26.6173 38.9274 23.3266 40.8273C20.0359 42.7271 17.2918 42.4146 15.7481 39.741C14.2045 37.0673 15.6207 33.3598 18.9114 31.4599C22.202 29.56 26.121 30.1873 27.6646 32.861Z"
          fill="#D9D9D9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.005 31.634C51.9058 32.0177 51.811 32.3941 51.7232 32.7617C51.5574 33.4564 51.401 34.1527 51.2449 34.847C50.6304 37.5817 50.0229 40.2848 48.8796 42.7395C46.4263 43.5652 44.4091 42.9419 43.168 40.7923C41.6244 38.1186 43.0406 34.411 46.3313 32.5112C48.2036 31.4302 50.2792 31.1674 52.005 31.634Z"
          fill="#D9D9D9"
        />
      </motion.svg>
    </motion.div>
  );
}
