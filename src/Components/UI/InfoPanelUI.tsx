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
    <div className="z-10 absolute inset-y-6 right-50 max-h-lg p-8 flex items-center justify-center">
      <div
        style={
          {
            "--background": "30 41 59",
            "--highlight": "255 255 255",

            "--bg-color":
              "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
            "--border-color": `linear-gradient(145deg,
              rgb(var(--highlight)) 0%,
              rgb(var(--highlight) / 0.3) 33.33%,
              rgb(var(--highlight) / 0.14) 66.67%,
              rgb(var(--highlight) / 0.1) 100%)
            `,
          } as CSSProperties
        }
        className="flex w-full max-w-md flex-col rounded-xl border border-transparent pt-4 pb-8 px-4
        [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
      >
        <p className="text-2xl text-white text-center pb-8">{title}</p>
        <p className="text-md text-white text-left">{information}</p>
      </div>
    </div>
  );
}