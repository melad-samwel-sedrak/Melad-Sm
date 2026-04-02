import React from 'react';
import Register from "./Register";
import Login from "./Login";
import "./Register.css";
import "./qa.css";
import "./add.css";
import "./bookings.css";
import "./halls.css";
import "./hallDetals.css";
import { Routes , Route } from 'react-router-dom';
import Melad from "./melad";
import Add from "./add";
import Halls from "./halls";
import HallDetals from "./hallDetals";
import Bookings from "./bookings";
function App(){

return(
    <div>
        
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Register/>}/>
            <Route path="/melad" element={<Melad/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/halls" element={<Halls/>}/>
            <Route path="/hallDetals" element={<HallDetals/>}/>
            <Route path="/bookings" element={<Bookings/>}/>
          </Routes>
           
    </div>
     
);

}

export default App