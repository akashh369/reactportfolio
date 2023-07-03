import React from 'react'
import './Achivements.css'
import {Link} from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import codechefcertificate from '../assets/codechef_certificate.jpg'
import ECE from '../assets/ECE 2ND prize_page-0001.jpg'
import Ecm from '../assets/Ecm 2nd prize _page-0001.jpg'
import metacup from '../assets/metacup_page-0001.jpg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const skills = () => {
  return (
    <>
      <div className='container'>
        <h2>ACHIVEMENTS</h2>
        <Carousel responsive={responsive} 
        infinite={true}
        className='skill-slider'>
            <Link to="https://www.codechef.com/certificates/public/500ce69" target='blank'>
            <div className='card'>
              <img src={codechefcertificate}/>
            </div>
            </Link>
            <div className='card'>
              <img src={ECE}/>
            </div>
            <div className='card'>
              <img src={Ecm}/>
            </div>
            <Link to="https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/595080195599953" target='blank'>
            <div className='card'>
              <img src={metacup}/>
            </div>
            </Link>
        </Carousel>
        
      </div>
    </>   
  )
}

export default skills