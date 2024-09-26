import React from 'react'
import CourseData from '../../assets/CourseData'
import CourseCard from './CourseCard'

const CourseCardDetails = () => {
    return (
        <div>
            <div className="grid grid-cols-1 my-10 mb-32 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {CourseData.map((course, index) => (
                    <CourseCard
                        key={index}
                        image={course.image}
                        title={course.Service}
                        newPrice={course.Price}
                        id={course.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default CourseCardDetails