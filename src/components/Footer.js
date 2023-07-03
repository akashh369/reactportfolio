import "./FooterStyles.css"

import React from 'react'
import{FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaGithub, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <span>
                    <p>Visakhapatnam ,Andhra Pradesh</p>
                    <p>India</p>
                    </span>
                </div>
            
                <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                            5478-6658-5231
                        </h4>
                </div>
                
                <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                            reactojs@gmail.com
                        </h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>
                    Hey people, my name is Akash Bhandari and i am currently pursuing my final year of BTech 
                    in the field of CSE and i love solving puzzles and participate in competative coding practices
                    .You can get in touch with me using the contact section
                 </p>
                 <div className="social">
                    <a href="https://github.com/akashh369" target="blank">

                     <FaGithub
                     size={30}
                     style={{color:"#fff",marginRight:"1rem"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/akash-bhandari-b6680222b/?originalSubdomain=in" target="blank">
                    <FaLinkedin
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/>
                    </a> 

                    <FaInstagram
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer