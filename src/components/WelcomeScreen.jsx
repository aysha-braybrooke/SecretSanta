import React, { useState } from "react";

export function WelcomeScreen({ onStart }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStart = () => {
    setIsTransitioning(true);
    setTimeout(() => onStart(), 2000); // Wait for 2 seconds before navigating to the next screen
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-end font-orelega overflow-hidden">
      <img src="./assets/fond.png" className="absolute z-0 scale-150 w-full h-full object-cover" alt="background" />
      <img src="./assets/sapin.png" className="absolute scale-200 lg:scale-50 lg:bottom-0" alt="sapin" />
      <img src="./assets/lutin_neutre.png" className="absolute scale-150 -bottom-20 lg:scale-50 lg:-top-100" alt="lutin" />


      <button onClick={handleStart} className="relative mb-10">
        <img src="./assets/btn_commence.png" alt="Commencer" />
      </button>
    </div>
  );
}
