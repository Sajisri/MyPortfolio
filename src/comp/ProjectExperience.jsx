import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function ProjectExperience() {
  const navigate=useNavigate();
  return (
    <div > 
      <motion.div
                initial={{opacity:2,y:-50}}
                animate={{opacity:2,y:0}}
                transition={{duration:1}}
                >
      <div className='home'>Project  Experience</div>
      <h3>Edex</h3>
 <h4>Frontend Developer</h4><span>
  <ul >
<li>Developed the website using ViteReact and React router components.</li>
<li>Responsible for UI and its functionality.</li>
<li>Managed the UI aspect of the application, ensuring a seamless and user-friendly experience. </li>
<li>Assumed responsibilityfor addressing front-end issues, contributing to the overall stability and performance of the website.</li>
</ul>
</span>

<h3>Infosys Limited - (Oct 2021 - Present )</h3>
<h4>Technical Support Engineer-DTE Energy and LRQA </h4>

<div >
<h5>Working as a remote technician (End User Support- L2)</h5>
<ul >
<li>End User support provides an integrated set of tools that helps resolve end user issues.</li> 
<li>Analyzeissues and provide solutions to problems that cannot be resolved by tier 1.Improves the customer support processand practices.</li>
<li>pushing the software through SCCM</li>
<li>Managed the Admin activity in Active Directory.</li>
<li>Worked the ticketing tool ServiceNow.</li>
<li>Remoting tool:Bomgar,Logmein and GTA.</li>
</ul>
    </div>
    </motion.div>
    <button className='btn1'onClick={() => navigate("/skill")}>Previous </button>
    <button className='btn1'onClick={() => navigate("/edu")}>Next </button>
    </div>
  )
}
