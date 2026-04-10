import React from 'react'
 
const Settings = ({ changeStep }) => {
  return (
    <>
      <h2 className='Settings-p'>الاعدادات</h2>

      <div className='Settings-contener'>

{/* الداف الاول */}
       <div className="item" onClick={() => changeStep(11)}>

  <div className="left">
    <i className="fa-solid fa-angle-left arrow"></i>
  </div>

  <div className="right">
    <i className="fa-regular fa-user"></i>
    <span className="text">تعديل الملف الشخصي</span>
  </div>

</div>
    


    {/* الداف الثانى  */}

<div className="item" onClick={() => changeStep(12)}>

  <div className="left">
    <i className="fa-solid fa-angle-left arrow"></i>
  </div>

  <div className="right">
    <i className="fa-regular fa-credit-card"></i>
    <span className="text">الدفع</span>
  </div>

</div>


    {/* الداف الثالث  */}

     <div className="item" onClick={() => changeStep(13)}>

  <div className="left">
    <i className="fa-solid fa-angle-left arrow"></i>
  </div>

  <div className="right">
    <i className="fa-solid fa-globe"></i>
    <span className="text">اللغة</span>
  </div>

</div>

    {/* الداف الرابع  */}


     <div className="item" onClick={() => changeStep(14)}>

  <div className="left">
    <i className="fa-solid fa-angle-left arrow"></i>
  </div>

  <div className="right">
    <i className="fa-regular fa-bell"></i>
    <span className="text">الاشعارات</span>
  </div>

</div>


      </div>
    </>
  )
}

export default Settings
