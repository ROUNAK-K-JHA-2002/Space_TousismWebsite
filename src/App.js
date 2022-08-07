import React from "react";
import { Route , Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import CrewPage from './Components/CrewPage'
import TechPage from './Components/TechPage'
import Navbar from "./Components/Navbar/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MoonComponent from "./Components/InpageDestinations/Moon";
import MarsComponent from "./Components/InpageDestinations/Mars";
import TitanComponent from "./Components/InpageDestinations/Titan";
import EuropaComponent from "../src/Components/InpageDestinations/Europa"



const App  = () =>{
  return<>  
  <Navbar/>
 <Routes>
   <Route  exact path="/"  element={<HomePage/>} />
   
   <Route  exact path="/crews" element={<CrewPage/>}/>
   <Route  exact path="/technology" element={<TechPage/>}/>
   <Route  exact path="/destinations/Moon" element={<MoonComponent/>}/>
   <Route  exact path="/destinations/Europa" element={<EuropaComponent/>}/>
   <Route  exact path="/destinations/Titan" element={<TitanComponent/>}/>
   <Route  exact path="/destinations/Mars" element={<MarsComponent/>}/>
 </Routes>
  </>
}

export default App;