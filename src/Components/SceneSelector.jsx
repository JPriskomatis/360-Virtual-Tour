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
    displayedScenes = sceneKeys.slice(0, 2);
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
      {displayedScenes.map((sceneKey, index) => (
        <div key={sceneKey} style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <img
            src={sceneKey}
            alt="scene thumbnail"
            onClick={() => onSelect(sceneKey)}
            className={`w-16 h-16 cursor-pointer border-3 rounded-none 
                transition-transform duration-200 hover:scale-105 
                ${sceneKey === String(currentScene) 
                  ? "border-yellow-400" 
                  : "border-white hover:border-blue-400"}`}
          />

          {index < displayedScenes.length - 1 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-50px",
                width: "50px",
                height: "2px",
                backgroundColor: "white",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
