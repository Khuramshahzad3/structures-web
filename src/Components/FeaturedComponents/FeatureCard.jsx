import React, { useState } from 'react';
import 'animate.css';

const FeatureCard = ({ image, title, description, heading }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-[172.266px] lg:h-[358px] lg:w-[237px] h-[307px] xl:h-[446.812px] xl:w-[284.266px] 2xl:h-[512px] 2xl:w-[332.266px] overflow-hidden rounded-sm shadow-lg group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="fade-up"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-150
                group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-5">
                <h1 className="text-white  lg:text-lg font-semibold absolute top-5 left-5">{heading}</h1>
                <h3 className="text-white md:text-sm lg:text-lg font-semibold absolute top-14 left-5">{title}</h3>
                <p
                    className={`text-white md:max-lg:text-base md:max-lg:mt-20 text-base ${isHovered ? "block" : "hidden"} text-center ${isHovered ? "animate__animated animate__backInRight" : ""}`}

                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
