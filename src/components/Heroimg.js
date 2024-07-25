import "./HeroimgStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import {motion} from "framer-motion"

import IntroImg from "../assets/intro-bg.jpg"


const Heroimg = () => {
    return (
            <div className="hero">
                <div className="mask">
                    <img className="intro-img" src={IntroImg} alt="IntroImg" />
                </div>
                <div className="content">
                    <p><span className="z-3">Hi <span className="home-hand">👋</span></span>,<span className="z-2"><span className="name-container"> I'm Akashh Bhandari 👨‍💻</span></span></p>
                    <motion.div 
                    initial={{filter: "blur(15px)"}} 
                    animate = {{
                        filter: "blur(0px)",
                        transition:{
                            duration : 3,
                            ease : "easeOut"
                            // filter : "blur(0px)"
                        }
                    }}>
                        <h1>I'm a FullStack Developer </h1>
                    </motion.div>
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