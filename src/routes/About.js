import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg3 from '../components/Heroimg3'
import AboutContent from '../components/AboutContent'
import Achivements from '../components/Achivements'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 heading="ABOUT" text="I am a friendly react developer"/>
      <AboutContent/>
      <Achivements/>
      <Footer/>
    </div>
  )
}

export default About