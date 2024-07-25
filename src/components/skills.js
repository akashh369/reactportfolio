import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './skills.css'

/*
Plan:
-----------------------------------------------
                Things I Know
   ---------------          -----------------
    Card with drag            Card with drag
    to change also            to change also
    auto change                auto change
    --------------          -----------------
    Coding                      Development 

    .....{and other cards}

-----------------------------------------------
 */
const skills = () => {
  return (
    <div></div>
    // <section className='skill' id='skill'>
    //     <Container>
    //         <Row>
    //             <Col>
    //                 <div className='skill-bx'>
    //                     <h2>SKILLS</h2>
                        
    //                     <Carousel responsive={responsive} infinite={true} 
                                            
    //                     className='skill-slider'>
    //                     <div className='item'>
    //                         <img src={meter2} alt='image'></img>
    //                         <h5>ReactJs</h5>
    //                     </div>
    //                     <div className='item'>
    //                         <img src={meter3} alt='image'></img>
    //                         <h5>Python</h5>
    //                     </div>
    //                     <div className='item'>
    //                         <img src={meter1} alt='image'></img>
    //                         <h5>C++</h5>
    //                     </div>
    //                     <div className='item'>
    //                         <img src={meter3} alt='image'></img>
    //                         <h5>Machine Learning</h5>
    //                     </div>
    //                     <div className='item'>
    //                         <img src={meter2} alt='image'></img>
    //                         <h5>ExpressJs</h5>
    //                     </div>
    //                     </Carousel>
    //                 </div>
    //             </Col>
    //         </Row>
    //     </Container>
    // </section>
  )
}

export default skills