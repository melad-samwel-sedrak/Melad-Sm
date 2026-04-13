import styles from "./bookings.module.css";
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
     <div className={styles.head}>
      <h2>إدارة الحجوزات</h2>
      <p>إدارة و تتبع جميع حجوزات القاعات</p>
     </div>



     <div className={styles.fa1}>

        <div className={styles.fa11}>

          <div className={styles.ca1}>
              <h3>إجمالى الحجوزات</h3>
              <span className={styles.span1}>4</span>
          </div>

          <div className={styles.ca1}>
              <h3>قيد الانتظار</h3>
              <span className={styles.span2}>1</span>
          </div>

          <div className={styles.ca1}>
                <h3>مؤكد</h3>
                <span className={styles.span3}>2</span>
          </div>

          <div className={styles.ca1}>
              <h3>ملغية</h3>
              <span className={styles.span4}>1</span>
          </div>
        </div>



        <div className={styles.cearch}>
          
            <div className={styles.searchbox}>
                <i className='fa fa-search' onClick={()=>inputRef.current.focus()} ></i>
                
                <input 
                ref={inputRef}
                type='text'
                placeholder="ابحث عن قاعة او عميل..."
                value={search}
                onChange={(e)=> setSearch(e.target.value)}/>
            </div>


            {/* iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii */}

                <div className={styles.all}>
                    <div className={styles.customselect}>
    
                         <div className={styles.selected} onClick={() => setOpen(!open)}>
                        {status}
                       </div>

                       {open && (
                  <div className={styles.options}>
                <div onClick={() => {setStatus("جميع الحالات"); setOpen(false);}}>جميع الحالات</div>
                <div onClick={() => {setStatus("مؤكد"); setOpen(false);}}>مؤكد</div>
                <div onClick={() => {setStatus(" قيد الانتظار"); setOpen(false);}}>قيد الانتظار</div>
                <div onClick={() => {setStatus("ملغية"); setOpen(false);}}>ملغية</div>
              </div>
               )}

            </div>
          </div>

  {/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo*/}

        </div>


     </div>



{/* الكردالاول */}

     <div className={styles.fa2}>
      <div className={styles.ma}> 
          <p>قاعة الأفراح الكبرى</p>
          <span className={styles.faspan1}>زفاف</span>
          <span className={styles.faspan2}>مؤكد</span>
        </div>

          <div className={styles.fa2card}>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>

          <div className={styles.contenerpragraf}> 
          <div className={styles.pragraf}> 
            <p ><span>ج.م</span>10,000</p>
          </div>
          </div>
     </div>


 {/*الجزء الثانى  */}

     <div className={styles.fa2}>
      <div className={styles.ma}> 
          <p>قاعة الأفراح الكبرى</p>
          <span className={styles.faspan1}>زفاف</span>
          <span className={styles.faspan2}>مؤكد</span>
        </div>

          <div className={styles.fa2card}>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>

          <div className={styles.contenerpragraf}> 
          <div className={styles.pragraf}> 
            <p ><span>ج.م</span>10,000</p>
          </div>
          </div>
     </div>


{/* الجزء الثالث  */}

     <div className={styles.fa2}>
      <div className={styles.ma}> 
          <p> قاعة المؤتمرات الكبرى</p>
          <span className={styles.faspan1}>زفاف</span>
          <span className={styles.faspan3}>قيد الأنتظار</span>
        </div>

          <div className={styles.fa2card}>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>


        <div className={styles.contenerpragraf}> 
        <div className={styles.pragraf}> 
            <p ><span>ج.م</span>10,000</p>
        </div>
        </div>
     </div>


 {/* الجزء الرابع */}

     <div className={styles.fa2}>
      <div className={styles.ma}> 
          <p> قاعة المناسبات</p>
          <span className={styles.faspan1}>زفاف</span>
          <span className={styles.faspan4}>ملغى</span>
        </div>

          <div className={styles.fa2card}>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-user"> </i>
              <p>أحمد محمد أحمد</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-solid fa-phone"> </i>
              <p>01000000000</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-calendar-days"> </i>
              <p>2025-12-10</p>
            </div>

            <div className={styles.fa2card1}> 
              <i class="fa-regular fa-clock"> </i>
              <p>9:00.17:00</p>
            </div>

          </div>

          <div className={styles.contenerpragraf}> 
          <div className={styles.pragraf}> 
            <p ><span>ج.م</span>10,000</p>
          </div>
          </div>


          
     </div>
    </> 
  )
}

export default bookings
