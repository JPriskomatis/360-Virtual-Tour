"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CoolButton } from "./CoolButton";
import TutorialIcons from "./TutorialIcons";



export default function SpotlightBox({ hideStartScreen }: { hideStartScreen: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  return (
    <div className="z-10 flex justify-center">
      <div
        className="group relative w-11/12 max-w-md rounded-xl border border-white/10 bg-gray-900 px-6 py-8 shadow-2xl sm:w-auto sm:px-8 sm:py-12"

        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />

        <h3 className="text-2xl font-semibold leading-7 text-sky-500">
          360° Εικονική Περιήγηση
        </h3>

        <p className="mt-6 text-base text-left leading-7 text-gray-200">
          Καλωσορίσατε στην 360° εικονική ξενάγηση! <br />
          Η εμπειρία αυτή έχει σχεδιαστεί για να σας προσφέρει μια πλήρως βυθιστική και διαδραστική εξερεύνηση του χώρου. <br />Περιηγηθείτε με το δικό σας ρυθμό, ανακαλύψτε κάθε λεπτομέρεια και αποκτήστε μια ολοκληρωμένη εικόνα του περιβάλλοντος.
        </p>

        {/*Tutorial icons we need:
            1)  Left Mouse Drag = Movement
            2)  Icons = What they represent
            3)  Click = Change scenes
        */}
        <div className="text-white text-2xl pt-4">
          Πατήστε Έναρξη για να ξεκινήσετε την εξερεύνηση!
        </div>
        <div className="flex flex-row justify-center items-start gap-10 pt-4">
          <TutorialIcons
          imageSrc={"./images/icons/mouseDrag.png"}
          iconDescription={"Αριστερό κλίκ πατημένο για Προβολή"}
          />
          <TutorialIcons
            imageSrc={"./images/enter.png"}
            iconDescription={"Κλίκ για Είσοδο"}
          />
          <TutorialIcons
            imageSrc={"./images/info.png"}
            iconDescription={"Σύρετε τον δείκτη για να Μάθετε"}
          />
        </div>
        
        <div className="flex flex-row justify-evenly pt-8">
          <CoolButton btnTitle="Έναρξη" ClickedBtn={hideStartScreen} />
        </div>
      </div>
    </div>
  );
}
