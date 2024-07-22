import "./HeroimgStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import IntroImg from "../assets/intro-bg.jpg"


const Heroimg = () => {
    const { scrollYProgress } = useScroll();
    return (
            <div className="hero">
                <div className="mask">
                    <img className="intro-img" src={IntroImg} alt="IntroImg" />
                </div>
                <div className="content">
                    <p><span className="z-3">Hi <span className="home-hand">👋</span></span>,<span className="z-2"><span className="name-container"> I'm Akashh Bhandari 👨‍💻</span></span></p>
                    <h1>I'm a FullStack Developer </h1>
                    <Link to="/project" className="btn">
                        projects
                    </Link>
                    <Link to="/contact" className="btn light">
                        contact
                    </Link>
                </div>
            </div>
    )
}

export default Heroimg