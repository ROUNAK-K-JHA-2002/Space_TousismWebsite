import React from "react";
import { Route , Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import CrewPage from './Components/CrewPage'
import TechPage from './Components/TechPage'
import DestinationPage from './Components/DestinationPage'
import Navbar from "./Components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App  = () =>{
  return<>  
  <Navbar/>
 <Routes>
   <Route  exact path="/"  element={<HomePage/>} />
   <Route  exact path="/destinations" element={<DestinationPage/>}/>
   <Route  exact path="/crews" element={<CrewPage/>}/>
   <Route  exact path="/technology" element={<TechPage/>}/>
 </Routes>
  </>
}

export default App;