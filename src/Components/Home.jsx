// import React from 'react'
// import draj from "../assets/draj.jpg"
// import pythone1 from "../assets/img/pythone1.png"
// import pythone2 from "../assets/img/pythone2.png"
// import jse1 from "../assets/img/jse1.png"
// import networkbasic from "../assets/img/networkbasic.png"
// const Home = () => {
//   return (
//     <>
//   <div className="h-screen md:text-2xl">
//   <div className=" flex justify-between ">
//   <div clssName="">
//    <h1 className="spacing">Full Stack Developer</h1>
//    <ul className="text-xl sm:base my-4 ">
//     <li> Frontend with React.js</li>
//     <li>Backend  Django</li>
//      <li>Database with MySql</li>
//  </ul>

 
//     <h1 className="spacing" >Network Engineer</h1>
//     <ul className="text-xl sm:base my-4  ">
//     <li>Routing !! OSPF, RIP EGIP </li>
//     <li>Switching  !! STP RSTP</li>
//     <li>Access_Control_List</li>
//     <li>Dynamic_Host_Configuration_Protocol</li>
//     <li>NAT,Router_On_Stick,PAT,VPN,Syslog etc..</li>
//     <li></li>
//     </ul>
  
//   </div>
//       <div>
//         <img  src = {draj} alt="imgdraj" className="rounded-full object-cover w-80 shadow-2xl" />
//      </div> 
//     <div>
//       <div>
//          <img src={pythone1} alt="pythone1"  className="w-50"/>
//          <img src={networkbasic} alt="networking" className="w-50"/>
         
//       </div>
     
//     </div>
// </div>

// </div>
  
//     </>
//   )
// }

// export default Home
import React from 'react'
import draj from "../assets/draj.jpg"
import pythone1 from "../assets/img/pythone1.png"
import pythone2 from "../assets/img/pythone2.png"
import jse1 from "../assets/img/jse1.png"
import networkbasic from "../assets/img/networkbasic.png"
const Home = () => {
  return (
    <>
    <div className=" md:text-xl my-20  sm:text-base flex flex-col sm:items-center md:flex-row justify-between"  >
      <div className="order-1 sm:order-2 md:order-1 ">
        <h1 className="md:text-2xl sm:text-xl underline tracking-widest py-4">Full Stack Developer</h1> 
          <ul className=" sm:text-base md:text-md ">
            <li> Frontend_React.js</li>
            <li>Backend_Django</li>
           <li>Database_MySql</li>
          </ul>

 <h1 className="md:text-2xl sm:text-xl my-4 underline tracking-widest" >
  Network Engineer</h1>
     <ul className="sm:text-base md:text-md mb-8">
     <li>Dynamic_Host_Configuration_Protocol</li>
     <li>NAT,Router_On_Stick,PAT,VPN,Syslog</li> 
     <li>Routing !! OSPF, RIP EGIP </li>
     <li>Switching  !! STP RSTP</li>
     <li>Access_Control_List</li>

  
     <li></li>
    </ul>



      </div>
      <div className="order-2 sm:order-1">
         <img  src = {draj} alt="imgdraj" className="rounded-full object-cover w-50 shadow-2xl" />
         <p className="text-center py-3 underline ">Dhiraj Rai</p>
      </div>
      <div className="order-3 md:order-2">
        <p1 className="sm:text-xl md:text-2xl text-center underline m-2">Cisco Academy Verified Badge </p1>
         <div className="flex  shadow-2xl  ">
         
          <div className="">
           
             <img src={pythone1} alt="pythone2"  className="w-40 p-4"/>
          <img src={networkbasic} alt="networking" className="w-40 p-4"/>
          </div>
          <div>
            <img src={pythone2} alt="pythone1"  className="w-40 p-4"/>
          <img src={jse1} alt="javascript" className="w-40 p-4"/>
            </div>
         
         
       </div>
      </div>
    </div>
    <p>Dhiraj Rai</p>
    <hr className="w-full border-blue-800" />
  
    </>
  )
}

export default Home