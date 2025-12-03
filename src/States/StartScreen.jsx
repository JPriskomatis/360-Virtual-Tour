"use client";

import React, { useState } from "react";
import SpotlightBox from "../Components/SpotlightBox";

export default function StartScreen({ onClose }) {
  return (
    <div className="z-10 w-full h-full flex items-center justify-center">
      <SpotlightBox hideStartScreen={onClose} />
      <div className="absolute z-9 w-full h-full backdrop-blur-sm"></div>
    </div>
  );
}