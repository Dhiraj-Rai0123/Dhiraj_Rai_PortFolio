import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {Swiper, SwiperSlide }  from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import img1 from '../assets/img/reactjs.webp'
import img2 from '../assets/img/html.jpg'
import img3 from '../assets/img/js.png'
import img4 from '../assets/img/tailwindcss.webp'
import img5 from '../assets/img/pythone1.png'
import img6 from '../assets/img/django.webp'
import img7 from '../assets/img/networkbasic.png'
import img8 from '../assets/img/packettracer.png' 
import img9 from '../assets/img/packettracer.png'
import img10 from '../assets/img/cisco.jpg'

const Projects = () => {
  const navigate = useNavigate();
  return (
   <>
   <div>
    <Swiper
     pagination={{clickable :true}} 
     modules={[Pagination]}
    breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }} >
        <SwiperSlide>
            <div className=" h-150 w-full ">
            <h1 className="md : text-2xl sm:xl font-bold text-center py-5">Frontend Development</h1> 
              <div className="relative h-100 ">
                <img
              className='absolute top-2/5 skew-10 left-1/2 transfor -translate-x-1/2 -translate-y-1/2  w-40 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img1}
               alt= "react.js"/> 
                <img
              className=' absolute  rotate-60 top-3/5 left-4/5 transfor -translate-x-1/2 -translate-y-1/2  w-40 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img3}
               alt= "js"/> 
                <img
              className='absolute top-4/5 left-3/10 transfor -translate-x-1/2 -translate-y-1/2 w-40 skew-5 rotate-10 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img2}
               alt= "html.js"/> 
                <img
              className=' absolute -rotate-10 top-60 left-45/100 w-30 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img4}
               alt= "tailwindcss.js"/> 
               
               <div>
            <p className="px-2"> I create a modern responsive and interactive user interfaces using React.js and style with  Tailwind CSS.</p>
            <button 
            onClick = {() => navigate ("frontend")}
            className="  hover:scale-110 hover:cursor-pointer absolute top-100 left-45/100 bg-blue-500 text-white p-2 rounded-lg ">
              Show Projects

            </button>
          </div>

              </div>
             
             
          
           </div>
          
         </SwiperSlide>

        <SwiperSlide>
        <div className="h-150 w-full ">
               <h1 className="md : text-2xl sm:xl font-bold text-center py-5">Backend Development</h1>   
               <div className="relative  h-100 ">

                <img
                className=" transform-translate duration-500 hover:scale-110 w-40 h-40 absolute top-40/100 left-1/10"
                src = {img5}
                alt="pythen2"
                
                />
                <img
                className=" hover:scale-110 duration-500 absolute left-4/10 top-6/10 w-40"
                src = {img6}
                alt="django"
                />
               
               <div>
            <p className="px-2 text-justify "> Developing secure and scalable backend applications using Python and Django. Experienced in building REST APIs, database integration, authentication, CRUD operations, and connecting backend services with modern frontend applications.</p>
            <button 
            onClick = {() => navigate ("backend")}
            className="  hover:scale-110 hover:cursor-pointer absolute top-100 left-45/100 bg-blue-500 text-white p-2 rounded-lg ">
              Show Projects

            </button>
          </div>

                </div>
             
        </div>
      </SwiperSlide>

  
        <SwiperSlide>
        <div className=" h-150 w-full ">
               <h1 className="md : text-2xl sm:xl font-bold text-center underline py-5">CCNA Projects</h1>   
               <div className="relative h-100  ">
                <img
                src={img7}
                alt="vpn"
                className=" shadow-lg  hover:scale-110 duration-500 w-30 h-30 absolute top-45/100 left-10 "
                
                />
                <img 
                src={img8}
                alt="Cisco packet tracer"
                className="w-30 h-20 rounded-lg shadow-xl absolute top-1/2 left-4/10"
                />
              
                <img 
                src={img10}
                alt="netowking"
                className="absolute top-4/5"
            
                /> 
               
               <div>
            <p className="px-2 text-justify"> 
              
             Hands-on networking projects focused on Cisco networking, routing, switching, and network security. Designed and configured network topologies using VLANs, inter-VLAN routing, DHCP, STP/RSTP, OSPF, ACLs, NAT/PAT, and Router-on-a-Stick. These projects helped develop practical skills in network configuration, troubleshooting, IP addressing, and secure communication between different networks.
              </p>
            <button 
            onClick = {() => navigate ("networking")}
            className="  hover:scale-110 hover:cursor-pointer absolute top-100 left-45/100 bg-blue-500 text-white p-2 rounded-lg ">
              Show Projects

            </button>
          </div>

                </div>
          
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-150 w-full ">
            <h1 className="md : text-2xl sm:xl font-bold text-center py-5">Trekking </h1>   
          
          </div>
        </SwiperSlide>
    </Swiper>
 

 
 
  </div>
  
  <Outlet />
   </>
  )
}

export default Projects
