import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div
                className={`w-[180px] h-[50px] flex items-center lg:w-[200px]   3xl:w-[250px]  justify-center rounded-md bg-[#262B3F] hover:bg-gradient-to-r hover:from-black hover:to-[#262B3F] ${isHovered ? "animate__animated animate__pulse" : ""
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to="/contactus" className="uppercase text-sm text-white 3xl:text-xl">
                    {props.text}
                </Link>
            </div>
        </div>
    )
}

export default Button