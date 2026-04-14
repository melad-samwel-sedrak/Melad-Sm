import React from 'react';
import Register from "./Register";
import Login from "./Login";
import "./Register.css";
import "./qa.css";
import "./add.css";
// import "./bookings.css";
import "./halls.css";
import "./hallDetals.css";
// import "./Favorites.css";
import "./home.css";
// import "./Bookingss.css";
// import "./UserDetails.css";
// import "./weddings.css";

// import "./Conferences.css";
// import "./Occasions.css";
// import "./birthdays.css";
// import "./Settings.css";
// import "./Notifications.css";
// import "./Payment.css";
// import "./Language.css";
// import "./Profile.css";
// import "./EditProfile.css";
// import "./SaveSuccess.css";
// import "./BookNow.css";
// import "./BookingConfirm.css";
// import "./BookingSaved.css";


import { Routes , Route } from 'react-router-dom';
import Melad from "./melad";
import Add from "./add";
import Halls from "./halls";
import HallDetals from "./hallDetals";
import Bookings from "./bookings";
import Home from './home';
 
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

          
          <Route path="/home" element={<Home/>}/>
            
          </Routes>
           
    </div>
     
);

}

export default App