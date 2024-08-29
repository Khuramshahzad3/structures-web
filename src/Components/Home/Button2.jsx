import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div
                className={`w-[120px] h-[50px] flex items-center lg:w-[150px] 2xl:w-[170px] 3xl:w-[380px] 2xl:h-[80px] justify-center rounded-md bg-transparent border-2 border-white hover:bg-gradient-to-r hover:from-black hover:to-[#262B3F] ${isHovered ? "animate__animated animate__pulse" : ""
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/contactus" className="uppercase 2xl:text-[1.5vw] text-white">
                    {props.text}
                </Link>
            </div>
        </div>
    )
}

export default Button