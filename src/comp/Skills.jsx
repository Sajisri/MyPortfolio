import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Skill() {
   const navigate=useNavigate();

   const skillset={
      frontend:['HTML','CSS','JavaScript','React'],
      backend:['Java'],
      Database:['SQL'],
      TechnicalTechnology:['System Troubleshootings','Driver updations','MS office and applications troubleshootings','ITSM'],
   }
  return (
    <div >
      
       <motion.div 
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 1 }}> 
      <div className='skillsets'>
         <div className='category'>
            <h2>Frontend Technology</h2>
            <div className='skills'>
               {skillset.frontend.map((sk,index)=>(
                  <div key={index} className='skill'>{sk}
                  </div>
            ))}
</div>
</div>
<div className='category'>
   <h2>Backend Technology</h2>
   <div className='skills'>
      {skillset.backend.map((sk,index)=>(
         <div key={index} className='skill'>{sk}
         </div>
      ))}

   </div>
</div>
<div className='category1'>
   <h2>Database Technology</h2>
   <div className='skills'>
      {skillset.Database.map((sk,index)=>(
         <div key={index} className='skill'>{sk}
         </div>
      ))}
       </div>
</div>
<div className='category'>
   <h2>Technical Technology</h2>
   <div className='skills'>
      {skillset.TechnicalTechnology.map((sk,index)=>(
         <div key={index} className='skill'>{sk}
         </div>

      ))}
   </div>
</div>


      </div>
      </motion.div>
    
     <button className='btn1'onClick={() => navigate("/about")}>Previous </button>
      <button className='btn1'onClick={() => navigate("/prjexp")}>Next </button>
     </div>

    

  )
}
