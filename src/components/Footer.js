import "./FooterStyles.css"

import React from 'react'
import{FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veniam labore 
                non dolor eaque explicabo aliquid esse, modi accusamus quisquam fugiat
                 ipsa facere laborum expedita dolore est accusantium cupiditate repellendus.
                 lorem</p>
                 <div className="social">
                    <FaFacebook
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/>

                    <FaLinkedin
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/>

                    <FaTwitter
                    size={30}
                    style={{color:"#fff",marginRight:"1rem"}}/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Footer