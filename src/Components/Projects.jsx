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
          <div className="border h-150 w-full ">
            <h1 className="md : text-2xl sm:xl font-bold text-center py-5">Frontend Development</h1> 
              <div className="relative ">
                <img
              className=' absolute top-10 left-1/2  skew-10 w-40 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img1}
               alt= "react.js"/> 
                <img
              className=' absolute top-40 left-60/100   w-40 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img3}
               alt= "js"/> 
                <img
              className=' absolute top-30 left-2/5 w-30 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img2}
               alt= "html.js"/> 
                <img
              className=' absolute -rotate-10 top-50 left-45/100 w-30 rounded-lg shadow-xl skew- hover:scale-110 transition-gransform duration-300'
               src = {img4}
               alt= "tailwindcss.js"/> 
               
               <div>
            <p className="px-2"> I create a modern responsive and interactive user interfaces using React.js and style with  Tailwind CSS.</p>
            <button 
            onClick = {() => navigate ("frontend")}
            className=" absolute top-100 left-45/100 bg-blue-500 text-white p-2 rounded-lg ">
              Show Projects

            </button>
          </div>

              </div>
             
             
          
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
           <div className="border h-150 w-full ">
            <h1 className="md : text-2xl sm:xl font-bold text-center py-5">Backend Development</h1>   
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border h-150 w-full ">
            <h1 className="md : text-2xl sm:xl font-bold text-center py-5">CCNA Projects</h1>   
          
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
