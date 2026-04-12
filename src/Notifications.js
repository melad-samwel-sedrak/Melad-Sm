import styles from "./Notifications.module.css";
import React from 'react'

const Notifications = () => {
  return (
    <>
       <h2 className={styles.Notificationsp}>الاشعارات</h2>

       <div className={styles.Notificationscontener}>
{/* الداف الاول  */}
        <div className={styles.Notifications1}>

          <div className={styles.Notificationsrei}>
            <i className="fa-solid fa-check check-icon"></i>
          </div>

           <div className={styles.Notificationstext}>
                  <h4>تم تاكيد حجز قاعه الافراح ليوم 6 اكتوبر </h4>
                  <p>قبل ساعه</p>
          </div>
          
        </div>

{/* الداف الثانى  */}
        <div className={styles.Notifications2}>
              <div className={styles.Notificationsicon}>
              <i className="fa-regular fa-envelope"></i>
            </div>

              <div className={styles.Notificationstext}>
                  <h4>لديك رساله جديدة</h4>
                  <p>قبل 20 دقيقة</p>
          </div>

        </div>

       </div>
    </>
  )
}

export default Notifications
