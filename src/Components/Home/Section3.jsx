import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "animate.css";
const Section3 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=''>
            <div className="     p-5 ">
                <div className="flex flex-col items-center justify-center    ">
                    <p className="text-2xl mb-5 2xl:text-[3vw]">How can we help you?</p>
                    <p className="text-center mb-5 2xl:text-[2vw]">Are you ready to push boundaries and explore new frontiers of innovation?</p>
                    <div
                        className={`w-[200px] h-[50px] bg-[#262B3F] flex items-center  2xl:w-[310px] 3xl:w-[380px] 2xl:h-[80px] justify-center rounded-lg ${isHovered ? "animate__animated animate__pulse" : ""
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Link to="/contactus" className="uppercase 2xl:text-[1.5vw] text-white">
                            Let's work together
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section3