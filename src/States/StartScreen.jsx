"use client";

import React, { useState } from "react";
import SpotlightBox from "../Components/SpotlightBox";

export default function StartScreen({ className }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  // This function will be called by SpotlightBox when the button is clicked
  function handleHideStartScreen() {
    setVisible(false);
  }

  return (
    <div className="z-10 w-full h-full flex items-center justify-center">
      <SpotlightBox hideStartScreen={handleHideStartScreen} />
      <div className="absolute z-9 w-full h-full backdrop-blur-sm"></div>
    </div>
  );
}
