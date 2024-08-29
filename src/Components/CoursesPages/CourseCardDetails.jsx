import React from 'react'
import CourseData from '../../assets/CourseData'
import CourseCard from './CourseCard'

const CourseCardDetails = () => {
    return (
        <div>
            <div className="grid grid-cols-1 my-10 mb-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {CourseData.map((course, index) => (
                    <CourseCard
                        key={index}
                        image={course.image}
                        title={course.Service}
                        //   oldPrice={course.oldPrice}
                        newPrice={course.Price}
                    />
                ))}
            </div>
        </div>
    )
}

export default CourseCardDetails