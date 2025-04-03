import React from "react";
import { FaLinkedin,FaEnvelope,FaMapMarkerAlt,FaPhone} from "react-icons/fa";

import {useNavigate} from 'react-router-dom'
import { Typewriter } from "react-simple-typewriter";





export default function About() {
    const navigate=useNavigate()
    return(
   <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>
          Hey, I'm <span className="highlight">Sajisri</span>
        </h1>

        {/* Typing Effect */}
        <h2 className="typing-text">
          <Typewriter
            words={["Frontend Developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* Call-to-Action Buttons */}
        <div className='icon'>
              <a href='https://www.linkedin.com/in/sajisri-kumar-003181248/'rel='sajisri_Linkedin'>
               <FaLinkedin size={24} color="blue"/>
               </a>
               
              <a href="https://mail.google.com/mail/u/0/#inbox" rel='mail'>
              <FaEnvelope size={24} color="red"/>
             </a>

              <p> <FaMapMarkerAlt/> Address:TamilNadu,India</p>
              <p><FaPhone /> Phone: +91 9894999881</p>
            </div>

            <button className='btn1'onClick={() => navigate("/about")}>About Me </button>
        
      </div>
    
   
    </div>
    )

}



