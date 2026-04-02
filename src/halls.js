/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useRef } from 'react';
import photo from "./photo.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import { Link } from 'react-router-dom';
const halls = () => {

const [search , setSearch]=useState("");
const inputRef=useRef(null);

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,تبع الكود بتاع select

const [status, setStatus] = useState("جميع الحالات");
const [open, setOpen] = useState(false);
// oooooooooooooooooooooooooooooooooooo

  return (
    <>
       <div className='pp-p'>
            <p>لوحة التحكم <span>←</span>قاعاتى</p>
            <h3>قاعاتى</h3>
            <p>إدارة جميع القاعات الخاصة بك</p>
       </div>

       <div className='cearch-2'>
          
            <div className='search-box-2'>
                <i className='fa fa-search' onClick={()=>inputRef.current.focus()} ></i>
                
                <input 
                ref={inputRef}
                type='text'
                placeholder="ابحث عن قاعة..."
                value={search}
                onChange={(e)=> setSearch(e.target.value)}/>
            </div>

 

{/* iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii */}

                <div className='all-2'>
                    <div className="custom-select">
    
                         <div className="selected" onClick={() => setOpen(!open)}>
                        {status}
                       </div>

                       {open && (
                  <div className="options">
                <div onClick={() => {setStatus("جميع الحالات"); setOpen(false);}}>جميع الحالات</div>
                <div onClick={() => {setStatus("موافق عليها"); setOpen(false);}}>موافق عليها</div>
                <div onClick={() => {setStatus("قيد المراجعة"); setOpen(false);}}>قيد المراجعة</div>
                <div onClick={() => {setStatus("مرفوضة"); setOpen(false);}}>مرفوضة</div>
              </div>
               )}

            </div>
          </div>

  {/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo*/}

        </div>

        <div className='ka'> 
          <div className='ka-1'>
                <div className='kaka-1'>
                  <p>موافق عليها</p>
                   <span>2</span>

                </div>

                <div className='ka-icon-1'>
                    <i className='fa-solid fa-building'></i>
                </div>
          </div>

          <div className='ka-2'>

            <div className='kaka-2'>
                  <p>قيد المراجعة</p>
                   <span>1</span>

                </div>

                <div className='ka-icon-2'>
                    <i className='fa-solid fa-building'></i>
                </div>

          </div>


          <div className='ka-3'>
                 <div className='kaka-3'>
                  <p>مرفوضة</p>
                   <span>1</span>

                </div>

                <div className='ka-icon-3'>
                    <i className='fa-solid fa-building'></i>
                </div>
          </div>

        </div>

        <div className='class'>

{/* الداف الاول  */}

              <div className='class-1'>

                <div className='ph'> 
                    <img src={photo2} alt='img'/>

                    <span className='badg-right'>موافق عليها</span>
                    <span className='badg-left'>مؤتمر</span>

                  </div>

                  <h2>قاعة المؤتمرات الدولية</h2>

                  <p><span><i className='fa-solid fa-location-dot'></i></span>القاهرة</p>
                   <p><span><i className='fa-solid fa-user'></i></span>سعة 250 شخص</p>
                   <p><span><i className='fa-regular fa-calendar'></i></span>تم الإضافة: 2025-12-11</p>


                   <hr></hr>

                   <div className='price'>
                          <div className='price-1'>
                                <p>السعر لليوم</p>
                                <h4>10,000.ج.م</h4>
                          </div>

                           <Link to="/hallDetals"> 
                          <button className='bott'
                             
                            >عرض التفاصيل</button>
                            </Link>
                           
                   </div>

              </div>



{/* الداف الثانى  */}
              <div className='class-2'>

                <div className='ph'> 
                    <img src={photo2} alt='img'/>

                    <span className='badg-right'>موافق عليها</span>
                    <span className='badg-left'>مؤتمر</span>

                  </div>

                  <h2>قاعة المؤتمرات الدولية</h2>

                  <p><span><i className='fa-solid fa-location-dot'></i></span>القاهرة</p>
                   <p><span><i className='fa-solid fa-user'></i></span>سعة 250 شخص</p>
                   <p><span><i className='fa-regular fa-calendar'></i></span>تم الإضافة: 2025-12-11</p>


                   <hr></hr>

                   <div className='price'>
                          <div className='price-1'>
                                <p>السعر لليوم</p>
                                <h4>10,000.ج.م</h4>
                          </div>

                           <Link to="/hallDetals"> 
                          <button className='bott'
                             
                            >عرض التفاصيل</button>
                            </Link>
                   </div>

              </div>




{/* الداف الثالث  */}

              <div className='class-3'>
                    <div className='ph'> 
                    <img src={photo} alt='img'/>

                    <span className='badg-right-2'>قيد المراجعة</span>
                    <span className='badg-left'>مؤتمر</span>

                  </div>

                  <h2>قاعة الافراح اكبرى</h2>

                  <p><span><i className='fa-solid fa-location-dot'></i></span>القاهرة</p>
                   <p><span><i className='fa-solid fa-user'></i></span>سعة 500 شخص</p>
                   <p><span><i className='fa-regular fa-calendar'></i></span>تم الإضافة: 2025-12-11</p>


                   <hr></hr>

                   <div className='price'>
                          <div className='price-1'>
                                <p>السعر لليوم</p>
                                <h4>20,000.ج.م</h4>
                          </div>

                          <Link to="/hallDetals"> 
                          <button className='bott'
                             
                            >عرض التفاصيل</button>
                            </Link>
                   </div>
              </div>



{/* الداف الرابع  */}

              <div className='class-4'>
                    <div className='ph'> 
                    <img src={photo3} alt='img'/>

                    <span className='badg-right-3'>مرفوضة</span>
                    <span className='badg-left'>مؤتمر</span>

                  </div>

                  <h2>قاعة المناسبات</h2>

                  <p><span><i className='fa-solid fa-location-dot'></i></span>القاهرة</p>
                   <p><span><i className='fa-solid fa-user'></i></span>سعة 700 شخص</p>
                   <p><span><i className='fa-regular fa-calendar'></i></span>تم الإضافة: 2025-12-11</p>


                   <hr></hr>

                   <div className='price'>
                          <div className='price-1'>
                                <p>السعر لليوم</p>
                                <h4>30,000.ج.م</h4>
                          </div>

                           <Link to="/hallDetals"> 
                          <button className='bott'
                             
                            >عرض التفاصيل</button>
                            </Link>
                   </div>
              </div>




        </div>
    </>
  )
}

export default halls
