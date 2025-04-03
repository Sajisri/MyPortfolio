import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function About() {
    const navigate=useNavigate();
  return (
    <div >
       <div className="about-container">
      {/* About Info */}
      <div className="about-text">
        <h2 className="fade-in">About Me</h2>
        
        <p className="slide-up">
        A Software Professional with around 3.5 years experience in the Software /IT Industry. Driven professionaltransitioning from a technical support role to Frontend Development, Experienced with creating seamless userinterfaces using HTML, CSS, and JavaScript. Utilizes modern frameworks and libraries to enhance functionalityand user experience. Strong understanding of responsive design principles and effective team collaboration. Eager toleverage problem-solving abilities and a passion for web development to contribute to creating innovative andresponsive web applications.
        </p>
      </div>
    </div>
     

  <button className='btn1'onClick={() => navigate("/")}>Previous </button>
  <button className='btn1'onClick={() => navigate("/skill")}>Next </button>
    </div>
  )
}
