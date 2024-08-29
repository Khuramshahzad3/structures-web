import React from "react";
import UseReadingProgress from "./UseReadingProgress";
const Progressbar = () => {
  const completion = UseReadingProgress();

  return (
    <div className="">
      <div className="fixed top-0 w-full text-center bg-green-800 text-white z-10">
      
        <div className="w-full h-[5px] bg-gray-200">
          <div
            className="h-[5px] bg-orange-600"
            style={{ width: `${completion}%` }}
          ></div>
        </div>
      </div>

  

    </div>

  );
};

export default Progressbar;
