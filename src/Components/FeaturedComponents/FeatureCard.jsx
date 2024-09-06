import React, { useState } from "react";
import "animate.css";

const FeatureCard = ({ video, title, description, heading }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[245px] lg:h-[280px] lg:w-[280px] h-[245px] xl:h-[370px] xl:w-[370px] 2xl:h-[400px] 2xl:w-[400px] overflow-hidden rounded-sm shadow-lg group border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      <video
        className="w-full h-full object-cover transition-transform duration-500
        ease-in-out transform group-hover:scale-150 group-hover:blur-sm"
        muted="muted"
        autoPlay={true}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-5">
        <h1 className="text-white  lg:text-lg font-semibold absolute top-5 left-5">
          {heading}
        </h1>
        <h3 className="text-white md:text-sm lg:text-lg font-semibold absolute top-14 left-5">
          {title}
        </h3>
        <p
          className={`text-white md:max-lg:text-base md:max-lg:mt-20 text-base ${
            isHovered ? "block" : "hidden"
          } text-center ${
            isHovered ? "animate__animated animate__backInRight" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
