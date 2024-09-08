import React, { useState } from 'react'

const CourseCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="">
        <div className={`bg-white shadow-xl rounded-lg overflow-hidden w-[250px] h-[320px] mx-auto ${isHovered ? "animate__animated animate__pulse" : ""
          } `} onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}  >
          <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
          <div className="p-4 font-Poppins">
            <h3 className="text-gray-900 font-semibold ">{props.title}</h3>
  
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-900 font-bold text-sm">RS {props.newPrice}</span>
            </div>
          </div>
        </div>
      </div >
    );
  };

export default CourseCard