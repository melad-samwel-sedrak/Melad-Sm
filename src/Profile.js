import React from 'react'
import profile from "./profile.jpg";
const Profile = ({ changeStep }) => {
  return (
    <>
      <h2 className='Profile-p'>الملف الشخصي </h2>

      <div className='Profile-img'>
            <img src={profile} alt='imag'/>
      </div>

      <div className='Profile-conteaner'>

        {/* الداف الاول */}

        <div className='Profile-input'>
          <label htmlFor='firstname'>الاسم الأول </label>
          <input id='firstname' type='text' placeholder='ادخل االاسم الاول'/>

        </div>

        {/* الداف الثانى  */}
          <div className='Profile-input'>
          <label htmlFor='lastname'>اسم العائلة</label>
          <input id='lastname' type='text' placeholder='ادخل اسم العائلة'/>

        </div>

        {/* الداف الثالث */}
          <div className='Profile-input'>
          <label htmlFor='email'>البريد الالكتروني </label>
          <input id='email' type='email' placeholder='ادخل البريد الالكتروني '/>

        </div>
        {/* الداف الرابع */}

        <div className='Profile-input'>
          <label htmlFor='name'>رقم الهاتف </label>
          <input id='name' type='text' placeholder='ادخل رقم الهاتف '/>

        </div>

        {/* الداف الخامس  */}
        <div className='Profile-input'>
          <label htmlFor='date'>تاريخ الميلاد </label>
          <input id='date' type='date'  placeholder='ادخل تاريخ الميلاد '/>

        </div>

        {/* الداف السادس */}
        <div className='Profile-input'>
          <label htmlFor='gendar'>النوع</label>
           <select id='gendar'>
          <option value="">اختر النوع</option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </select>

        </div>



      </div>
         
         
        <button 
            className='Profile-button'
            onClick={() => changeStep(15)}
          >
            تعديل
        </button>
    </>
  )
}

export default Profile
