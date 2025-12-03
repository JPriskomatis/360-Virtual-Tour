import React from "react";

export default function SceneSelector({ scenes, onSelect }) {
  const sceneKeys = Object.keys(scenes);

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
      {sceneKeys.map((sceneKey, index) => (
        <div key={sceneKey} style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <img
            src={sceneKey}
            alt="scene thumbnail"
            onClick={() => onSelect(sceneKey)}
            className="w-20 h-[45px] cursor-pointer border-2 border-white rounded-none 
                       transition-transform duration-200 hover:scale-105 hover:border-blue-400"
          />
          
          {/* Draw line to next item except last */}
          {index < sceneKeys.length - 1 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-50px", // adjust spacing
                width: "50px", // length of line
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
