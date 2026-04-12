import styles from "./UserDetails.module.css";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import photo from "./photo.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import "swiper/css";
import "swiper/css/pagination";

 
const UserDetails = ({ changeStep }) => {
  return (
    <>
      <h2 className={styles.UserDetailsp}>تفاصيل القاعة</h2>

      <div className={styles.contenerUserDetails}>

        <div className={styles.UserDetails1}>
                <h2 className={styles.UserDetails1h2}>قاعة افراح</h2>
                <p  className={styles.userDeatils1p}> العنوان  : <span>سوهاج</span></p>
                 <p className={styles.userDeatils1p}>السعة  : <span> 700 فرد</span></p>
                  <p className={styles.userDeatils1p}>التقييم  : <span>4.5 </span></p>
                  <p className={styles.userDeatils1p}>السعر في اليوم  : <span> 30,000 ج.م</span></p>

                   <h3 className={styles.userDeatilsh3}>تفاصيل عن القاعة  : </h3>

                            <div className={styles.UserDetailsdetals}>
                                <p>قاعة أفراح راقية ومجهزة بالكامل لاستضافة المناسبات
                                    والحفلات، تتميز بتصميم داخلي فاخر ومساحة واسعة      
                                    تستوعب عدد كبير من الضيوف، مع توفير جميع الخدمات اللازمة لضمان تجربة مثالية وذكريات لا تُنسى للعروسين </p>
                            </div>
                  </div>
{/* الداف الثانى  */}


        <div className={styles.UserDetails2}>

            <Swiper
              modules={[Pagination,Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              className={styles.swiper}
              // دا بيخليها تتحرك وحديها لو عايز 
              
              // autoplay={{delay:2000,disableOnInteraction:false}} 
            >
              
              <SwiperSlide>
                <img src={photo} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={photo2} alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={photo3} alt="" />
              </SwiperSlide>
            </Swiper>

          </div>


          {/* الزرار */}

           

      </div>
      <button className={styles.UserDetailsbutton}  
       onClick={() => changeStep(10)}>
        
                           احجز الان
          </button>
    </>
  )
}

export default UserDetails
