import { useRef, useState, useEffect } from "react";

export default function Hotspot({
  position,
  radius = 0.1,
  color = "#3c3f16",
  onClick,
  image,
  text = "",
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
          
          color="#ffffff"
          width="1.5"
        ></a-text>
      )}

      {/* Info panel on hover */}
      {infoText && showInfo && (
        <a-entity position={`0 ${radius + 0.2} 0`}>
          <a-plane
            color="#000000"
            opacity="0.7"
            width="1.2"
            height="0.5"
            position="0 0 0"
          ></a-plane>
          <a-text
            value={infoText}
            color="#ffffff"
            align="center"
            width="1.1"
            position="0 0 0.01"
          ></a-text>
        </a-entity>
      )}
    </a-entity>
  );
}
