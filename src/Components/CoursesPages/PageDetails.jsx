import React from "react";
import Service from "../../assets/services.jpg";
import CourseCardDetails from "./CourseCardDetails";
import v3 from "../../assets/v3.mp4";
const PageDetails = (props) => {
  return (
    <div>
      <div className="bg-black ">
        <video
          muted="muted"
          autoPlay={true}
          className="z-10 opacity-30 w-screen"
        >
          <source src={v3} type="video/mp4" />
        </video>
      </div>
      <div className="container max-w-[1600px] m-auto">
        <div className=" flex flex-col items-center justify-center">
          <h1 className=" sm:text-[3vw] lg:text-[2vw] font-Poppins uppercase font-semibold my-4">
            {props.title}
          </h1>
          <CourseCardDetails />
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
