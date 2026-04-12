import styles from "./Settings.module.css";
import React from 'react'
 
const Settings = ({ changeStep }) => {
  return (
    <>
      <h2 className={styles.Settingsp}>الاعدادات</h2>

      <div className={styles.Settingscontener}>

{/* الداف الاول */}
       <div className={styles.item} onClick={() => changeStep(11)}>

  <div className={styles.left}>
     <i className={`fa-solid fa-angle-left ${styles.arrow}`}></i>
  </div>

  <div className={styles.right}>
    <i className="fa-regular fa-user"></i>
    <span className={styles.text}>تعديل الملف الشخصي</span>
  </div>

</div>
    


    {/* الداف الثانى  */}

<div className={styles.item} onClick={() => changeStep(12)}>

  <div className={styles.left}>
    <i className={`fa-solid fa-angle-left ${styles.arrow}`}></i>
  </div>

  <div className={styles.right}>
    <i className="fa-regular fa-credit-card"></i>
    <span className={styles.text}>الدفع</span>
  </div>

</div>


    {/* الداف الثالث  */}

     <div className={styles.item} onClick={() => changeStep(13)}>

  <div className={styles.left}>
    <i className={`fa-solid fa-angle-left ${styles.arrow}`}></i>
  </div>

  <div className={styles.right}>
    <i className="fa-solid fa-globe"></i>
    <span className={styles.text}>اللغة</span>
  </div>

</div>

    {/* الداف الرابع  */}


     <div className={styles.item} onClick={() => changeStep(14)}>

  <div className={styles.left}>
    <i className={`fa-solid fa-angle-left ${styles.arrow}`}></i>
  </div>

  <div className={styles.right}>
    <i className="fa-regular fa-bell"></i>
    <span className={styles.text}>الاشعارات</span>
  </div>

</div>


      </div>
    </>
  )
}

export default Settings
