import React, { useState } from "react";

export function WelcomeScreen({ onStart }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => onStart(), 2000); // Wait for 2 seconds before navigating to the next screen
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-end ">
      {/* IMAGE FOND */}
      <img
        src="./assets/fond.png"
        className="absolute z-0 w-full h-full lg:w-500 lg:scale-500 object-cover"
        alt="background"
      />

      {/* SAPIN */}
      <img
        src="./assets/sapin.png"
        className="absolute scale-150 bottom-20 lg:scale-200 lg:bottom-10 lg:right-200"
        alt="sapin"
      />

      {/* IMAGE LUTIN */}
      <img
        src="./assets/lutin_neutre.png"
        className="absolute scale-150 -bottom-20 lg:-bottom-0 lg:left-0 lg:scale-200"
        alt="lutin"
      />

      {/* BTN COMMENCER */}
      <button onClick={handleStart} className="relative mb-10 lg:mb-20 cursor-pointer">
        <img src="./assets/btn_commence.png" alt="Commencer" />
      </button>
    </div>
  );
}
