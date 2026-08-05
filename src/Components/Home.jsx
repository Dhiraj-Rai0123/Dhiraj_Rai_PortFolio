import React from 'react'

const Home = () => {
  return (
    <>
    <div className="h-screen   md:text-2xl">
<div>
  <h1 className="spacing">Full Stack Developer</h1>
 <ul className="text-xl sm:base my-4 w-1/2 rounded-lg bg-gray-200 shadow-2xl p-4">
  <li> Frontend with React.js</li>
  <li>Backend  Django</li>
  <li>Database with MySql</li>
 </ul>
  <h1 className="spacing" >Network Engineer</h1>
  <ul className="text-xl sm:base my-4 w-1/2 rounded-lg bg-gray-200 shadow-2xl p-4">
    <li>Routing !! OSPF, RIP EGIP </li>
    <li>Switching  !! STP RSTP</li>
    <li>Access_Control_List</li>
    <li>Dynamic_Host_Configuration_Protocol</li>
    <li>NAT,Router_On_Stick,PAT,VPN,Syslog etc..</li>
    <li></li>
  </ul>
</div>

<div>
  img
</div>
    </div>
    </>
  )
}

export default Home