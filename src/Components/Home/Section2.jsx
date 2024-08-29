import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Section2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    });
    return (
        <div className=" ">
           
                <div className="flex flex-col relative p-5 lg:p-20 xl:p-32 md:flex md:flex-row 3xl:m-[4vw]">
                    <div className="md:flex  md:flex-row md:gap-5 lg:gap-20 xl:gap-32"  >
                        <div className="">
                            <h1 className="font-bold md:text-3xl xl:text-[3vw]" data-aos="fade-right" >Services</h1>
                            <p className="md:text-lg md:w-[260px] xl:w-[300px] 2xl:w-[450px] 3xl:w-[550px]  xl:leading-[30px] 2xl:leading-normal xl:text-[1.5vw] lg:mt-2 xl:mt-4" data-aos="fade-right">
                                Empowering our global clientele to embrace modern technology,
                                rethink processes, and elevate experiences. Empowering our global clientele to embrace modern technology,
                                rethink processes, and elevate experiences.
                                Empowering our global clientele to embrace modern technology,
                                rethink processes, and elevate experiences. Empowering our global clientele to embrace modern technology,
                                rethink
                                Empowering our global clientele to embrace modern technology,
                                rethink processes, and elevate experiences. Empowering our global clientele to embrace modern technology,
                                rethink
                            </p>
                        </div>
                        <div className=" h-[0.1px] md:hidden my-5 bg-black"></div>
                        <div
                            className="bg-gray-400  h-[450px] lg:h-[550px] xl:h-[850px] hidden md:block w-[1px] 2xl:h-[950px] 3xl:h-[1050px]"
                        // style={{
                        //     width: "1px",
                        //     height: "450px",
                        // }}
                        ></div>
                    </div>
                    <div className="md:ml-5 lg:px-10 xl:px-20">
                        <div className="" data-aos="fade-up">
                            <h1 className="font-bold xl:text-[2.5vw]">Digital</h1>
                            <p className="xl:text-[1.5vw]">
                                We offer core insights-driven digital transformation capabilities,
                                modernize key systems to accelerate innovation, and provide a
                                design-led, unified, and personalized experience
                            </p>
                            <div className="text-orange-600 gap-1 flex items-center ">
                                <button className="uppercase  xl:text-[1vw]">Learn more</button>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <div className=" h-[0.1px] my-5 bg-black"></div>
                        </div>
                        <div className="" data-aos="fade-up">
                            <h1 className="font-bold xl:text-[2.5vw]">Data & AI</h1>
                            <p className="xl:text-[1.5vw]">
                                We offer core insights-driven digital transformation capabilities,
                                modernize key systems to accelerate innovation, and provide a
                                design-led, unified, and personalized experience
                            </p>
                            <div className="text-orange-600 gap-1 flex items-center ">
                                <button className="uppercase xl:text-[1vw]">Learn more</button>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <div className=" h-[0.1px] my-5 bg-black"></div>
                        </div>
                        <div className="" data-aos="fade-up">
                            <h1 className="font-bold xl:text-[2.5vw]">Cloud</h1>
                            <p className="xl:text-[1.5vw]">
                                We offer core insights-driven digital transformation capabilities,
                                modernize key systems to accelerate innovation, and provide a
                                design-led, unified, and personalized experience
                            </p>
                            <div className="text-orange-600 gap-1 flex items-center ">
                                <button className="uppercase xl:text-[1vw]">Learn more</button>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default Section2;
