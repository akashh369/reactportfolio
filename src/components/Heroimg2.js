import "./Heroimg2Styles.css"

import React from 'react'

import resume from '../assets/resume.pdf'

const Heroimg2 = (props) => {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p style={{margin:"0 0 15px 0"}}>{props.text}</p>
            
        </div>
    </div>
  )
}

export default Heroimg2