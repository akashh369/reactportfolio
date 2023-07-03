import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './skills.css'

import meter1 from '../assets/meter1.svg'
import meter2 from '../assets/meter2.svg'
import meter3 from '../assets/meter3.svg'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const skills = () => {
  return (
    <section className='skill' id='skill'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>SKILLS</h2>
                        
                        <Carousel responsive={responsive} infinite={true} 
                                            
                        className='skill-slider'>
                        <div className='item'>
                            <img src={meter2} alt='image'></img>
                            <h5>ReactJs</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt='image'></img>
                            <h5>Python</h5>
                        </div>
                        <div className='item'>
                            <img src={meter1} alt='image'></img>
                            <h5>C++</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt='image'></img>
                            <h5>Machine Learning</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='image'></img>
                            <h5>ExpressJs</h5>
                        </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default skills