import "aframe";
import "./App.css";
import Hotspot from "./Components/Hotspot";
import SceneSelector from "./Components/SceneSelector";
import hotspotsData from "./Data/ScenesList";
import { useState } from "react";
import StartScreen from "./States/StartScreen";

export default function App() {
  const [currentImage, setCurrentImage] = useState("/images/image.jpg");
  const [currentHotspots, setCurrentHotspots] = useState(
    hotspotsData["/images/image.jpg"] || []           //This is the first image when we load the app;
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeScene = (image) => {
    //Start the blur transition;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentImage(image);
      setCurrentHotspots(hotspotsData[image] || []);
      setIsTransitioning(false); //fade out blur;
    }, 500);
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
      
      {/*<StartScreen/>*/}
      {/* 360 Scene */}
      <a-scene fog stats inspector keyboard-shortcuts vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
        <a-sky id="image-360" src={currentImage} rotation="0 -90 0"></a-sky>

        {/* Hotspots */}
        {currentHotspots.map((h, index) => (
          <Hotspot
            key={index}
            position={h.position}
            image={h.image}
            color={h.color}
            text={h.text}
            radius={0.1}
            iconImage={h.iconImage}
            onClick={handleHotspotClick}
            infoTitle={h.infoTitle}
            infoText={h.infoText}
          />
        ))}

        <a-entity camera look-controls wasd-controls="acceleration:100"></a-entity>
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
