import React from 'react'

const CourseDisplay = (props) => {
  const { course } = props;

  return (
    <div className="mx-auto max-w-[1170px] px-6 pt-10">
      <div className="flex flex-col md:flex-row md:justify-between p-4 font-Poppins">
        <div className=" mb-4 md:mb-0 flex flex-col gap-6">
          <h1 className="text-xl font-bold">{course.course}</h1>
          <ul className="list-disc pl-5 text-gray-700">
            {course.outline.map((item, index) => (
              <div className="">
                <li className="list-none font-bold mt-5">Week {index + 1}</li>
                <li key={index} className="my-1">{item}  </li>
              </div>

            ))}
          </ul>
        </div>
        <div className=" ">
          <div className=" flex items-center gap-5">
            <h1 className="text-lg font-semibold text-orange-500">Course Duration: </h1>
            <h1 className="text-lg font-semibold">{course.duration}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDisplay;
