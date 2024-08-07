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

export default function PurpleMatter({
  width = 140,
  height = 140,
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
        viewBox="0 0 140 140"
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
          d="M41.7247 48.3489C40.7831 37.9345 50.8825 30.0055 60.7758 33.3918L61.9367 33.7892C65.84 35.1252 70.1543 34.3939 73.3993 31.8462L76.5648 29.361C83.6609 23.7899 93.9985 29.2832 93.3524 38.2818V38.2818C92.9823 43.4358 96.454 48.0791 101.502 49.1819L102.419 49.3822C111.903 51.454 114.693 63.6307 107.058 69.6252L106.215 70.2866C103.263 72.6046 101.567 76.1721 101.634 79.9253L101.703 83.8374C101.892 94.4345 91.4998 102.002 81.4722 98.5696L80.4094 98.2058C76.1728 96.7557 71.4902 97.5494 67.9681 100.315L65.593 102.179C57.9223 108.202 46.6792 102.782 46.6116 93.0304L46.6053 92.1171C46.5705 87.0973 43.0225 82.7888 38.1025 81.7918V81.7918C29.2346 79.9949 26.5408 68.635 33.6576 63.0476L37.0463 60.3871C40.4042 57.7508 42.1989 53.5934 41.8145 49.3416L41.7247 48.3489Z"
          fill="#E293F6"
        />
        <mask
          id="mask0_730_1256"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="29"
          y="27"
          width="83"
          height="78"
        >
          <path
            d="M41.7247 48.3489C40.7831 37.9345 50.8825 30.0055 60.7758 33.3918L61.9367 33.7892C65.84 35.1252 70.1543 34.3939 73.3993 31.8462L76.5648 29.361C83.6609 23.7899 93.9985 29.2832 93.3524 38.2818V38.2818C92.9823 43.4358 96.454 48.0791 101.502 49.1819L102.419 49.3822C111.903 51.454 114.693 63.6307 107.058 69.6252L106.215 70.2866C103.263 72.6046 101.567 76.1721 101.634 79.9253L101.703 83.8374C101.892 94.4345 91.4998 102.002 81.4722 98.5696L80.4094 98.2058C76.1728 96.7557 71.4902 97.5494 67.9681 100.315L65.593 102.179C57.9223 108.202 46.6792 102.782 46.6116 93.0304L46.6053 92.1171C46.5705 87.0973 43.0225 82.7888 38.1025 81.7918V81.7918C29.2346 79.9949 26.5408 68.635 33.6576 63.0476L37.0463 60.3871C40.4042 57.7508 42.1989 53.5934 41.8145 49.3416L41.7247 48.3489Z"
            fill="#E25C95"
          />
        </mask>
        <g mask="url(#mask0_730_1256)">
          <rect
            x="48"
            y="26.249"
            width="18"
            height="92"
            transform="rotate(-27.276 48 26.249)"
            fill="#FFF5D1"
            fillOpacity="0.19"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
