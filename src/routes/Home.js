import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Skills from '../components/skills'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg/>
        <Skills/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home