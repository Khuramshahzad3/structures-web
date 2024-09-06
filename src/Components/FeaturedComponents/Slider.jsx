import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SliderStyles.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cards from "../../assets/FeatureCardData";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "animate.css";
const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="md:hidden">
      <Swiper
        className="mx-12 sm:mx-20 "
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{
          el: ".swiper-scrollbar",
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[365.297px] w-[210px] sm:w-[448px] sm:h-[365.297px] mb-20  m-auto relative rounded-sm group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-aos="fade-up"
            >
              <video
                className="w-full h-full object-cover sm:object-fill transition-transform duration-500 ease-in-out transform group-hover:scale-[110%] group-hover:blur-[2px] opacity-55"
                muted="muted"
                autoPlay={true}
              >
                <source src={card.video} />
              </video>
              <div className=" flex flex-col items-center ">
                <h1 className="absolute text-white top-4 left-3 font-semibold ">
                  {card.heading}
                </h1>
                <h1 className="absolute text-white top-12 left-3 font-semibold">
                  {card.title}
                </h1>
                <p
                  className={`text-gray-300 text-base p-3 absolute top-32 text-center  ${
                    isHovered ? "block" : "hidden"
                  } text-center ${
                    isHovered ? "animate__animated animate__backInRight" : ""
                  } `}
                  
                >
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar mb-5 "></div>
      </Swiper>
    </div>
  );
};

export default Slider;
