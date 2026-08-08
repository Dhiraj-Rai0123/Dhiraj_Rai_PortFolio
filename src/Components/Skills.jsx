import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Skills = () => {
  return (
<>
<div className="border h-40">
<Swiper
 className={`border h-40  m-auto w-4/5 ${'next_pre'}` }
 navigation
 pagination = {{clickable :true}}
 modules={[Navigation, Pagination]}
 centeredSlides = {false}
breakpoints={
   {
      640:{
         slidesPerView :1,
         spaceBetween:20,
      },
      1024:{
         slidesPerView : 3
      }
   }
}

>

    <SwiperSlide className="h-10 border ">
        <div className="px-2 bg-green-200 w-1/2 ">
            <h2>Dhiraj Rai</h2>
       </div>
    </SwiperSlide>
     <SwiperSlide className="h-10 border">
        <div className="px-2  bg-green-200 w-1/2 ">
            <h2>Aniksha Kulung</h2>
       </div>
    </SwiperSlide>

     <SwiperSlide className="h-10 border">
        <div className="px-2  bg-green-200 w-1/2 ">
            <h2>Drishti Kulung</h2>
       </div>
    </SwiperSlide>
    <SwiperSlide className="h-10 border">
        <div className="px-2  bg-green-200 w-1/2 ">
            <h2>Drishti Kulung</h2>
       </div>
    </SwiperSlide>
  
</Swiper>
</div>
</>
  )
}

export default Skills