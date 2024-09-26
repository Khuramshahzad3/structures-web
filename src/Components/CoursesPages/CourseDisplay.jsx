import React from 'react'

const CourseDisplay = (props) => {
    const {course}=props;
  return (
    <div>
        {course.Service}
        {course.id}
       
    <img src= {course.image} />



    </div>
  )
}

export default CourseDisplay
