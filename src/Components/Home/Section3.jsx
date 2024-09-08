import React, { useEffect } from "react";
import "animate.css";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="mx-auto " data-aos="fade-up">
      <div className="p-5">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl mb-5 2xl:text-[2.5vw] text-center">
            How can we help you?
          </p>
          <p className="text-center mb-5 2xl:text-[1.4vw]">
            Are you ready to push boundaries and explore new frontiers of
            innovation?
          </p>
          <Button text="Let's work together" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
