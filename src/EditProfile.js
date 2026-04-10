import React from 'react'
import profile from "./profile.jpg";
const EditProfile = ({ changeStep }) => {
  return (
    <>
       <h2 className='EditProfile-p'>تعديل الملف الشخصي  </h2>
       
             <div className='EditProfile-img'>
                   <img src={profile} alt='imag'/>
             </div>
       
             <div className='EditProfile-conteaner'>
       
               {/* الداف الاول */}
       
               <div className='EditProfile-input-EditProfile'>
                 <label htmlFor='firstname'>الاسم الأول </label>
                 <input id='firstname' type='text' />
       
               </div>
       
               {/* الداف الثانى  */}
                 <div className='EditProfile-input-EditProfile'>
                 <label htmlFor='lastname'>اسم العائلة</label>
                 <input id='lastname' type='text'  />
       
               </div>
       
               {/* الداف الثالث */}
                 <div className='EditProfile-input-EditProfile'>
                 <label htmlFor='email'>البريد الالكتروني </label>
                 <input id='email' type='email' />
       
               </div>
               {/* الداف الرابع */}
       
               <div className='EditProfile-input-EditProfile'>
                 <label htmlFor='name'>رقم الهاتف </label>
                 <input id='name' type='text'  />
       
               </div>
       
               {/* الداف الخامس  */}
               <div className='EditProfile-input-EditProfile'>
                 <label htmlFor='date'>تاريخ الميلاد </label>
                 <input id='date' type='date' />
       
               </div>
       
               {/* الداف السادس */}
               <div className='EditProfile-input-EditProfile'>
                 <label htmlFor='gendar'>النوع</label>
                  <select id='gendar'>
                 <option value="">اختر النوع</option>
                 <option value="male">ذكر</option>
                 <option value="female">أنثى</option>
               </select>
       
               </div>
       
       
       
             </div>
                
                
               <button 
                  className='EditProfile-button-EditProfile'
                  onClick={() => changeStep(16)}
                >
                  حفظ
                </button>
    </>
  )
}

export default EditProfile
