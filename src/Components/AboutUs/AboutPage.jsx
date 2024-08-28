import React from 'react'
import About1 from '../../assets/About.jpg'
import AboutDetails from './AboutDetails'
import Section3 from '../Home/Section3'

const AboutPage = () => {
    return (
        <div className=''>
            <div className="">
                <div className="">
                    <img src={About1} alt="About" className='h-[80vh] w-screen object-cover' />
                    <AboutDetails />
                    <Section3/>
                </div>
            </div>
        </div>
    )
}

export default AboutPage