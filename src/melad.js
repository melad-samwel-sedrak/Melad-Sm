import React from 'react'
import { Link } from 'react-router-dom'

const melad = () => {
  return (
    <>
        <div className='title'> 
            <h2>مرحباً بك،  <span>أحمد</span></h2>
        </div>
        <div className='p'> 
        <p>نظرة سريعة على أداء قاعاتك اليوم</p>
        </div>

        <div className='nav'>
            <Link to="/add" className='active'><span>+</span>إضافة قاعة جديدة</Link>
            <Link to="/halls">عرض جميع القاعات</Link>
            <Link to="/bookings">إدارة الحجوزات</Link>
        </div>
{/* lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll */}
        <div className='contener'>

             <div className='w'>
                <div> 
                    <p>إجمالى القاعات</p>
                    <h2>12</h2>
                    <p><span>+2</span> هذا الشهر</p>
                </div>
                <div className='ic-1'> 
                   <i class="fa-solid fa-building-flag"></i>
                  </div>
             </div>

             <div className='w'>
                <div> 
                  <p>الإيرادات الشهرية</p>
                    <h2 className='h2'>35,000ج.م</h2>
                    <p><span>8%+</span>عن الشهر السابق</p>
                </div>
                <div className='ic-2'> 
                   <i className="fa-solid fa-sack-dollar"></i>
                  </div>
             </div>


             <div className='w'>
                  <div> 
                  <p>الحجوزات النشطة</p>
                    <h2>28</h2>
                    <p><span>8+</span>هذا الاسبوع</p>
                </div>
                <div className='ic-3'> 
                  <i class="fa-solid fa-calendar-days"></i>
                  </div>
             </div>
             
             <div className='w'>

              <div> 
                  <p>العملاء النشطين</p>
                    <h2>156</h2>
                    <p><span>24+</span>عميل جديد</p>
                </div>
                <div className='ic-4'> 
                <i class="fa-solid fa-user-group"></i>
                  </div>

             </div>

        </div>
  {/* [ppppppppppppppppppppppppppppppppppppppppppppppppppppppp] */}

  <div className='h'>
     <div>
      <h3>الحجوزات الأخيرة</h3>
      <p>آخر الحجوزات على قاعاتك</p>
     </div>
  </div>




{/* 00000000000000000000000000000000000000000000000000000000000000000000 */}

  <div className='card-top'>
    <div className='m'>
      <div className='bo'>
          <p>قاعة الافراح الكبرى</p>
          <span>زفاف</span>
      </div>

        <div className='na'>
            <p><i className="fa-regular fa-user"></i>أحمد محمد أحمد</p>
        </div>


        <div className='na'>
            <p><i className="fa-regular fa-calendar"></i>2025-12-10 16:00</p>
        </div>
    </div>



    <div className='o'>
         <span>مؤكد</span>
         <p>5,000ج.م</p>

    </div>

  </div>




  <div className='card-center'>

    <div className='m'>
      <div className='bo'>
          <p>قاعة المؤتمرات</p>
          <span>مؤتمر</span>
      </div>

        <div className='na'>
            <p><i className="fa-regular fa-user"></i>شركة النجاح</p>
        </div>


        <div className='na'>
            <p><i className="fa-regular fa-calendar"></i>2025-12-10 16:00</p>
        </div>
    </div>



    <div className='o'>
         <span className='mm'>قيد الانتظار</span>
         <p>3,000ج.م</p>

    </div>

  </div>





  <div className='card-boutom'>


          <div className='m'>
      <div className='bo'>
          <p>قاعة الافراح الكبرى</p>
          <span>زفاف</span>
      </div>

        <div className='na'>
            <p><i className="fa-regular fa-user"></i>أحمد محمد أحمد</p>
        </div>


        <div className='na'>
            <p><i className="fa-regular fa-calendar"></i>2025-12-10 16:00</p>
        </div>
    </div>



    <div className='o'>
         <span>مؤكد</span>
         <p>5,000ج.م</p>

    </div>

     

  </div>
    </>
  )
}

export default melad
