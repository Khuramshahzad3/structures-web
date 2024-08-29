import React from 'react'
import VideoHome from '../../assets/HomeVideo.mp4'
import Button2 from './Button2'

const VideoSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative my-10 mb-20">

        <div className="bg-black ">
          <video
            muted="muted"
            autoPlay={true}
            className='opacity-70 w-screen '
          >
            <source src={VideoHome} type="video/mp4" className='' />
          </video>
        </div>
        <div className="absolute flex flex-col gap-4 items-center lg:gap-10 justify-center">

          <h1 className="text-white max-lg:text-xl lg:text-4xl xl:text-5xl">Your next starts right here</h1>
          <Button2 text="join us" />

        </div>


      </div>
    </div>
  )
}

export default VideoSection