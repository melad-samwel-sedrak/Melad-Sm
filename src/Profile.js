import styles from "./Profile.module.css";

import React from 'react'
import profile from "./profile.jpg";

const Profile = ({ changeStep }) => {
  return (
    <>
      <h2 className={styles.Profilep}>الملف الشخصي </h2>

      <div className={styles.Profileimg}>
            <img src={profile} alt='imag'/>
      </div>

      <div className={styles.Profileconteaner}>

        {/* الداف الاول */}

        <div className={styles.Profileinput}>
          <label htmlFor='firstname'>الاسم الأول </label>
          <input id='firstname' type='text' placeholder='ادخل االاسم الاول'/>

        </div>

        {/* الداف الثانى  */}
          <div className={styles.Profileinput}>
          <label htmlFor='lastname'>اسم العائلة</label>
          <input id='lastname' type='text' placeholder='ادخل اسم العائلة'/>

        </div>

        {/* الداف الثالث */}
          <div className={styles.Profileinput}>
          <label htmlFor='email'>البريد الالكتروني </label>
          <input id='email' type='email' placeholder='ادخل البريد الالكتروني '/>

        </div>
        {/* الداف الرابع */}

        <div className={styles.Profileinput}>
          <label htmlFor='name'>رقم الهاتف </label>
          <input id='name' type='text' placeholder='ادخل رقم الهاتف '/>

        </div>

        {/* الداف الخامس  */}
        <div className={styles.Profileinput}>
          <label htmlFor='date'>تاريخ الميلاد </label>
          <input id='date' type='date'  placeholder='ادخل تاريخ الميلاد '/>

        </div>

        {/* الداف السادس */}
        <div className={styles.Profileinput}>
          <label htmlFor='gendar'>النوع</label>
           <select id='gendar'>
          <option value="">اختر النوع</option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </select>

        </div>



      </div>
         
         
        <button 
            className={styles.Profilebutton}
            onClick={() => changeStep(15)}
          >
            تعديل
        </button>
    </>
  )
}

export default Profile
