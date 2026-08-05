import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.jpg"
import { CiMenuFries } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [open, setOpen]=useState(false)
  const toggleMenu=()=>{
    setOpen(!open)
  }
  const closeMenu = ()=>{
    setOpen(false)
  }
  return (
  <>
<div className = "w-full bg-grey-400 py-4 shadow-lg mt-0  m-auto">

<div className=" flex justify-between  ">
 <h2 className=" ml-3">
<img  src = {logo} alt="Logo" className=" sm:w-15 md:w-25"/>
 <p className="sm:text-xs md:text-lg">Developer</p>
 </h2>
 <div className=" flex justify-between text-bold sm:text-sm md:text-xl gap-4 mr-5 mt-4  ">
    <div className=" flex gap-3 sm:hidden md:flex">
<NavLink
  to="/" className={({ isActive }) =>
    `${isActive ? "active" : ""} hover:underline`
  }>
    Home
</NavLink>
    <NavLink to="/aboutme" className={({ isActive }) => 
      `${isActive ? "active" : ""} hover:underline`}>
        About Me
</NavLink>
    <NavLink to="/projects" className={({ isActive }) => 
      `${isActive ? "active" : ""} hover:underline `}>
        Projects
      </NavLink>
    <NavLink to="/contact" className={({ isActive }) =>
       ` ${isActive ? "active" : ""} hover:underline `}>
    Contact</NavLink>
    <NavLink to="/skills" className={({ isActive }) =>
       `${isActive ? "active" : ""} hover:underline `}>
    Skills</NavLink>
 
 


  </div>
  <div>
  <MdOutlineDarkMode className="size-7 hover:pointer hover:text-blue-500"/>

  </div>
  <div className="md:hidden" onClick={toggleMenu}>
{
  open ? <RxCross2 className="hover:pointer hover:text-blue-500 size-7" /> :
 <CiMenuFries className="hover:pointer hover:text-blue-500 size-7" />
}

   
    </div>
  
 </div>

</div> 
</div> {
  open &&(
    <div className=" w-4/5 m-auto">

   
    <div className="flex  w-65/100 flex-col  bg-gray-100 justify-center md:hidden items-center gap-5 py-5 fixed z-40">
      <NavLink to='/' onClick={closeMenu} className="hover:text-blue-300">Home</NavLink>
      <NavLink to='/aboutme' onClick = {closeMenu} className="hover:text-blue-300">About Me</NavLink>
      <NavLink to='/projects' onClick={closeMenu} className="hover:text-blue-300">Projects</NavLink>
      <NavLink to='/contact' onClick = {closeMenu} className="hover:text-blue-300">Contact</NavLink>
      <NavLink to='/skills' onClick = {closeMenu} className="hover:text-blue-300">Skills</NavLink>
    </div> 
    </div>
  )
}
  </>
  )
}

export default Navbar
{/* <NavLink to="/" className={({isActive})=> isActive ? "active": " "}>Home </NavLink>
<NavLink to="/contacts">Contact</NavLink> */}