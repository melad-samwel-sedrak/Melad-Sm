import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Bookingss from "./Bookingss";
import Favorites from "./Favorites";
import Settings from "./Settings";
import Weddings from "./weddings";
import Conferences from "./Conferences";
import Occasions from "./Occasions";
import Birthdays from "./birthdays";
import UserDetails from "./UserDetails";
import BookNow from "./BookNow"; 
import Profile from "./Profile";
import Payment from "./Payment";
import Language from "./Language";
import Notifications from "./Notifications";
import EditProfile from "./EditProfile";
import SaveSuccess from "./SaveSuccess";
import BookingConfirm from "./BookingConfirm";
import BookingSaved from "./BookingSaved";


import logo from "./logo.svg";
import profile from "./profile.jpg";

const Home = () => {
  const [step, setStep] = useState(1);

  // ✅ تغيير step مع تسجيله في history
//  const changeStep = (newStep) => {
//   setStep(newStep);
//   // تسجيل الحالة الجديدة في تاريخ المتصفح
//   window.history.pushState({ step: newStep }, "");
// };

const changeStep = (newStep) => {
                
  setStep(newStep);

     
  if (newStep === 4 && [11, 12, 13, 14].includes(step)) {
    window.history.replaceState({ step: newStep }, "");
  } else {
                     
    window.history.pushState({ step: newStep }, "");
  }
};
  

  useEffect(() => {
     
  window.history.replaceState(
    { step: 1, backTo: 1 },
    ""
  );

 const handleBack = (event) => {
  const state = event.state;

  if (!state) {
    setStep(1);
    return;
  }

   

   if (state.step !== undefined) {
    setStep(state.step);
    return;
  }
  setStep(1);
};

  window.addEventListener("popstate", handleBack);

  return () => window.removeEventListener("popstate", handleBack);
}, []);


  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo-home">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-links">
          <div className="profile">
            <img src={profile} alt="user" />
          </div>

          <NavLink
            className={`link ${(step === 1 || step === 5 || step === 6 || step === 9 || 
              step === 10 || step === 7 || step === 17||step === 18) ? "active-step" : ""}`}
              onClick={() => changeStep(1)}
            >
              الرئيسية
            </NavLink>

          <NavLink
            className={`link ${step === 2 ? "active-step" : ""}`}
            onClick={() => changeStep(2)}
          >
            حجوزات
          </NavLink>

          <NavLink
            className={`link ${step === 3 ? "active-step" : ""}`}
            onClick={() => changeStep(3)}
          >
            المفضلة
          </NavLink>

           

           
            <NavLink
              className={`link ${[4, 11, 12, 13, 14,15,16].includes(step) ? "active-step" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                
                if ([11, 12, 13, 14,15,16].includes(step)) {
                  changeStep(4); 
                } else {
                          
                  changeStep(4);
                }
              }}
            >
              الاعدادات
            </NavLink>

        </div>
      </div>

      <div className="page-content">

        {/* HOME */}

        {step === 1 && (
          <div className="home">
            <h2>ابحث عن قاعتك واحجز الان !</h2>

            

            <div className="input-container">
                  <i
                    className="fa fa-search"
                    onClick={() => document.querySelector("input").focus()}
                  ></i>
               <input type="text" placeholder="ابحث" />
          </div>

            <h3>تصفح الفئات</h3>

            <div className="home-contener">
              <div className="page">
                <div className="link" onClick={() => changeStep(5)}>
                  الافراح
                </div>
              </div>

              <div className="page">
                <div className="link" onClick={() => changeStep(6)}>
                  المؤتمرات
                </div>
              </div>

              <div className="page">
                <div className="link" onClick={() => changeStep(7)}>
                  المناسبات
                </div>
              </div>

              <div className="page">
                <div className="link" onClick={() => changeStep(8)}>
                  أعياد الميلاد
                </div>

                
                
              </div>
            </div>
          </div>
        )}

        {/* CATEGORIES */}
        {/* {step === 5 && <Weddings />} */}
        {step === 5 && <Weddings changeStep={changeStep} />}
        {/* {step === 6 && <Conferences />} */}
        {step === 6 && <Conferences changeStep={changeStep}/>}
        {/* {step === 7 && <Occasions />} */}
        {step === 7 && <Occasions changeStep={changeStep} />}
        {/* {step === 8 && <Birthdays />} */}
        {step === 8 && <Birthdays changeStep={changeStep} />}

{/* الصفحات الجانبية  */}

        {step === 9 && <UserDetails changeStep={changeStep} />}

        {/* {step === 10 && < BookNow />} */}
        {step === 10 && <BookNow changeStep={changeStep} />}

        {step === 11 && <Profile changeStep={changeStep} />}
        {step === 12 && <Payment changeStep={changeStep} />}
        {step === 13 && <Language changeStep={changeStep} />}
        {step === 14 && <Notifications changeStep={changeStep} />}

        {step === 15 && <EditProfile changeStep={changeStep} />}
         {step === 16 && <SaveSuccess  changeStep={changeStep} />}

          {step === 17 && < BookingConfirm   changeStep={changeStep} />}
         {step === 18 && < BookingSaved  changeStep={changeStep} />}


        {/* NAV PAGES */}
        {/* {step === 2 && <Bookingss />} */}
        {step === 2 && <Bookingss changeStep={changeStep} />}
        {/* {step === 3 && <Favorites />} */}
        {step === 3 && <Favorites changeStep={changeStep} />}
        {/* {step === 4 && <Settings />} */}
        {step === 4 && <Settings changeStep={changeStep} />}

        
      </div>
    </>
  );
};

export default Home;