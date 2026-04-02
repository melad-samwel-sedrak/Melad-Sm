/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useState, useRef } from 'react';


const bookings = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search , setSearch]=useState("");
  const inputRef=useRef(null);


  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,تبع الكود بتاع select
  
  const [status, setStatus] = useState("جميع الحالات");
  const [open, setOpen] = useState(false);
  // oooooooooooooooooooooooooooooooooooo
  
  return (
    <>
     <div className='head'>
      <h2>إدارة الحجوزات</h2>
      <p>إدارة و تتبع جميع حجوزات القاعات</p>
     </div>



     <div className="fa_1">

        <div className='fa_1-1'>

          <div className='ca-1'>
              <h3>إجمالى الحجوزات</h3>
              <span className='span-1'>4</span>
          </div>

          <div className='ca-1'>
              <h3>قيد الانتظار</h3>
              <span className='span-2'>1</span>
          </div>

          <div className='ca-1'>
                <h3>مؤكد</h3>
                <span className='span-3'>2</span>
          </div>

          <div className='ca-1'>
              <h3>ملغية</h3>
              <span className='span-4'>1</span>
          </div>
        </div>



        <div className='cearch'>
          
            <div className='search-box'>
                <i className='fa fa-search' onClick={()=>inputRef.current.focus()} ></i>
                
                <input 
                ref={inputRef}
                type='text'
                placeholder="ابحث عن قاعة او عميل..."
                value={search}
                onChange={(e)=> setSearch(e.target.value)}/>
            </div>


            {/* iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii */}

                <div className='all'>
                    <div className="custom-select">
    
                         <div className="selected" onClick={() => setOpen(!open)}>
                        {status}
                       </div>

                       {open && (
                  <div className="options">
                <div onClick={() => {setStatus("جميع الحالات"); setOpen(false);}}>جميع الحالات</div>
                <div onClick={() => {setStatus("موافق عليها"); setOpen(false);}}>مؤكد</div>
                <div onClick={() => {setStatus("قيد المراجعة"); setOpen(false);}}>قيد الأنتظار </div>
                <div onClick={() => {setStatus("مرفوضة"); setOpen(false);}}>ملغى</div>
              </div>
               )}

            </div>
          </div>

  {/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo*/}

        </div>


     </div>



{/* الكردالاول */}

     <div className='fa_2'>
      <div className='ma'> 
          <p>قاعة الأفراح الكبرى</p>
          <span className='faspan-1'>زفاف</span>
          <span className='faspan-2'>مؤكد</span>
        </div>

          <div className='fa_2-card'>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>

          <div className='contener-pragraf'> 
          <div className='pragraf'> 
            <p ><span>ج.م</span>10,000</p>
          </div>
          </div>
     </div>


 {/*الجزء الثانى  */}

     <div className='fa_2'>
      <div className='ma'> 
          <p>قاعة الأفراح الكبرى</p>
          <span className='faspan-1'>زفاف</span>
          <span className='faspan-2'>مؤكد</span>
        </div>

          <div className='fa_2-card'>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>

          <div className='contener-pragraf'> 
          <div className='pragraf'> 
            <p ><span>ج.م</span>10,000</p>
          </div>
          </div>
     </div>


{/* الجزء الثالث  */}

     <div className='fa_2'>
      <div className='ma'> 
          <p> قاعة المؤتمرات الكبرى</p>
          <span className='faspan-1'>زفاف</span>
          <span className='faspan-3'>قيد الأنتظار</span>
        </div>

          <div className='fa_2-card'>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>


        <div className='contener-pragraf'> 
        <div className='pragraf'> 
            <p ><span>ج.م</span>10,000</p>
        </div>
        </div>
     </div>


 {/* الجزء الرابع */}

     <div className='fa_2'>
      <div className='ma'> 
          <p> قاعة المناسبات</p>
          <span className='faspan-1'>زفاف</span>
          <span className='faspan-4'>ملغى</span>
        </div>

          <div className='fa_2-card'>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className='fa_2-card-1'> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>

          <div className='contener-pragraf'> 
          <div className='pragraf'> 
            <p ><span>ج.م</span>10,000</p>
          </div>
          </div>


          
     </div>
    </> 
  )
}

export default bookings
