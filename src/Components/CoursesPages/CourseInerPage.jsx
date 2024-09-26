import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import v4 from "../../assets/v4.mp4";
import CourseData from '../../assets/CourseData'
import CourseDisplay from './CourseDisplay'
import { useParams } from 'react-router-dom'
const CourseInerPage = () => {
    const { courseid } = useParams();

    const course = CourseData.find((e) => e.id === Number(courseid))


    return (
        <div>
            <div className="bg-black max-md:h-[500px]">
                <video
                    muted="muted"
                    autoPlay={true}
                    className="z-10 opacity-40 object-cover w-full h-full 2xl:w-screen"
                >
                    <source src={v4} type="video/mp4" />
                </video>
            </div>

            <CourseDisplay course={course} />
        </div>
    )
}

export default CourseInerPage
