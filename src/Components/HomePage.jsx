import React from "react";
import '../index.css'



const HomePage = () =>{
    return <>
    <div className="HomePage d-flex flex-column flex-md-row  flex-wrap  justify-content-between ">
      <div className="container p-lg-4 ps-lg-5 px-4 py-4 d-inline-block col-lg-4 col-12 text-white">
        <div className="HP-L1 my-4 mx-lg-5">SO, YOU WANT TO TRAVEL TO </div>
        <div className="HP-L2 my-4 mx-lg-5">SPACE</div>
        <div className="HP-L3 my-4 mx-lg-5">Let's face it: if you want to go to space. you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience</div>
      </div>
      <div className="container d-inline-block col-lg-5 d-flex col-12 align-items-center justify-content-center"> <div className="explore m-5">Explore</div> </div>
      </div>
    </>
}

export default HomePage;