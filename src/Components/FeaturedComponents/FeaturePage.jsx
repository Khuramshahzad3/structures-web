import React from 'react'
import FeatureLarge from './FeatureLarge'
import Slider from './Slider'

const FeaturePage = () => {
  return (
    <div>
        <div className="bg-[#212529]">
            <div className=" flex flex-col items-center justify-center ">
                <h1 className="uppercase text-3xl text-white py-10 ">Featured Insights</h1>
                <FeatureLarge />
            </div>
                <Slider/> 
        </div>
    </div>
  )
}

export default FeaturePage