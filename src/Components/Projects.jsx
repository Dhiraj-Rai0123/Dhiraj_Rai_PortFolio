import React from 'react'
import img1 from '../assets/img/5thsem.jpeg'
import img2 from '../assets/img/tori.jpeg'
import img3 from '../assets/img/man4.jpg'
const Projects = () => {
  return (
   <>
   <div className="w-full  h-150">
     <div className="relative  flex gap-2 border h-100 ">
     <div className=" -rotate-30 z-60 w-30 hover:z-[80] h-20 border absolute top-1/2  left-3/10 ">
     <img 
     src={img1}
     className="w-full h-full object-cover"
     />
     </div>
     <div className="w-30 h-30 z-70
      border absolute top-3/5 left-35/100">
     <img 
     src={img2}
     className="w-full h-full object-cover"
     />
     
     </div>
     <div className=" z-20 hover:z-[80] w-30 h-30 rotate-20 border absolute top-1/2 left left-43/100">
     <img 
     src={img3}
     className="w-full h-full object-cover "
     />
     </div>
     </div>
   </div>
   </>
  )
}

export default Projects