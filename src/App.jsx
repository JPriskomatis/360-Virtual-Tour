import "aframe";
import "./App.css";
import Hotspot from "./Components/Hotspot";
import SceneSelector from "./Components/SceneSelector";
import hotspotsData from "./Data/ScenesList";
import { useState } from "react";

export default function App() {
  const [currentImage, setCurrentImage] = useState("/images/image.jpg");
  const [currentHotspots, setCurrentHotspots] = useState(
    hotspotsData["/images/image.jpg"] || []
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeScene = (image) => {
    // Start the blur transition
    setIsTransitioning(true);

    // Wait for the transition duration, then change the image and hotspots
    setTimeout(() => {
      setCurrentImage(image);
      setCurrentHotspots(hotspotsData[image] || []);
      setIsTransitioning(false); // fade out blur
    }, 500); // matches CSS transition duration
  };

  const handleHotspotClick = (hotspot, image) => {
    if (image && image.trim() !== "") {
      changeScene(image);
    }
  };

  return (
    <div className="app" style={{ width: "100vw", height: "100vh" }}>
      {/* Blur overlay */}
      <div className={`blur-overlay ${isTransitioning ? "active" : ""}`}></div>

      {/* 360 Scene */}
      <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
        <a-sky id="image-360" src={currentImage} rotation="0 -90 0"></a-sky>

        {/* Hotspots */}
        {currentHotspots.map((h, index) => (
          <Hotspot
            key={index}
            position={h.position}
            image={h.image}
            color={h.color}
            text={"!"}
            radius={h.radius}
            onClick={handleHotspotClick}
            infoTitle={h.infoTitle}
            infoText={h.infoText}
          />
        ))}

        <a-entity camera look-controls></a-entity>
      </a-scene>

      {/* Scene selector overlay */}
      <SceneSelector scenes={hotspotsData} onSelect={changeScene} />

      {/* Styles for blur overlay */}
      <style>{`
        .blur-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(0px);
          transition: backdrop-filter 0.5s ease, opacity 0.5s ease;
          pointer-events: none;
          opacity: 0;
          z-index: 20;
        }

        .blur-overlay.active {
          backdrop-filter: blur(8px);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
