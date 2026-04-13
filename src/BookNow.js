import styles from "./BookNow.module.css";
import React from 'react'

const BookNow = ({ changeStep }) => {
  return (
    <>
       <h2 className={styles.BookNowp}>تفاصيل القاعة</h2>


       <div className={styles.BookNowconteaner}>

        {/* الداف الاول */}

        <div className={styles.BookNowinputBookNow}>
          <label htmlFor='firstname'>الاسم الأول </label>
          <input id='firstname' type='text' placeholder='ادخل االاسم الاول'/>

        </div>

        {/* الداف الثانى  */}
          <div className={styles.BookNowinputBookNow}>
          <label htmlFor='lastname'>اسم العائلة</label>
          <input id='lastname' type='text' placeholder='ادخل اسم العائلة'/>

        </div>

        {/* الداف الثالث */}
          <div className={styles.BookNowinputBookNow}>
          <label htmlFor='date'>تاريخ المناسبة </label>
          <input id='date' type='date' placeholder='اختر التاريخ'/>

        </div>
        {/* الداف الرابع */}

        <div className={styles.BookNowinputBookNow}>
          <label htmlFor='name'>رقم الهاتف </label>
          <input id='name' type='text' placeholder='ادخل رقم الهاتف '/>

        </div>

        {/* الداف الخامس  */}
        <div className={styles.BookNowinputBookNow}>
          <label htmlFor='nambur'>عدد الحاضرين</label>
          <input id='nambur' type='text'  placeholder='عدد الحاضرين'/>

        </div>

        {/* الداف السادس */}
        <div className={styles.BookNowinputBookNow}>
          <label htmlFor='gendar'>نوع المناسبة </label>
           <select id='gendar'>
          <option value="">اختر نوع المناسبة </option>
          <option > الافراح</option>
          <option >المؤتمرات</option>
          <option >المناسبات</option>
          <option >أعياد الميلاد</option>
        </select>

        </div>



      </div>
         
         
        <button 
            className={styles.BookNowbuttonBookNow}
            onClick={() => changeStep(17)}
          >
            احجز الان
</button>
    </>
  )
}

export default BookNow
