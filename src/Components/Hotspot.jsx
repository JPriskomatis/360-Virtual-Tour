import { useRef, useState, useEffect } from "react";
import InfoPanelUI from "./UI/InfoPanelUI";
import "aframe-look-at-component"; 

export default function Hotspot({
  position,
  radius = 0.1,
  color = "#6BADFF",
  onClick,
  image,
  text = "",
  iconImage = "", 
  infoTitle = "",
  infoText = "", // new prop for hover info
}) {
  const hotspotRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const hotspot = hotspotRef.current;
    if (!hotspot) return;

    const handleClick = () => {
      if (onClick) onClick(hotspot, image);
    };

    const handleMouseEnter = () => {
      hotspot.setAttribute("material", "color: blue");
      if (infoTitle) setShowInfo(true);
      
    };

    const handleMouseLeave = () => {
      hotspot.setAttribute("material", `color: ${color}`);
      setShowInfo(false);
    };

    hotspot.addEventListener("click", handleClick);
    hotspot.addEventListener("mouseenter", handleMouseEnter);
    hotspot.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hotspot.removeEventListener("click", handleClick);
      hotspot.removeEventListener("mouseenter", handleMouseEnter);
      hotspot.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [onClick, image, infoText]);

  return (
    
    <a-entity position={position}>
      {/* Hotspot circle */}
      <a-entity
        ref={hotspotRef}
        class="clickable"
        geometry={`primitive: circle; radius: ${radius}`}
        material={`color: ${color};`}
        look-at="[camera]"
      >
        <a-image wireframe src={iconImage} width="0.3" height = "0.3" position= "0 0 0.001"></a-image> {/* we can place icons inside this image now */}

      </a-entity>

      {/* Optional main text */}
      {/*{text && (
        <a-text
          value={text}
          align="center"
          
          color="white"
          width="4"
        ></a-text>
      )}*/}

      {/* Info panel on hover */}
      {showInfo && (
        <InfoPanelUI
          title={infoTitle}
          information={infoText}
        />
      )}
    </a-entity>
  );
}
