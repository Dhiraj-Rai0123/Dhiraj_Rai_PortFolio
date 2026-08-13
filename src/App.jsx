import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Frontend from './Components/Frontend'
import Backend from './Components/Backend'
import Networking from './Components/Networking'
import Trekking from './Components/Trekking'
import './App.css'
const App = () => {
  const [darkMode, setDarkMode]=useState(false)
  const togleDark = ()=>{
    setDarkMode(!darkMode)
  }
  return (
    //   react.fragment allow multiline jsx
  <>
  <div className="w-4/5 m-auto">
 <Navbar 
  darkMode={darkMode}
  togleDark={togleDark} />
  <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path = "/aboutme" element= {<AboutMe />}/>
    <Route path="skills" element={<Skills />}/>
    <Route path="/projects" element={<Projects />}>
     {/*nested route of projects start */}
        <Route path="frontend" element={<Frontend />} />
        <Route path="backend" element={<Backend/>} />
        <Route path="networking" element={<Networking />} />
        <Route path="trekking" element={<Trekking />} />
        
    
      </Route>
     {/* nested route of projects end */}
  </Routes>
  </div>
  <Footer />
   </div>
   </>
  )
}


export default App