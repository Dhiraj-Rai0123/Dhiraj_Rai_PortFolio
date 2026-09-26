import React from 'react'
import img1 from '../assets/img/skills.png'
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { TbBrandDjango } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import img2 from '../assets/img/networkbasic.png'
import { FaSquareGithub } from "react-icons/fa6";
const Skills = () => {
  return (
    <>
    <div className="flex justify-center">
        <img
    
          src={img1}
          alt="Skills"
          className="w-full md:w-1/2 h-50"
        />
    <img 
    src={img1}
    className="hidden md:flex  w-1/2 h-50"
    />
    <hr/>
  
      </div>
<h3 className="text-center py-4 text-md md:text-xl underline tracking-[5px]">Skills Matter </h3>
<hr className="my-2"/>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className=" rounded-xl shadow-xl h-60 bg-gradient-to-r from-blue-0 via-purple-00 to-pink-00">
          <h3 className="text-center text-md md:text-xl underline pt-4 pb-3 ">Frontend</h3>
    <div className="flex justify-evenly">

   
          <ul className=" ">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li className='flex'>Vuejs</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            
     </ul>
         <div className="flex flex-col gap-3 ">

   <AiOutlineHtml5 />   <FaJsSquare  /><RiReactjsFill  />
<FaVuejs />

<SiTailwindcss /><FaBootstrap/>


   </div> </div>



        </div>
         <div className=" rounded-xl shadow-xl h-60 bg-gradient-to-r from-blue-0 via-purple-00 to-pink-0">
          <h3 className="text-center text-md md:text-xl underline pt-4 pb-3 ">Backend</h3>
    <div className="flex justify-evenly">

   
          <ul className=" ">
           <li>Python</li>
           <li>Django</li>
           <li>Node.js</li>
           <li>Express</li>
            
     </ul>
         <div className="flex flex-col gap-3 ">

<IoLogoPython className="text-xl"/> <TbBrandDjango className="text-xl"/>
<IoLogoNodejs className="text-xl" /><SiExpress className="text-xl"/>


   </div> </div>



        </div>
        <div className=" rounded-xl shadow-xl px-5 h-60">
          <h3 className="text-center pb-2 underline text-md md:text-xl">Database</h3>
            <ul className="grid grid-cols-2 gap-3">
              <li>PostgreSQL <span><BiLogoPostgresql className="size-10"/></span></li>
              <li>MongoDB <SiMongodb className="size-10"/> </li>
              <li>MySQL <SiMysql className="size-10"/></li>
            </ul>
          </div>
        <div className="shadow-xl rounded-xl h-auto">
          <h3 className="text-md md:text-xl text-center pb-2 underline ">Networking</h3>
          <ul className="grid grid-cols-2 ml-3">
            <li>OSI Model</li>
            <li>Networking Fundamentals</li>
            <li>IP Addressing</li>
            <li>Routing</li>
            <li>Switching</li>
            <li>Network Services</li>
            <li>Network Security</li>
            <li>Network Trobleshooting</li>
            <li>Networks Tools</li>
            <li>Wireless Networking</li>


          </ul>
          
          
        </div>
        <div className="shadow-xl  rounded-xl h-60">
          <h3 className="text-center underline text-md md:text-xl pb-2">Tools</h3>
         <ul className="grid grid-cols-2 ">
          <li>GitHub</li><FaSquareGithub />
          <li>GigHub Actions</li><SiGithubactions />
          <li>PuTTy</li>
          <li>Packet Tracer</li>
          
         </ul>
        </div>
      </div>
    </>
  )
}

export default Skills