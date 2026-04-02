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
       <div className='detals'>

        <div className='detals-p'>
            <h4>خطط القاعة</h4>
            <p>العروض و الباقات المتاحة</p>
        </div>
        
        <div className='detals-button'>
              <button><span>+</span>إضافة باقة</button>
        </div>

      </div>

{/* الداف الاول  */}

      <div className='detals-2'>

          <div className='detals-2-1'>
            <h4>العرض الذهبى</h4>
             <div className='detals2-p'>
              <p>حزمة متميزة تشمل القاعة + الإضاءة المتطورة 
                      + نظام صوتى  احترافى + ديكور +بوفيه خفيف</p>

             </div>
             <h3>20,000ج.م</h3>

             <hr></hr>
 

              <div className="features">
                {options.map((item, index) => (
                  <div
                    key={index}
                    className={`item ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text">
                      {item.text}
                      {item.sub && <span className="small"> {item.sub}</span>}
                    </span>

                    <span className="icon">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>




                 <div className='edat'>
                      <div className='edit-2'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>

          </div>



{/* الداف الثانى  */}

          <div className='detals-2-2'>
                
              <h4>العرض الفضى</h4>
              <div className='detals2-3'>
                <p> حزمة أساسية تشمل القاعة + الإضاءة الأساسية + نظام صوتى + مقاعد للضيوف</p>

              </div>
            
                <h3>10,000ج.م</h3>
              
              <hr></hr>


              <div className="features">
                {optionsS.map((item, index) => (
                  <div
                    key={index}
                    className={`item ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text">
                      {item.text}
                      {item.sub && <span className="small"> {item.sub}</span>}
                    </span>

                    <span className="icon">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>


                  <div className='edat-1'>
                      <div className='edit-2'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>
          </div>



{/* الداف الثالث */}

          <div className='detals-2-3'>

             <h4>العرض الذهبى</h4>
             <div className='detals2-p'>
              <p>حزمة متميزة تشمل القاعة + الإضاءة المتطورة 
                      + نظام صوتى  احترافى + ديكور +بوفيه خفيف</p>

             </div>
             <h3>20,000ج.م</h3>

             <hr></hr>
 

              <div className="features">
                {options.map((item, index) => (
                  <div
                    key={index}
                    className={`item ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text">
                      {item.text}
                      {item.sub && <span className="small"> {item.sub}</span>}
                    </span>

                    <span className="icon">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>




                 <div className='edat'>
                      <div className='edit-2'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>

          </div>


      {/* الداف الرابع */}

          <div className='detals-2-4'>
            <h4>العرض الفضى</h4>
              <div className='detals2-3'>
                <p> حزمة أساسية تشمل القاعة + الإضاءة الأساسية + نظام صوتى + مقاعد للضيوف</p>

              </div>
            
                <h3>10,000ج.م</h3>
              
              <hr></hr>


              <div className="features">
                {optionsS.map((item, index) => (
                  <div
                    key={index}
                    className={`item ${selected.includes(item.text) ? "active" : ""}`}
                    onClick={() => toggleItem(item.text)}
                  >
                    <span className="text">
                      {item.text}
                      {item.sub && <span className="small"> {item.sub}</span>}
                    </span>

                    <span className="icon">
                      {selected.includes(item.text) && "✔"}
                    </span>
                  </div>
                ))}
              </div>


                  <div className='edat-1'>
                      <div className='edit-2'>

                        <i className='fa-solid fa-pen-to-square'></i>
                        <button>تعديل </button>
                          
                      </div>

                      <div className='delet'>
                          <i className='fa-solid fa-trash-can'></i>
                      </div>
                </div>

          </div>



      </div>
    </>
  )
}

export default hallDetals
