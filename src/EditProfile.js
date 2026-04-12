import styles from "./EditProfile.module.css";
import React from 'react'
import profile from "./profile.jpg";
const EditProfile = ({ changeStep }) => {
  return (
    <>
       <h2 className={styles.EditProfilep}>تعديل الملف الشخصي  </h2>
       
             <div className={styles.EditProfileimg}>
                   <img src={profile} alt='imag'/>
             </div>
       
             <div className={styles.EditProfileconteaner}>
       
               {/* الداف الاول */}
       
               <div className={styles.EditProfileinputEditProfile}>
                 <label htmlFor='firstname'>الاسم الأول </label>
                 <input id='firstname' type='text' />
       
               </div>
       
               {/* الداف الثانى  */}
                 <div className={styles.EditProfileinputEditProfile}>
                 <label htmlFor='lastname'>اسم العائلة</label>
                 <input id='lastname' type='text'  />
       
               </div>
       
               {/* الداف الثالث */}
                 <div className={styles.EditProfileinputEditProfile}>
                 <label htmlFor='email'>البريد الالكتروني </label>
                 <input id='email' type='email' />
       
               </div>
               {/* الداف الرابع */}
       
               <div className={styles.EditProfileinputEditProfile}>
                 <label htmlFor='name'>رقم الهاتف </label>
                 <input id='name' type='text'  />
       
               </div>
       
               {/* الداف الخامس  */}
               <div className={styles.EditProfileinputEditProfile}>
                 <label htmlFor='date'>تاريخ الميلاد </label>
                 <input id='date' type='date' />
       
               </div>
       
               {/* الداف السادس */}
               <div className={styles.EditProfileinputEditProfile}>
                 <label htmlFor='gendar'>النوع</label>
                  <select id='gendar'>
                 <option value="">اختر النوع</option>
                 <option value="male">ذكر</option>
                 <option value="female">أنثى</option>
               </select>
       
               </div>
       
       
       
             </div>
                
                
               <button 
                  className={styles.EditProfilebuttonEditProfile}
                  onClick={() => changeStep(16)}
                >
                  حفظ
                </button>
    </>
  )
}

export default EditProfile
