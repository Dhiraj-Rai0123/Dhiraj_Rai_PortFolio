// import React, { useState } from "react";
// import img1 from "../assets/img/pythone1.png";
// import img2 from "../assets/img/jse1.png";
// import img3 from "../assets/img/pythone2.png";
// import img4 from "../assets/img/networkbasic.png";

// const images = [
//   {
//     id: 1,
//     src: img1,
//     title: "Python Essential",
//   },
//   {
//     id: 2,
//     src: img2,
//     title: "JavaScript 1",
//   },
//   {
//     id: 3,
//     src: img3,
//     title: "Python Essential 2",
//   },
//   {
//     id: 4,
//     src: img4,
//     title: "Networking Basics",
//   },
// ];

// const AboutMe = () => {
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">

//       {/* Main Image */}
//       <div className="mb-8 text-center">
//         <img
//           src={selectedImage.src}
//           alt={selectedImage.title}
//           className="w-96 h-72 object-cover rounded-xl shadow-lg"
//         />

//         <h1 className="text-3xl font-bold mt-4">
//           {selectedImage.title}
//         </h1>
//       </div>

//       {/* Thumbnail Images */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="text-center"
//           >
//             <img
//               src={image.src}
//               alt={image.title}
//               onClick={() => setSelectedImage(image)}
//               className={`w-40 h-28 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
//                 selectedImage.id === image.id
//                   ? "border-4 border-red-500"
//                   : "border-2 border-green-300"
//               }`}
//             />

//             <p className="mt-2 font-medium">
//               {image.title}
//             </p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default AboutMe;
import React from 'react'
import { useState } from 'react'
import img1 from "../assets/img/networkbasic.png"
import img2 from "../assets/img/labuche.jpg"
import img3 from "../assets/img/man4.jpg"
import img4 from "../assets/img/larke.jpg"
import img5 from "../assets/img/skillshikxxaa.jpg"
import img6 from "../assets/img/renjo.jpg"

const images = [
  {
    id:1,
    src : img1,
    title: "Networking Basic ",
  },
    {
    id:2,
    src : img2,
    title: "Labuche East 6116m",
  },
    
   
    {
    id:4,
    src : img5,
    title: "Frontend Tranning ",
  },
    {
    id:5,
    src : img6,
    title: "On Renjola 5367m ",
  },
  
]

const AboutMe = () => {
  const [selectedImg, setSelectedImg]=useState(images[0])

  return (
  <>
  <h3 className="text-center bg-gray-100  sm:text-xl md:text-3xl underline py-4">About Me</h3>
<div className="flex flex-col md:flex-row bg-gray-100   ">
      <div className="w-full mb-5">
              <div className=" w-4/5   object-cover m-auto pt-8 shadow-2xl rounded-xl">
                 <img 
                      src={selectedImg.src}
                      alt= {selectedImg.title}
                      className="rounded-2xl shadow-2xl"
                      /> 
               </div>
        <p className="text-center md:text-2xl sm:text-xl py-13 underline">{selectedImg.title}</p>

     {/* Starting  div of thumbnails.... */}
     <div className="grid grid-cols-4 md:grid-cols-4">
      {
        images.map((image)=>(
          <div key = {image.id}>
            <img 
            src= {image.src}
            alt={image.title}
            onClick = {()=> setSelectedImg(image)}
            className={
              `w-30 h-30 shadow-xl gap-2 object-cover rounded-lg cursor-pointer 
              transition-all duration-300 hover:scale-110
              ${selectedImg.id === image.id 
              ? "border-4 border-gray-500"
              : "border-2 border-blue-300"
              }`} />
            <p className="py-4">{image.title}</p>
            </div>

        ))}
      
     </div>
     {/*  Ending div of Thumbnails... */}
      </div>
  
      <div>
        
      </div>
       <div className=" w-full p ">
        <h3 className="underline sm:text-2xl md:text-xl   py-4">AboutMe</h3>
        <h1 className="md:text-xl sm:text-lg">I'AM DHIRAJ RAI, </h1>
            <p>Bachelor Running In Cyber Security And Network Engineering. </p>
            <div className="bg-white text-justify">
              <h2 className="sm:text-xl md:text-2xl py-4"> Full_Stack_Developer</h2>
              <p className="md:text-xl sm:text-base">As a Full Stack Developer, I create modern and responsive web applications using React.js for the front end, Python and Django for the back end, and MySQL for efficient database management. I am passionate about solving real-world problems through clean, scalable, and high-performance web solutions.</p>
            </div>
               <h2 className="sm:text-xl md:text-2xl py-4"> Network_Administrator</h2>
               <p className="md:text-xl sm:text-base text-justify">I specialize in designing and managing computer networks using Cisco technologies. My experience includes routing, switching, OSPF, VLANs, ACLs, DHCP, and network troubleshooting to ensure secure and efficient communication across network infrastructures.</p>
            <div className="bg-white text-justify">

           
            <h2 className="sm:text-xl md:text-2xl py-4">Trekking_Guide</h2>
           <p className="md:text-xl sm:text-base mb-4">As a trekking guide in Nepal's Khumbu Region, I help trekkers explore the breathtaking landscapes of the Everest area while ensuring their safety, comfort, and enjoyment throughout the journey. I assist with route planning, altitude awareness, cultural insights, and responsible trekking practices, providing visitors with an authentic Himalayan experience. My goal is to create memorable adventures by combining local knowledge, leadership, and a commitment to safe and enjoyable mountain travel.</p>
         </div>
       
        </div>

</div>
  </>
  )
}

export default AboutMe