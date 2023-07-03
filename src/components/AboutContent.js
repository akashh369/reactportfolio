import "./AboutContentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
import coloursharp from '../assets/color-sharp2.png'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h2>Who Am I?</h2>
            <p>
                Im a react front-end develpoer , I create
                responsice websites as per requirements
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} alt="img" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} alt="img" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent