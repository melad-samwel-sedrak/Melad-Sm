import React from 'react'

const Notifications = () => {
  return (
    <>
       <h2 className='Notifications-p'>الاشعارات</h2>

       <div className='Notifications-contener'>
{/* الداف الاول  */}
        <div className='Notifications-1'>

          <div className='Notifications-rei'>
            <i className="fa-solid fa-check check-icon"></i>
          </div>

           <div className='Notifications-text'>
                  <h4>تم تاكيد حجز قاعه الافراح ليوم 6 اكتوبر </h4>
                  <p>قبل ساعه</p>
          </div>
          
        </div>

{/* الداف الثانى  */}
        <div className='Notifications-2'>
              <div className='Notifications-icon'>
              <i className="fa-regular fa-envelope"></i>
            </div>

              <div className='Notifications-text'>
                  <h4>لديك رساله جديدة</h4>
                  <p>قبل 20 دقيقة</p>
          </div>

        </div>

       </div>
    </>
  )
}

export default Notifications
