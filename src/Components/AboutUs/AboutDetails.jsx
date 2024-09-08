import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div>
      <div className=" ">
        <div className="flex flex-col justify-center container max-w-[1600px] items-center m-auto p-6 my-10 2xl:py-20">
          <div className="font-Poppins xl:text-lg 2xl:text-xl">
            <h1 className="uppercase font-bold" data-aos="fade-right">
              about us
            </h1>
            <p className="" data-aos="fade-right">
              Welcome to Structures ltd, We create digital solutions to help
              businesses succeed
            </p>
            <h1 className="uppercase font-bold" data-aos="fade-right">our vision</h1>
            <p className="" data-aos="fade-right">
              To be a global leader in the IT industry, renowned for our
              creativity, technical excellence, and commitment to client
              success. We envision a future where businesses thrive through our
              cutting-edge technology solutions, leveraging our expertise to
              create a seamless and engaging digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
