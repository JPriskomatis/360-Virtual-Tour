import { useRef, useEffect } from "react";

export default function Hotspot({ position, radius = 0.1, color = "#3c3f16", onClick, image, text="" }) {
  const hotspotRef = useRef(null);

  useEffect(() => {
    const hotspot = hotspotRef.current;
    if (!hotspot) return;

    const handleClick = () => {
      if (onClick) onClick(hotspot, image);
    };

    hotspot.addEventListener("click", handleClick);

    return () => hotspot.removeEventListener("click", handleClick);
  }, [onClick, image]);

  return (
    <a-entity position={position}>
      <a-entity
      ref={hotspotRef}
      class="clickable"
      geometry={`primitive: circle; radius: ${radius}`}
      material={`color: ${color};`}
    ></a-entity>

    <a-text
      value ={text}
      align="center"
      position="0 0 0.01"
      color="#ffffff"
      width="1.5"
    ></a-text>

    </a-entity>
  );
}
