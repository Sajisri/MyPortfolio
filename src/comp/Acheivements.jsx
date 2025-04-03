import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Acheivements() {
  const navigate=useNavigate();
 const Achei=[
  {id:1,title:'Insta Award from Infosys based on the best Performance'},
  {id:1,title:'Infosys Certified junior network admin Professional'},
  {id:1,title:'Infosys Certified Basic EUC Administartor'},
  {id:1,title:'Certified AWS-DGL-SAP on AWS'},
  {id:1,title:'Career edge certificate-TCS iON'},
  {id:1,title:'Secured 1st prize in state level Tamil oratorical competition'},
  {id:1,title:'Secured 2nd prize in state level Yoga competition'},
  
  {id:1,title:'Secured prize as runner in district carrom competition'},
  
 ];

  return (
    <div>
       <motion.div
                initial={{opacity:2,y:-50}}
                animate={{opacity:2,y:0}}
                transition={{duration:1}}
                >

      <div className='ache-container'>
        <h1 className='sec'>Certification and Awards</h1>
        <div className='ache-list'>
       {Achei.map((ach)=>(
          <div className='ache-item' key={ach.id}>
            <h2>{ach.title}</h2>
            </div>
       ))} 

        </div>

      </div>

      {/*<div className='home'>Certification and Awards</div>
      <div className='awd'>
        <p>Received Insta Award from Infosys based on the best Performance</p>
        <p>Infosys Certified junior netwrok admin Professional</p>
        <p>Infosys Certified Basic EUC Administartor</p>
        <p>Certified AWS-DGL-SAP on AWS</p>
        <p>Career edge certificate-TCS iON</p>
        <p>Secured 1st prize in state level Tamil oratorical competition.</p>
        <p>Secured 2nd prize in state level Yoga competition.</p>
        <p>Secured 1st prize in state level athletic competition.</p>
        <p>Secured prize as runner in district carrom competition.</p>
        </div>
        </motion.div>
         <div>*/}
       
          </motion.div>
          <div>

        <button className='btn1'onClick={() => navigate("/")}>Home </button>
        </div>
    </div>
   
  )
}
