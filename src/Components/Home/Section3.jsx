import React from 'react'
import "animate.css";
import Button from './Button';

const Section3 = () => {
  

    return (
        <div className=''>
            <div className="p-5">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl mb-5 2xl:text-[3vw] text-center">How can we help you?</p>
                    <p className="text-center mb-5 2xl:text-[2vw]">Are you ready to push boundaries and explore new frontiers of innovation?</p>
                    <Button text="Let's work together"/>
                </div>
            </div>
        </div>
    )
}

export default Section3;
