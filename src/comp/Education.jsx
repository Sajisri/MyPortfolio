import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'


export default function Education() {
  const navigate=useNavigate();
  const EdData=[
    {school: "SASTRA Deemed to be University",
      degree: "Bachelor’s in Electronics and Computer Science",
      CGPA:"6.99",
      year: "2018 - 2021",
    },
    {school: "Town Higher Secondary School",
      degree: "HSC",
     CGPA:"78.5%",
      year: "2017 - 2018",
    },
    {school: "Sri.Saraswathi Padasala Girls'Higher Secondary School",
      degree: "HSC",
      CGPA:"94.6%",
      year: "2017 - 2018",
    }
  ]

  
  return (
    <div>
       <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}>
       <div className='category1'>
   <h2>Education</h2>
   <div className='skills'>
      {EdData.map((edu,index)=>(
         <div key={index} className='skill1'>{edu.degree}
         <p>{edu.school}</p>
         <p>{edu.CGPA}</p>
         <p>{edu.year}</p>
         </div>
      ))}
       </div>
        </div>
      </motion.div>
     
    
     <div>
     <button className='btn1'onClick={() => navigate("/prjexp")}>Previous </button>
    
     <button className='btn1'onClick={() => navigate("/awd")}>Next </button>
     </div>

    </div>
    
  )
}
