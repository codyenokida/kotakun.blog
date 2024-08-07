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

export default function YellowStar({
  width = 43,
  height = 43,
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
        viewBox="0 0 43 43"
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
          d="M1.17977 11.4735C-1.23189 5.04244 5.0483 -1.23775 11.4794 1.17391L17.191 3.31577C19.0021 3.99493 20.9979 3.99493 22.809 3.31577L28.5206 1.17391C34.9517 -1.23775 41.2319 5.04244 38.8202 11.4735L36.6784 17.1852C35.9992 18.9962 35.9992 20.992 36.6784 22.8031L38.8202 28.5147C41.2319 34.9458 34.9517 41.226 28.5206 38.8144L22.809 36.6725C20.9979 35.9934 19.0021 35.9934 17.191 36.6725L11.4794 38.8144C5.0483 41.226 -1.23189 34.9458 1.17977 28.5147L3.32163 22.8031C4.00078 20.992 4.00079 18.9962 3.32163 17.1852L1.17977 11.4735Z"
          fill="#FFCD6C"
        />
      </motion.svg>
    </motion.div>
  );
}
