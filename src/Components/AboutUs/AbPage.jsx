import React, { useEffect } from "react";
import About1 from "../../assets/About.jpg";
import AboutDetails from "./AboutDetails";
import Section3 from "../Home/Section3";
import v1 from "../../assets/v1.mp4";
import AOS from "aos";
import "aos/dist/aos.css";


const Aboutpage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="bg-black ">
            <video
              muted="muted"
              autoPlay={true}
              className="z-10 opacity-30 w-screen"
            >
              <source src={v1} type="video/mp4" />
            </video>
          </div>
          <AboutDetails />
          <Section3 />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
