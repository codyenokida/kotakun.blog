"use client";

import {
  AnimationControls,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";

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

export default function SoccerBall({
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
          d="M23.335 55.8754C36.1337 61.397 50.9175 55.6959 56.3449 43.1154C61.7724 30.535 55.7756 15.8687 42.9768 10.347C30.1781 4.82541 15.3943 10.5266 9.96688 23.107C4.53943 35.6874 10.5362 50.3538 23.335 55.8754Z"
          fill="#393633"
          stroke="#F1F1F1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.922 9.93718C27.992 8.25865 32.4892 7.65579 36.9539 8.31427L33.1973 11.5454L37.1101 21.2673L47.5114 20.4094L49.1394 13.774C53.4413 17.3701 56.3379 22.3111 57.4803 27.703L49.9927 25.437L44.2844 33.6608L50.2019 41.6019L57.2527 39.1055C56.9246 40.3984 56.4898 41.6828 55.9442 42.9476C53.6111 48.3556 49.6253 52.5347 44.8477 55.1372L45.6801 51.1709L36.4482 46.6077L28.6888 53.5724L30.9569 58.1059C28.3545 57.8944 25.7446 57.2621 23.2183 56.1721C19.5901 54.6069 16.5303 52.2687 14.1445 49.4284L16.9365 49.1981L19.4519 38.9461L10.6054 33.4678L8.38455 35.378C8.05672 31.3823 8.67903 27.2412 10.383 23.2916C10.7818 22.3671 11.2289 21.4786 11.72 20.6277L12.1821 21.7758L22.5833 20.9179L25.0988 10.6659L23.922 9.93718ZM34.8579 24.4242L39.6819 32.6959L33.3361 39.9745L24.5902 36.2013L25.5307 26.5907L34.8579 24.4242Z"
          fill="#F1F1F1"
        />
      </motion.svg>
    </motion.div>
  );
}
