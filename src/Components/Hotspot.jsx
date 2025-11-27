import { useRef, useState, useEffect } from "react";
import InfoPanelUI from "./UI/InfoPanelUI";


export default function Hotspot({
  position,
  radius = 0.1,
  color = "#475246",
  onClick,
  image,
  text = "",
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
      if (infoText) setShowInfo(true);
    };

    const handleMouseLeave = () => {
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
      ></a-entity>

      {/* Optional main text */}
      {text && (
        <a-text
          value={text}
          align="center"
          
          color="white"
          width="7"
        ></a-text>
      )}

      {/* Info panel on hover */}
      {infoText && showInfo && (
        <InfoPanelUI
          title={infoTitle}
          information={infoText}
        />
      )}
    </a-entity>
  );
}
