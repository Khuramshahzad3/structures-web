import React, { useRef, useState } from "react";
import {Link} from "react-router-dom"
import { SwiperSlide, Swiper } from "swiper/react";
import v3 from "../../assets/v3.mp4";
import v4 from "../../assets/v4.mp4";
import v5 from "../../assets/v5.mp4";
import "./HeroStyles.css"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SwiperCore from "swiper";
import "animate.css";
const HeroSection = () => {
  SwiperCore.use([Navigation]);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <div className="  ">
      <div className=" ">
        <Swiper
          // grabCursor={true}
          // centeredSlides={true}
          // slidesPerView={slidesPerView}
          // loop={true}
          // onSlideChange={handleSlideChange}
          // onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          // navigation={{
          //   nextEl: ".swiper-next",
          //   prevEl: ".prev",
          //   clickable: true,
          // }}
          modules={[ Autoplay]}
          navigation
        >
          <SwiperSlide>
            <div className="  ">
              <div className="bg-black max-sm:h-[500px]">
                <video
                  muted="muted"
                  autoPlay={true}
                  className="z-10 opacity-40 object-cover w-full h-full 2xl:w-screen"
                >
                  <source src={v3} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col absolute top-32  items-center  justify-center sm:top-20 md:left-[4vw] lg:left-[6vw] lg:top-32 xl:left-[4vw] 2xl:left-[6vw] mx-auto 3xl:top-80">
                <h1 className="text-white font-Poppins z-[150]   md:top-[12vw] text-center  xl:text-4xl lg:text-2xl text-lg mx-auto">
                  We Reimagine Tomorrow
                </h1>
                <p className="text-white px-4 font-Poppins z-[150] xs:mt-[4vw]  leading-[6vw] md:text-[2vw] xl:text-[2.2vw] xl:top-[14.7vw] text-[2.2vw] m-auto text-center text-sm xs:px-20">
                  {" "}
                  Driving growth and molding the future through transformative
                  change
                </p>
                <div
                  className={`bg-white w-[150px]  h-[30px] sm:w-[230px] flex items-center justify-center sm:h-[50px] z-[150] xs:mt-[14vw] sm:mt-10 md:mt-20 absolute rounded-md text-center cursor-pointer hover:text-white xl:mt-[16vw] hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-[#1b1e2c] top-32 hover:border-2  font-light ${
                    isHovered ? "animate__animated animate__pulse" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link to={"/contactus"} className=" text-center text-sm sm:text-xl"> Get in Touch</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  ">
              <div className="bg-black max-sm:h-[500px]">
                <video
                  muted="muted"
                  autoPlay={true}
                  className="z-10 opacity-60 object-cover w-full h-full 2xl:w-screen"
                >
                  <source src={v4} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col absolute top-32  items-center  justify-center sm:top-20 md:left-[4vw] lg:left-[6vw] lg:top-32 xl:left-[4vw] 2xl:left-[6vw] mx-auto 3xl:top-80">
                <h1 className="text-white font-Poppins z-[150]   md:top-[12vw] text-center  xl:text-4xl lg:text-2xl text-lg mx-auto">
                  We Reimagine Tomorrow
                </h1>
                <p className="text-white px-4 font-Poppins z-[150] xs:mt-[4vw]  leading-[6vw] md:text-[2vw] xl:text-[2.2vw] xl:top-[14.7vw] text-[2.2vw] m-auto text-center text-sm xs:px-20">
                  {" "}
                  Driving growth and molding the future through transformative
                  change
                </p>
                <div
                  className={`bg-white w-[150px]  h-[30px] sm:w-[230px] flex items-center justify-center sm:h-[50px] z-[150] xs:mt-[14vw] sm:mt-10 md:mt-20 absolute rounded-md text-center cursor-pointer hover:text-white xl:mt-[16vw] hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-[#1b1e2c] top-32 hover:border-2  font-light ${
                    isHovered ? "animate__animated animate__pulse" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link to={"/contactus"} className=" text-center text-sm sm:text-xl"> Get in Touch</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  ">
              <div className="bg-black max-sm:h-[500px]">
                <video
                  muted="muted"
                  autoPlay={true}
                  className="z-10 opacity-60 object-cover w-full h-full 2xl:w-screen"
                >
                  <source src={v5} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col absolute top-32  items-center  justify-center sm:top-20 md:left-[4vw] lg:left-[6vw] lg:top-32 xl:left-[4vw] 2xl:left-[6vw] mx-auto 3xl:top-80">
                <h1 className="text-white font-Poppins z-[150]   md:top-[12vw] text-center  xl:text-4xl lg:text-2xl text-lg mx-auto">
                  We Reimagine Tomorrow
                </h1>
                <p className="text-white px-4 font-Poppins z-[150] xs:mt-[4vw]  leading-[6vw] md:text-[2vw] xl:text-[2.2vw] xl:top-[14.7vw] text-[2.2vw] m-auto text-center text-sm xs:px-20">
                  {" "}
                  Driving growth and molding the future through transformative
                  change
                </p>
                <div
                  className={`bg-white w-[150px]  h-[30px] sm:w-[230px] flex items-center justify-center sm:h-[50px] z-[150] xs:mt-[14vw] sm:mt-10 md:mt-20 absolute rounded-md text-center cursor-pointer hover:text-white xl:mt-[16vw] hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-[#1b1e2c] top-32 hover:border-2  font-light ${
                    isHovered ? "animate__animated animate__pulse" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link to={"/contactus"} className=" text-center text-sm sm:text-xl"> Get in Touch</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
         
         
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
