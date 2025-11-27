/**
 * This component will be visible when we hover on a hotspot that contains information;
 * It should be able to have:
 * 
 * Title: String, Name of hotspot (could be the name of the room)
 * Information: String, Description of the hotspot (could be a fact about the school, the course catalogue, history of school etc.)
 */

import { CSSProperties } from "react";

interface InfoPanelUIProps{
  title: string;
  information: string
}
export default function InfoPanelUI({title, information} : InfoPanelUIProps){
    return (
    <div className="z-10 absolute bottom-50 left-1/2 -translate-x-1/2 p-8 flex items-center justify-center">
      <div
        style={{
          /* Animated gradient border */
          border: "5px solid transparent",
          background:
            "linear-gradient(rgb(30,41,59), rgb(30,41,59)) padding-box, \
            linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.1),  rgba(255,255,255,0.5)) border-box",
          backgroundSize: "200% 200%",
          animation: "border-shimmer 5s linear infinite",
        }}
        className="flex w-full max-w-md flex-col rounded-xl border border-transparent p-4
        [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
      >
        <p className="text-2xl text-white text-center">{title}</p>
        <p className={`text-md text-white text-left ${information ? "py-4" : ""}`}> {information}</p>
      </div>
    </div>
  );
}