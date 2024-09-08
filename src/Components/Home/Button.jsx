import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div
                className={`w-[200px] h-[50px] flex items-center lg:w-[290px] 2xl:w-[320px] 3xl:w-[380px] 2xl:h-[70px] justify-center rounded-md bg-[#262B3F] hover:bg-gradient-to-r hover:from-black hover:to-[#262B3F] ${isHovered ? "animate__animated animate__pulse" : ""
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/contactus" className="uppercase 2xl:text-[1.2vw] text-white">
                    {props.text}
                </Link>
            </div>
        </div>
    )
}

export default Button