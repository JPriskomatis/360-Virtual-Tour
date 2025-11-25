"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CoolButton } from "./CoolButton";

export default function SpotlightBox({ hideStartScreen }: { hideStartScreen: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  return (
    <div className="z-10">
      <div
        className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-12 shadow-2xl"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />

        <h3 className="text-2xl font-semibold leading-7 text-sky-500">
          360 Virtual Tour
        </h3>

        <p className="mt-6 text-base text-left leading-7 text-gray-300">
          Welcome to our 360° virtual tour, designed to provide a fully immersive and interactive experience of the space. Explore every detail at your own pace and gain a comprehensive understanding of the environment. Click Start to begin your guided journey.
        </p>

        <div className="flex flex-row justify-evenly pt-8">
          <CoolButton btnTitle="Start" ClickedBtn={hideStartScreen} />
        </div>
      </div>
    </div>
  );
}
