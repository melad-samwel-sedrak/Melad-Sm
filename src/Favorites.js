import React from 'react'
import { useState } from 'react';
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";
import photo3 from "./photo3.jpg";

 
const Favorites = ({ changeStep }) => {

 const [items, setItems] = useState([
  { id: 1, liked: false },
  { id: 2, liked: false },
  { id: 3, liked: false }
]);
const toggleLike = (id) => {
  setItems(items.map(item =>
    item.id === id
      ? { ...item, liked: !item.liked }
      : item
  ));
};

  return (
    <>
        <h2 className='favorites-p'>المفضلة</h2>

        <div className='contener-favorites'>

{/* الداف الاول */}


          <div className='Favorites-1'>
                <img src={photo4} alt='imge'/>

                <div className='Favorites-1-1'>
                    <h4>قاعة الافراح</h4>
                    <p>سوهاج</p>
                    <h6>سعة 500 شخص</h6>

                    <h6>السعر لليوم<span>20,000 ج.م</span></h6>

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





{/* الداف الثانى */}

          <div className='Favorites-1'>
                <img src={photo5} alt='imge'/>

                <div className='Favorites-1-1'>
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


{/* الداف الثالث  */}

          <div className='Favorites-1'>
              <img src={photo3} alt='imge'/>

                <div className='Favorites-1-1'>
                    <h4>قاعة الافراح</h4>
                    <p>سوهاج</p>
                    <h6>سعة 500 شخص</h6>

                    <h6>السعر لليوم<span>20,000 ج.م</span></h6>

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

        </div>
    </>
  )
}

export default Favorites
