import styles from "./BookingConfirm.module.css";
import React from 'react'

const BookingConfirm = ({ changeStep }) => {
  return (
    <>
         <h2 className={styles.BookingConfirmp}>تفاصيل الحجز</h2>

         <div class={styles.bookingcard}>

            <div class={styles.row}>
              <span class={styles.label}>الاسم</span>
              <span class={styles.value}>عمر احمد</span>
            </div>

            <div class={styles.row}>
              <span class={styles.label}>رقم الهاتف</span>
              <span class={styles.value}>01000000000</span>
            </div>

            <div class={styles.row}>
              <span class={styles.label}>تاريخ الحجز</span>
              <span class={styles.value}>12/1/2023</span>
            </div>

            <div class={styles.row}>
              <span class={styles.label}>تاريخ المناسبة</span>
              <span class={styles.value}>15/3/2023</span>
            </div>

            <div class={styles.row}>
              <span class={styles.label}>نوع المناسبة</span>
              <span class={styles.value}>افراح</span>
            </div>

            <div class={styles.row}>
              <span class={styles.label}>عدد الحاضرين</span>
              <span class={styles.value}>300</span>
            </div>

            <div class={styles.row}>
              <span class={styles.label}>السعر</span>
              <span class={styles.value}>30,000 ج</span>
            </div>

</div>

          <button 
              className={styles.BookingConfirmbutton}
              onClick={() => changeStep(18)}
            >
              تأكيد الحجز
        </button>

    </>
  )
}

export default BookingConfirm
