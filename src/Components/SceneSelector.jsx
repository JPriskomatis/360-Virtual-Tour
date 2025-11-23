import React, { useEffect, useRef } from "react";

export default function SceneSelector({ scenes, onSelect }) {
  


  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        background: "rgba(0,0,0,0.4)",
        padding: "10px 20px",
        borderRadius: "10px",
      }}
    >
      {Object.keys(scenes).map((sceneKey) => (
        <img
          key={sceneKey}
          src={sceneKey} // Using the image as thumbnail
          alt="scene thumbnail"
          style={{
            width: "80px",
            height: "45px",
            cursor: "pointer",
            border: "2px solid white",
            borderRadius: "0px",
          }}
          onClick={() => onSelect(sceneKey)}
        />
      ))}
    </div>
  );
}
