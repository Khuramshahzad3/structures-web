import React from "react";
import UseReadingProgress from "./UseReadingProgress";
const Progressbar = () => {
  const completion = UseReadingProgress();

  return (
    <div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-yellow-400 h-1.5   w-full top-[4.2rem] lg:top-[6.2rem] left-0 z-10"
      />
    </div>
  );
};

export default Progressbar;
