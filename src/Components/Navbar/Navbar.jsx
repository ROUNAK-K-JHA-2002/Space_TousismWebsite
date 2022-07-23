import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
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
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-4" : "Navlinks px-2 py-4 mx-4")} to={'/'}> 00 Home</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-4" : "Navlinks px-2 py-4 mx-4")} to={'/destinations'}> 01 Destinations</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-4" : "Navlinks px-2 py-4 mx-4")} to={'/crews'}> 02 Crews</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-4" : "Navlinks px-2 py-4 mx-4")} to={'/technology'}> 03 Technology</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
