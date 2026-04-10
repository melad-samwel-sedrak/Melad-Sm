import React from 'react'

const BookingConfirm = ({ changeStep }) => {
  return (
    <>
         <h2 className='BookingConfirm-p'>تفاصيل الحجز</h2>

         <div class="booking-card">

            <div class="row">
              <span class="label">الاسم</span>
              <span class="value">عمر احمد</span>
            </div>

            <div class="row">
              <span class="label">رقم الهاتف</span>
              <span class="value">01000000000</span>
            </div>

            <div class="row">
              <span class="label">تاريخ الحجز</span>
              <span class="value">12/1/2023</span>
            </div>

            <div class="row">
              <span class="label">تاريخ المناسبة</span>
              <span class="value">15/3/2023</span>
            </div>

            <div class="row">
              <span class="label">نوع المناسبة</span>
              <span class="value">افراح</span>
            </div>

            <div class="row">
              <span class="label">عدد الحاضرين</span>
              <span class="value">300</span>
            </div>

            <div class="row">
              <span class="label">السعر</span>
              <span class="value">30,000 ج</span>
            </div>

</div>

          <button 
              className='BookingConfirm-button'
              onClick={() => changeStep(18)}
            >
              تأكيد الحجز
        </button>

    </>
  )
}

export default BookingConfirm
