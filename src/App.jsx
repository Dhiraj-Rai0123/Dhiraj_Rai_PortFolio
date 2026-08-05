import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'
const App = () => {
  return (
    //   react.fragment allow multiline jsx
  <>
  <div className="w-4/5 m-auto">

  
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path = "/aboutme" element= {<AboutMe />}/>
    <Route path="skills" element={<Skills />}/>
    <Route path="/projects" element={<Projects />}/>
  </Routes>
  <Footer />
   </div>
   </>
  )
}


export default App