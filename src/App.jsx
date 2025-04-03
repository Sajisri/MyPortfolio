import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, RouterProvider,createBrowserRouter } from "react-router-dom";
import{Link} from 'react-router-dom'
import Home from './comp/Home';
import About from './comp/About';
import Skills from './comp/Skills';
import ProjectExperience from './comp/ProjectExperience';
import Education from './comp/Education';
import Acheivements from './comp/Acheivements';


/*const router=createBrowserRouter([{path:'/',element:<Home/>},
{path:'/about',element:<About/>},{path:'/skill',element:<Skill/>},
{path:'/prjexp',element:<ProjectExperience/>},
{path:'/edu',element:<Education/>},{path:'/awards',element:<Acheivements/>}
<RouterProvider router={router}>
background: linear-gradient(to left, #499d49, #43a4ce);

   </RouterProvider>
])*/

function App() {
  return (
    <Router>
    <div className="navbar">
    
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skill">Skills</Link>
      <Link to="/prjexp">ProjectExperience</Link>
      <Link to="/edu">Education</Link>
      <Link to="/awd">Acheivements</Link>
    </div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skills/>} />
      <Route path="/prjexp" element={<ProjectExperience />} />
      <Route path="/edu" element={<Education />} />
      <Route path="/awd" element={<Acheivements/>}/>
     
    </Routes>
  </Router>
  )

}

export default App
