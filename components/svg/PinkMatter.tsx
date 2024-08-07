"use client";

import {
  motion,
  AnimationControls,
  VariantLabels,
  TargetAndTransition,
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

export default function PinkMatter({
  width = 37,
  height = 41,
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
        viewBox="0 0 37 41"
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
          d="M11.8778 4.20516C14.148 -0.259907 20.4152 -0.556366 23.0967 3.67447L23.2842 3.97027C24.4117 5.74912 26.407 6.78615 28.5107 6.68664L28.9736 6.66474C33.6903 6.44163 36.5743 11.7695 33.8086 15.5967V15.5967C32.3251 17.6495 32.393 20.4397 33.9745 22.4179L34.8793 23.5497C37.8059 27.2105 35.3487 32.6459 30.6672 32.8674V32.8674C28.7469 32.9582 26.9996 34.0043 26.0126 35.6541L25.2127 36.9913C22.5935 41.3696 16.2788 41.451 13.5476 37.1417L13.3779 36.874C12.1648 34.96 10.0178 33.8441 7.7543 33.9512V33.9512C2.69886 34.1904 -0.563875 28.6759 2.07942 24.3599L2.39864 23.8387C3.68242 21.7426 3.49511 19.0628 1.93222 17.1657V17.1657C-1.08398 13.5043 1.36884 7.97053 6.10724 7.74639L6.66639 7.71994C8.83561 7.61733 10.7829 6.35856 11.7672 4.42275L11.8778 4.20516Z"
          fill="#FF5492"
        />
      </motion.svg>
    </motion.div>
  );
}
