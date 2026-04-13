import styles from "./Bookingss.module.css";
import React from 'react'
import photo5 from "./photo5.jpg";
import { useState } from 'react';
// تبع التاريخ 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import { ar } from "date-fns/locale";

registerLocale("ar", ar);


const Bookingss = ({ changeStep }) => {

// تبع الا  القلب 
  const [items, setItems] = useState([
    { id: 1, liked: false },
    { id: 2, liked: false },
    { id: 3, liked: false },
    { id: 4, liked: false }
  ]);
  const toggleLike = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, liked: !item.liked }
        : item
    ));
  };
  

 const [date, setDate] = useState(new Date());

  return (
    <>
       <h2 className={styles.Bookingssp}>القاعات المتاحة</h2>

       <div className={styles.Bookingsscontenar}> 

            <div className={styles.Bookingss1}>

{/* الداف الاول */}

              <div className={styles.Bookingss11}>
                              <img src={photo5} alt='imge'/>
              
                              <div className={styles.Bookingss12}>
                                  <h4>قاعة المناسبات</h4>
                                  <p>سوهاج</p>
                                  <h6>سعة 700 شخص</h6>
              
                                  <h6>السعر لليوم<span>30,000 ج.م</span></h6>
              
                                    <button onClick={() => changeStep(9)}>
                                         عرض التفاصيل
                                    </button>
                                    
                              </div>
                               <i
                              className={items[0].liked ? "fa-solid fa-heart heart-icon" : "fa-solid fa-heart heart-icon"}
                              onClick={() => toggleLike(1)}
                              style={{ color: items[0].liked ? "gold" : "gray" }}
                             ></i>
                        </div>


                        {/* الداف الثانى  */}


               <div className={styles.Bookingss11}>
                              <img src={photo5} alt='imge'/>
              
                              <div className={styles.Bookingss12}>
                                  <h4>قاعة المناسبات</h4>
                                  <p>سوهاج</p>
                                  <h6>سعة 700 شخص</h6>
              
                                  <h6>السعر لليوم<span>30,000 ج.م</span></h6>
              
                                    <button onClick={() => changeStep(9)}>
                                         عرض التفاصيل
                                    </button>
                                    
                              </div>
                               <i
                                  className={items[1].liked ? "fa-solid fa-heart heart-icon" : "fa-solid fa-heart heart-icon"}
                                  onClick={() => toggleLike(2)}
                                  style={{ color: items[1].liked ? "gold" : "gray" }}
                              ></i>
                        </div>

                        {/* الداف الثالث */}

                         <div className={styles.Bookingss11}>
                              <img src={photo5} alt='imge'/>
              
                              <div className={styles.Bookingss12}>
                                  <h4>قاعة المناسبات</h4>
                                  <p>سوهاج</p>
                                  <h6>سعة 700 شخص</h6>
              
                                  <h6>السعر لليوم<span>30,000 ج.م</span></h6>
              
                                    <button onClick={() => changeStep(9)}>
                                         عرض التفاصيل
                                    </button>
                                    
                              </div>
                                 <i
                                className={items[2].liked ? "fa-solid fa-heart heart-icon" : "fa-solid fa-heart heart-icon"}
                                onClick={() => toggleLike(3)}
                                style={{ color: items[2].liked ? "gold" : "gray" }}
                          ></i>
                        </div>
        {/* الداف الرابع  */}

         <div className={styles.Bookingss11}>
                              <img src={photo5} alt='imge'/>
              
                              <div className={styles.Bookingss12}>
                                  <h4>قاعة المناسبات</h4>
                                  <p>سوهاج</p>
                                  <h6>سعة 700 شخص</h6>
              
                                  <h6>السعر لليوم<span>30,000 ج.م</span></h6>
              
                                    <button onClick={() => changeStep(9)}>
                                         عرض التفاصيل
                                    </button>
                                    
                              </div>
                               <i
                                  className={items[3].liked ? "fa-solid fa-heart heart-icon" : "fa-solid fa-heart heart-icon"}
                                  onClick={() => toggleLike(4)}
                                  style={{ color: items[3].liked ? "gold" : "gray" }}
                                ></i>
                        </div>

            </div>






            {/* الداف الثانى  */}

            <div className={styles.Bookingss2}>
              <h2 className={styles.Bookingss2p}>الحجوزات المتاحة</h2>

              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                locale="ar"
                inline
                />

            </div>
      </div>
    </>
  )
}

export default Bookingss
