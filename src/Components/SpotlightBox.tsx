"use client";

import React, { MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CoolButton } from "./CoolButton";

// Demo Component
const StartScreenPanel = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  return (
    <div
      className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      <div>
        <h3 className="text-2xl font-semibold leading-7 text-sky-500">
          360 Virtual Tour
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Welcome to our immersive 360° virtual tour, where you can explore every corner of the site from the comfort of your screen. Use your mouse or touch to navigate and discover the space as if you were really there.
        </p>
        <div className="flex flex-row justify-evenly pt-4">
          <CoolButton btnTitle={"Start"}></CoolButton>
          <CoolButton btnTitle={"Options"}></CoolButton>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function SpotlightBox() {
  return (
    <div className="absolute z-1 w-full h-full p-8 flex flex-col items-center justify-center">
      <StartScreenPanel />
    </div>
  );
}