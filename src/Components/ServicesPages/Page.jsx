import React from "react";
import v4 from "../../assets/v4.mp4";
import ServiceCardDetails from "./ServiceCardDetails";
const Page = (props) => {
  return (
    <div>
      <div className="bg-black ">
        <video muted="muted" autoPlay={true} className="z-10 opacity-30 w-screen">
          <source src={v4} type="video/mp4" />
        </video>
      </div>
      <div className="container max-w-[1600px] m-auto">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="  sm:text-[3vw] lg:text-[2vw] font-Poppins uppercase font-semibold my-4">
            {props.title}
          </h1>
          <ServiceCardDetails />
        </div>
      </div>
    </div>
  );
};

export default Page;
