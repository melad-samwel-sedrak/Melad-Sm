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
      <h2 className='UserDetails-p'>تفاصيل القاعة</h2>

      <div className='contener-UserDetails'>

        <div className='UserDetails-1'>
                <h2 className='UserDetails-1-h2'>قاعة افراح</h2>
                <p  className='userDeatils-1p'> العنوان  : <span>سوهاج</span></p>
                 <p className='userDeatils-1p'>السعة  : <span> 700 فرد</span></p>
                  <p className='userDeatils-1p'>التقييم  : <span>4.5 </span></p>
                  <p className='userDeatils-1p'>السعر في اليوم  : <span> 30,000 ج.م</span></p>

                   <h3 className='userDeatils-h3'>تفاصيل عن القاعة  : </h3>

                            <div className='UserDetails-detals'>
                                <p>قاعة أفراح راقية ومجهزة بالكامل لاستضافة المناسبات
                                    والحفلات، تتميز بتصميم داخلي فاخر ومساحة واسعة      
                                    تستوعب عدد كبير من الضيوف، مع توفير جميع الخدمات اللازمة لضمان تجربة مثالية وذكريات لا تُنسى للعروسين </p>
                            </div>
                  </div>
{/* الداف الثانى  */}


        <div className='UserDetails-2'>

            <Swiper
              modules={[Pagination,Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
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
      <button className='UserDetails-button'  
       onClick={() => changeStep(10)}>
        
                           احجز الان
          </button>
    </>
  )
}

export default UserDetails
