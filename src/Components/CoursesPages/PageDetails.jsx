import React from 'react'
import Service from '../../assets/services.jpg'
import CourseCardDetails from './CourseCardDetails'
const PageDetails = (props) => {
    return (
        <div>
            <img src={Service} alt="" className='h-[80vh] w-screen lg:object-cover' />
            <div className="container max-w-[1600px] m-auto">
                <div className=" flex flex-col items-center justify-center">
                <h1 className="max-sm:text-[10vw]  sm:text-[5vw] lg:text-[3vw] font-Poppins uppercase font-semibold my-4">{props.title}</h1>
                <CourseCardDetails />
                </div>


            </div>
        </div>
    )
}

export default PageDetails