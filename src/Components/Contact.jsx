import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
   <>
   <div className="border h-150 ">
<div className="border h-50  ">
  <h1 className="text-center sm:text-xl md:text-2xl py-3 underline"> Contact With Me</h1>
  <p className="text-justify  sm:text-base md:text-xl">
    I’m a Full Stack Developer and Network Administrator skilled in building responsive web applications using React.js, Python, Django, and MySQL, while also managing and configuring reliable computer networks. I combine software development and networking expertise to create secure, scalable, and efficient digital solutions.
  </p>
  <div>
    <ul className="flex">

<li>  <FaFacebook /><span>r</span></li>
<li><FaLinkedin /></li> 
  

   </ul>

  </div>

</div>


   </div>

   </>
  )
}

export default Contact