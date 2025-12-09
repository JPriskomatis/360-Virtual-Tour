import React, { useState, useEffect } from "react";

export default function SceneSelector({ scenes, currentScene, onSelect }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sceneKeys = Object.keys(scenes);
  const currentIndex = sceneKeys.indexOf(String(currentScene));

  let displayedScenes;

  if (isMobile) {
    displayedScenes = sceneKeys.slice(0, 3);
  } else {
    const prev = sceneKeys[currentIndex - 1];
    const curr = sceneKeys[currentIndex];
    const next = sceneKeys[currentIndex + 1];
    const twoNext = sceneKeys[currentIndex +2];

    displayedScenes = [prev, curr, next, twoNext].filter(Boolean);
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "50px",
        background: "rgba(0,0,0,0.4)",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
    >
      {displayedScenes.map((sceneKey, index) => {
        const title = scenes[sceneKey][0].sceneTitle;
        const isVisited = currentIndex >= sceneKeys.indexOf(sceneKey); // true for previous + current scenes

        return (
          <div key={sceneKey} className="flex flex-col items-center relative">
            {/* Image container */}
            <div className="relative flex items-center">
              <img
                src={sceneKey}
                alt={title}
                onClick={() => onSelect(sceneKey)}
                className={`w-16 h-16 cursor-pointer border-3 rounded-none 
                  transition-transform duration-200 hover:scale-105 
                  ${isVisited
                    ? "border-blue-800"
                    : "border-white hover:border-blue-400"}`}
              />

              {/* Connecting line */}
              {index < displayedScenes.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%", // middle of image
                    left: "100%", // start right after the image
                    width: "200px", // line length
                    height: "2px",
                    backgroundColor: currentIndex > sceneKeys.indexOf(sceneKey) ? "blue" : "white",
                    transform: "translateY(-50%)",
                    transition: "background-color 0.3s",
                  }}
                />
              )}
            </div>

            {/* Scene title */}
            <span
              className={`pt-2 text-center ${
                isVisited ? "text-gray-400" : "text-white"
              }`}
            >
              {title}
            </span>
          </div>
        );
      })}


    </div>)
} 

