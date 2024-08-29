import React, { useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import v1 from "../../assets/v1.mp4";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "animate.css";
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };
  return (
    <div className=" ">
      <div className="    ">
        <Swiper
          // grabCursor={true}
          // centeredSlides={true}
          // slidesPerView={slidesPerView}
          // loop={true}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".prev",
            clickable: true,
          }}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="  ">
              <div className="bg-black ">
                <video
                  muted="muted"
                  autoPlay={true}
                  className="z-10 opacity-30 w-screen"
                >
                  <source src={v1} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col  items-center justify-center">
                <h1 className="text-white font-Poppins z-[150] absolute top-[2rem] md:top-[6vw] text-center  text-[4vw] md:text-[3vw] m-auto">
                  We Reimagine Tomorrow
                </h1>
                <p className="text-white px-4 font-Poppins z-[150] xs:mt-[4vw] md:top-[10vw] absolute top-[3.5rem] leading-[6vw] md:text-[3vw] xl:text-[2.2vw] xl:top-[14.7vw] text-[4vw] m-auto text-center">
                  {" "}
                  Driving growth and molding the future through transformative
                  changefsfsfs
                </p>
                <div className={`bg-white w-[150px]  h-[30px] sm:w-[230px] flex items-center justify-center sm:h-[50px] z-[150] xs:mt-[14vw] sm:mt-[18vw] md:mt-[22vw] absolute rounded-lg text-center cursor-pointer hover:text-white hover:bg-black hover:bg-gradient-to-r hover:from-black hover:to-[#1b1e2c] top-32 hover:border-2  font-light ${isHovered ? "animate__animated animate__pulse" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  <p className=" text-center sm:text-xl">
                    {" "}
                    Get in Touch
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  ">
              <div className="bg-black">
                <video
                  muted="muted"
                  autoPlay={true}
                  className="z-10 opacity-30 w-screen"
                >
                  <source src={v1} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col  items-center justify-center">
                <h1 className="text-white font-Poppins z-[150] absolute top-[2rem] md:top-[6vw] text-center  text-[4vw] md:text-[3vw] m-auto">
                  We Reimagine Tomorrow
                </h1>
                <p className="text-white px-4 font-Poppins z-[150] xs:mt-[4vw] md:top-[10vw] absolute top-[3.5rem] leading-[6vw] xl:top-[14.7vw] md:text-[3vw] text-[4vw] xl:text-[2.2vw] m-auto text-center">
                  {" "}
                  Driving growth and molding the future through transformative
                  change
                </p>
                <div className={`bg-white w-[150px]  h-[30px] sm:w-[230px] flex items-center justify-center sm:h-[50px] z-[150] xs:mt-[14vw] sm:mt-[18vw] md:mt-[22vw] absolute rounded-lg text-center cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-black hover:to-[#1b1e2c] hover:bg-black top-32 hover:border-2 hover:border-white font-light ${isHovered ? "animate__animated animate__pulse" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  <p className=" text-center sm:text-xl">
                    {" "}
                    Get in Touch
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  ">
              <div className="bg-black">
                <video
                  muted="muted"
                  autoPlay={true}
                  className="z-10 opacity-30 w-screen"
                >
                  <source src={v1} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col  items-center justify-center">
                <h1 className="text-white font-Poppins z-[150] absolute top-[2rem] md:top-[6vw] text-center  text-[4vw] md:text-[3vw] m-auto">
                  We Reimagine Tomorrow
                </h1>
                <p className="text-white px-4 font-Poppins z-[150] xs:mt-[4vw] md:top-[10vw] absolute top-[3.5rem] leading-[6vw] xl:top-[14.7vw] md:text-[3vw] text-[4vw] xl:text-[2.2vw] m-auto text-center">
                  {" "}
                  Driving growth and molding the future through transformative
                  change
                </p>
                <div className={`bg-white w-[150px]  h-[30px] sm:w-[230px] flex items-center justify-center sm:h-[50px] z-[150] xs:mt-[14vw] sm:mt-[18vw] md:mt-[22vw] absolute rounded-lg text-center cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-black hover:to-[#1b1e2c]  hover:bg-black top-32 hover:border-2 hover:border-white font-light ${isHovered ? "animate__animated animate__pulse" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  <p className=" text-center sm:text-xl">
                    {" "}
                    Get in Touch
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="flex  items-center justify-center ">
            <div className="prev cursor-pointer ">
              <FontAwesomeIcon icon={faChevronLeft} className={`text-white absolute top-[20vw] left-[4vw] text-[6vw] lg:text-[4vw] z-[170] ${currentIndex === 0 ? "opacity-40 pointer-events-none" : ""}`} />
            </div>
            <div className="swiper-next cursor-pointer ">
              <FontAwesomeIcon icon={faChevronRight} className={`text-white absolute top-[20vw] left-[92vw] text-[6vw] lg:text-[4vw] z-[180]  ${currentIndex === swiperRef.current?.slides.length - 1 ? "opacity-40 pointer-events-none" : ""}`} />
            </div>

          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
