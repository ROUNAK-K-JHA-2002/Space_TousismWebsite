import React from "react";
import '../../index.css'
import { NavLink } from 'react-router-dom'
const style = {
    "border" : "2px solid red",
    "height" : "70vh" ,
    "vertical-align" : "top"
}
function TitanComponent(){
return <> <div className=" mt-5 mx-5 DpageTitle text-white"> 01 PICK YOUR DESTINATION </div>

        <div className=" d-inline-block col-11 col-lg-5 " style={style}></div>
        <div className="  d-inline-block col-11 col-lg-6  " style={style}>
          <div className="PlanetNav">
          
         <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 pb-4 pt-5 mx-3 mt-5" : "Navlinks px-2 pb-4 pt-5 mx-3 mt-5")} to={'/destinations/Moon'}> 00 MOON</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3 " : "Navlinks px-2 py-4 mx-3 ")} to={'/destinations/Europa'}> 01 EUROPA</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3 " : "Navlinks px-2 py-4 mx-3 ")} to={'/destinations/Titan'}> 02 TITAN</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3 " : "Navlinks px-2 py-4 mx-3 ")} to={'/destinations/Mars'}> 03 MARS</NavLink>
          </div>
        </div></>
}

export default TitanComponent;