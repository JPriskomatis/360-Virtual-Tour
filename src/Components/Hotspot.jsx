import { useRef, useState, useEffect } from "react";
import InfoPanelUI from "./UI/InfoPanelUI";
import "aframe-look-at-component";
import NavigationIcon from "./UI/navigationIcon";

export default function Hotspot({
  position,
  rotation,
  radius = 0.1,
  color = "white",
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
      hotspot.setAttribute("material", "opacity: 1");
      if (infoTitle) setShowInfo(true);
      
    };

    const handleMouseLeave = () => {
      hotspot.setAttribute("material", "opacity: 0");
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
    
    <a-entity position={position} rotation={rotation}>
      {/* Hotspot circle */}
      


       <a-entity
        ref={hotspotRef}
        
        class="clickable"
        geometry={`primitive: circle; radius: ${radius}`}
        material={`color: ${color}; opacity: 0`}

      >
        {/*<a-image  wireframe src={iconImage} width="0.3" height = "0.3" position= "0 0 0.001"></a-image> {/* we can place icons inside this image now */} 

          <a-entity
            geometry="primitive: ring; radiusInner: 0.25; radiusOuter: 0.2;" 
            material="color: white; side: double; opacity: 0.8"
            position="0 0 0">
          </a-entity>

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
