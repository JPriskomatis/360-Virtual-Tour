import "aframe";
import "./App.css";
import Hotspot from "./Components/Hotspot";
import SceneSelector from "./Components/SceneSelector";
import hotspotsData from "./Data/ScenesList";
import { useState } from "react";
import SpotlightBox from "./Components/SpotlightBox";
import StartScreen from "./States/StartScreen";


export default function App() {
  const [currentImage, setCurrentImage] = useState("/images/image.jpg");
  const [currentHotspots, setCurrentHotspots] = useState(
    hotspotsData["/images/image.jpg"] || []
  );

  const changeScene = (image) => {
    setCurrentImage(image);
    setCurrentHotspots(hotspotsData[image] || []);
  };

  const handleHotspotClick = (hotspot, image) => {
    if(image && image.trim() !== ""){
      changeScene(image);
    }

  };

  return (
    <div className="app" style={{ width: "100vw", height: "100vh" }}>
      <StartScreen/>
      <a-scene vr-mode-ui="enabled: true" cursor="rayOrigin: mouse">
        
        <a-sky id="image-360" src={currentImage} rotation="0 -90 0"></a-sky>

        {/* Hotspots for current image */}
        {currentHotspots.map((h, index) => (
          <Hotspot
            key={index}
            position={h.position}
            image={h.image}
            color={h.color}
            text={h.text}
            radius={h.radius}
            onClick={handleHotspotClick}
            infoText={h.infoText}

          />
        ))}

        <a-entity camera look-controls></a-entity>
      </a-scene>

      {/* Scene selector overlay */}
      <SceneSelector scenes={hotspotsData} onSelect={changeScene} />
    </div>
  );
}
