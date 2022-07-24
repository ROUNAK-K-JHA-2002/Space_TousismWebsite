import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'


const IconStyle = {
    "font-size" : "2.1em",
    "right" : "0"
}
const NavStyle ={
 "backdrop-filter": "blur(10px)"
}

const Navbar = () => {
  return (
    <>

    {/* NAVBAR FOR SMALL SCREEN */}

    <div class="d-flex flex-column d-md-none" id="side_nav">
       <div onClick={CloseNavbar} className="openNavIcon text-white d-inline-block position-absolute m-1 pr-5" style={IconStyle} ><i class="fa fa-close" aria-hidden="true"></i> </div>
   
        <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks NavActive px-2 pb-4 pt-5 mx-3 mt-5" : "Navlinks px-2 pb-4 pt-5 mx-3 mt-5")} to={'/'}> 00 Home</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3 " : "Navlinks px-2 py-4 mx-3 ")} to={'/destinations'}> 01 Destinations</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3 " : "Navlinks px-2 py-4 mx-3 ")} to={'/crews'}> 02 Crews</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3 " : "Navlinks px-2 py-4 mx-3 ")} to={'/technology'}> 03 Technology</NavLink>
    

    </div>

 <div className="d-block d-md-none">
      <div className="logo mx-3 my-3 d-inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
          <div onClick={OpenNavbar} className="openNavIcon text-white d-inline-block position-absolute m-4 pr-5" style={IconStyle} ><i class="fa fa-bars" aria-hidden="true"></i> </div>
 </div>




{/* NAVBAR FOR LARGE SCREEN */}


      <div className="Navbar d-none d-md-block mt-5" style={NavStyle}>
        <div className="logo mx-5 my-3 d-inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div className="NavlinkContainer my-4 mx-5 pr-3 d-inline-block ">
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/'}> 00 Home</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/destinations'}> 01 Destinations</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/crews'}> 02 Crews</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/technology'}> 03 Technology</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar;


 // SIDE EFFECT IN  SIDENAV

    function OpenNavbar() {
        document.getElementById("side_nav").style.width = "100%"; // MAKE WIDTH 100% WHEN SIDENAV IS NEEDED 
    }

    function CloseNavbar() {
        document.getElementById("side_nav").style.width = "0"; //MAKE WIDTH 0 WHEN SIDENAV IS NOT NEEDED
    }