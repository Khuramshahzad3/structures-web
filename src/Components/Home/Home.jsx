import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Section2 from './Section2'
import Section3 from './Section3'
import VideoSection from './VideoSection'
import FeatureCardDetails from '../FeaturedComponents/FeatureCardDetails'
import FeaturePage from '../FeaturedComponents/FeaturePage'
import Slider from '../FeaturedComponents/Slider'
const Home = () => {
  return (
    <div>
      <HeroSection />
  
      <Section2 />
      <FeaturePage />
      <VideoSection />
      <Section3 />
    </div>
  )
}

export default Home