import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './SliderStyles.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import F1 from '../../assets/F1.jpg'
import Star from '../../assets/Star.webp'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'animate.css';
const Slider = () => {
    const [isHovered, setIsHovered] = useState(false);
    const slides = [
        {
            heading: "Event",
            image: F1,
            title: 'Forbes Asia Best Under a Billion 2024',
            description: 'Systems Limited wins Forbes Asia’s Best Under a Billion 2024.',
        },
        {
            heading: "Event",
            image: Star,
            title: 'Shaping New Frontiers',
            description: 'Shaping new frontiers in banking at TCF 2024.',
        },
        {
            heading: "Event",
            image: F1,
            title: 'Forbes Asia Best Under a Billion 2024',
            description: 'Systems Limited wins Forbes Asia’s Best Under a Billion 2024.',
        },
        {
            heading: "Event",
            image: Star,
            title: 'Shaping New Frontiers',
            description: 'Shaping new frontiers in banking at TCF 2024.',
        },
        {
            heading: "Event",
            image: F1,
            title: 'Forbes Asia Best Under a Billion 2024',
            description: 'Systems Limited wins Forbes Asia’s Best Under a Billion 2024.',
        },
        {
            heading: "Case Study",
            image: Star,
            title: 'Shaping New Frontiers',
            description: 'Shaping new frontiers in banking at TCF 2024.',
        },
    ];

    return (
        <div className="md:hidden">
            <Swiper
                className='mx-12 sm:mx-20 '
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                scrollbar={{
                    el: ".swiper-scrollbar",
                }}

            data-aos="fade-up"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-[365.297px] w-[210px] sm:w-[448px] sm:h-[365.297px] mb-20  m-auto relative rounded-sm "
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src={slide.image} alt="" className='w-full h-full object-cover sm:object-fill' />
                            <div className=" flex flex-col items-center ">
                                <h1 className='absolute text-white top-4 left-3 font-semibold'>{slide.heading}</h1>
                                <h1 className='absolute text-white top-12 left-3 font-semibold'>{slide.title}</h1>
                                <p className={`text-white text-base p-3 absolute top-32 text-center  ${isHovered ? "block" : "hidden"} text-center ${isHovered ? "animate__animated animate__backInRight" : ""} `}>{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-scrollbar mb-10 "></div>


            </Swiper>
        </div>
    );
};

export default Slider;
