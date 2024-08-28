import React from 'react'
import Service from '../../assets/services.jpg'
const ServicePage = () => {
    return (
        <div>
            <img src={Service} alt="" className='h-[80vh] w-screen lg:object-cover' />
            <div className="container max-w-[1600px] m-auto">
                <div className="bg-gray-600 flex items-center justify-center">
                    <h1 className="text-[20vw]">services</h1>




                </div>


            </div>
        </div>
    )
}

export default ServicePage