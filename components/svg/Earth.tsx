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

export default function Earth({
  width = 72,
  height = 72,
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
        viewBox="0 0 77 77"
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
        <circle cx="38.5" cy="38.5" r="38.5" fill="#59AA58" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7451 10.8139C5.42311 16.9241 1.18804 25.1799 0.213123 34.4081C1.47161 32.7298 3.21116 31.4116 5.27093 30.67L7.50843 29.8644C12.4512 28.0848 17.8451 30.988 19.0818 36.0938L21.1633 44.5794C22.39 49.5806 19.9 54.7497 15.2246 56.9078L14.6189 57.1874C13.4557 57.7243 12.4381 58.5323 11.6516 59.5436C10.6526 60.828 9.43384 61.6868 8.13304 62.1714C15.1789 71.1969 26.1609 77 38.4982 77C45.3314 77 51.7488 75.2198 57.312 72.0979C55.6104 71.4504 53.8028 71.1173 51.9774 71.1173H41.4993C36.2976 71.1173 32.0808 66.9005 32.0808 61.6988C32.0808 58.6854 33.5227 55.854 35.9598 54.0816L47.2701 45.8564C52.0779 42.3599 58.497 42.0327 63.6355 45.0222L74.7519 51.4896C76.206 47.4315 76.9982 43.0583 76.9982 38.5C76.9982 33.7314 76.1313 29.1654 74.5464 24.9508C72.8956 26.708 70.5507 27.8055 67.9495 27.8055H65.3346C63.3131 27.8055 61.3325 28.3759 59.6206 29.451L59.3587 29.6155C51.733 34.4046 41.9867 28.1051 43.2218 19.1854C43.5888 16.5346 44.9449 14.1207 47.0178 12.4283L51.6287 8.66393C53.6491 7.01441 55.9803 5.97437 58.3913 5.53097C52.5856 2.02037 45.7778 0 38.4982 0C30.9413 0 23.8929 2.17722 17.9461 5.9386C19.5258 7.91462 20.3092 10.4216 20.1231 12.9615L19.7714 17.763C19.7038 18.6856 19.1136 19.4879 18.253 19.8273C17.0158 20.3151 15.6174 19.7076 15.1295 18.4704L12.8865 12.7819C12.6184 12.1019 12.2535 11.4641 11.8033 10.8883L11.7451 10.8139ZM25.1775 28.2102C24.6803 25.4761 25.3352 22.6581 26.9869 20.4233L29.8486 16.5518C30.3985 15.8078 31.3259 15.4447 32.2347 15.6174C33.5412 15.8657 34.3991 17.1261 34.1508 18.4327L33.0093 24.4399C32.8728 25.158 32.8407 25.892 32.9138 26.6193L33.6368 33.8053C33.9275 36.6952 30.9026 38.7598 28.3173 37.4359C27.3011 36.9156 26.5853 35.9515 26.381 34.8283L25.1775 28.2102Z"
          fill="#64C6FF"
        />
      </motion.svg>
    </motion.div>
  );
}
