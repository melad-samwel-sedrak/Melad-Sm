
import React, { useState } from 'react'
 
const hallDetals = () => {

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, setSelected] = useState([]);

  const options = [
  { text: "استخدام القاعة لمدة 8 ساعات" },
  { text: "إضاءة متطورة مع إمكانية التحكم" },
  { text: "نظام صوتي احترافي + DJ" },
  { text: "500 مقعد مريح بطاولات فاخرة" },
  { text: "ديكور أساسي للمسرح" },
  {
    text: "بوفيه خفيف",
    sub: "(قهوة + شاي + حلويات)"
  }
];

// الداف الثانى 


 const optionsS = [
  { text: "استخدام القاعة لمدة 6 ساعات" },
  { text: "إضاءة أساسية" },
  { text: "نظام صوتى أساسى" },
  { text: "500 مقعد" },
   
   
];



  const toggleItem = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  }
 


  return (
    <>
       <div className='detals-hallDetals'>

        <div className='detals-p-hallDetals'>
            <h4>خطط القاعة</h4>
            <p>العروض و الباقات المتاحة</p>
        </div>
        
        <div className='detals-button-hallDetals'>
              <button><span>+</span>إضافة باقة</button>
        </div>

      </div>

{/* الداف الاول  */}

      <div className='detals-2-hallDetals'>

          <div className='detals-2-1-hallDetals'>
            <h4>العرض الذهبى</h4>
             <div className='detals2-p-hallDetals'>
              <p>حزمة متميزة تشمل القاعة + الإضاءة المتطورة 
                      + نظام صوتى  احترافى + ديكور +بوفيه خفيف</p>

             </div>
             <h3>20,000ج.م</h3>

             <hr></hr>
 

              <div className="features-hallDetals">
                {options.map((item, index) => (
                  <div
                    key={index}
                    className={`item-hallDetals ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text-hallDetals">
                      {item.text}
                      {item.sub && <span className="small-hallDetals"> {item.sub}</span>}
                    </span>

                    <span className="icon-hallDetals">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>




                 <div className='edat-hallDetals'>
                      <div className='edit-2-hallDetals'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet-hallDetals'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>

          </div>



{/* الداف الثانى  */}

          <div className='detals-2-2-hallDetals'>
                
              <h4>العرض الفضى</h4>
              <div className='detals2-3-hallDetals'>
                <p> حزمة أساسية تشمل القاعة + الإضاءة الأساسية + نظام صوتى + مقاعد للضيوف</p>

              </div>
            
                <h3>10,000ج.م</h3>
              
              <hr></hr>


              <div className="features-hallDetals">
                {optionsS.map((item, index) => (
                  <div
                    key={index}
                    className={`item-hallDetals ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text-hallDetals">
                      {item.text}
                      {item.sub && <span className="small-hallDetals"> {item.sub}</span>}
                    </span>

                    <span className="icon-hallDetals">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>


                  <div className='edat-1-hallDetals'>
                      <div className='edit-2-hallDetals'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet-hallDetals'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>
          </div>



{/* الداف الثالث */}

          <div className='detals-2-3-hallDetals'>

             <h4>العرض الذهبى</h4>
             <div className='detals2-p-hallDetals'>
              <p>حزمة متميزة تشمل القاعة + الإضاءة المتطورة 
                      + نظام صوتى  احترافى + ديكور +بوفيه خفيف</p>

             </div>
             <h3>20,000ج.م</h3>

             <hr></hr>
 

              <div className="features-hallDetals">
                {options.map((item, index) => (
                  <div
                    key={index}
                    className={`item-hallDetals ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text-hallDetals">
                      {item.text}
                      {item.sub && <span className="small-hallDetals"> {item.sub}</span>}
                    </span>

                    <span className="icon-hallDetals">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>




                 <div className='edat-hallDetals'>
                      <div className='edit-2-hallDetals'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet-hallDetals'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>

          </div>


      {/* الداف الرابع */}

          <div className='detals-2-4-hallDetals'>
            <h4>العرض الفضى</h4>
              <div className='detals2-3-hallDetals'>
                <p> حزمة أساسية تشمل القاعة + الإضاءة الأساسية + نظام صوتى + مقاعد للضيوف</p>

              </div>
            
                <h3>10,000ج.م</h3>
              
              <hr></hr>


              <div className="features-hallDetals">
                {optionsS.map((item, index) => (
                  <div
                    key={index}
                    className={`item-hallDetals ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text-hallDetals">
                      {item.text}
                      {item.sub && <span className="small-hallDetals"> {item.sub}</span>}
                    </span>

                    <span className="icon-hallDetals">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>


                  <div className='edat-1-hallDetals'>
                      <div className='edit-2-hallDetals'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet-hallDetals'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>

          </div>



      </div>
    </>
  )
}

export default hallDetals
