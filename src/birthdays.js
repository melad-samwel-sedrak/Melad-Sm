import React from 'react'
import photo5 from "./photo5.jpg";
const birthdays = ({ changeStep }) => {
  return (
    <>
        <h2 className='birthdays-p'>أعياد الميلاد</h2>
            {/* الداف الاب */}
            <div className='birthdays-contener'> 
       
       {/* الداف الاول الاساسى  */}
            <div className='birthdays-contener-1'>
       
       
               {/* الداف الاول  */}
       
                   <div className='birthdays-contener-1-1'>
                                   <img src={photo5} alt='imge'/>
                   
                                   <div className='birthdays-contener-1-1-1'>
                                       <h4>قاعة أعياد الميلاد</h4>
                                       <p>سوهاج</p>
                                       <h6>سعة 100 شخص</h6>
                   
                                       <h6>السعر لليوم<span>10,000 ج.م</span></h6>
                   
                                         <button onClick={() => changeStep(9)}>
                                              عرض التفاصيل
                                         </button>
                                         
                                   </div>
                                   
                                      
                             </div>
       
       {/* الداف الثانى */}
                             
                    <div className='birthdays-contener-1-1'>
                                   <img src={photo5} alt='imge'/>
                   
                                   <div className='birthdays-contener-1-1-1'>
                                       <h4>قاعة أعياد الميلاد</h4>
                                       <p>سوهاج</p>
                                       <h6>سعة 100 شخص</h6>
                   
                                       <h6>السعر لليوم<span>10,000 ج.م</span></h6>
                   
                                         <button onClick={() => changeStep(9)}>
                                              عرض التفاصيل
                                         </button>
                                         
                                   </div>
                                   
                                      
                             </div>
       
                             {/* الداف الثالث */}
       
                              <div className='birthdays-contener-1-1'>
                                   <img src={photo5} alt='imge'/>
                   
                                   <div className='birthdays-contener-1-1-1'>
                                       <h4>قاعة أعياد الميلاد</h4>
                                       <p>سوهاج</p>
                                       <h6>سعة 100 شخص</h6>
                   
                                       <h6>السعر لليوم<span>10,000 ج.م</span></h6>
                   
                                         <button onClick={() => changeStep(9)}>
                                              عرض التفاصيل
                                         </button>
                                         
                                   </div>
                                   
                                      
                             </div>
                   
            </div>
             
       
           <div className='birthdays-contener-2'>
       
       {/* الداف الاول  */}
              <div className='birthdays-contener-1-1'>
                                   <img src={photo5} alt='imge'/>
                   
                                   <div className='birthdays-contener-1-1-1'>
                                       <h4>قاعة أعياد الميلاد</h4>
                                       <p>سوهاج</p>
                                       <h6>سعة 100 شخص</h6>
                   
                                       <h6>السعر لليوم<span>10,000 ج.م</span></h6>
                   
                                         <button onClick={() => changeStep(9)}>
                                              عرض التفاصيل
                                         </button>
                                         
                                   </div>
                                   
                                      
                             </div>
       
       {/* الداف الثانى */}
       
           <div className='birthdays-contener-1-1'>
                                   <img src={photo5} alt='imge'/>
                   
                                   <div className='birthdays-contener-1-1-1'>
                                       <h4>قاعة أعياد الميلاد</h4>
                                       <p>سوهاج</p>
                                       <h6>سعة 100 شخص</h6>
                   
                                       <h6>السعر لليوم<span>10,000 ج.م</span></h6>
                   
                                         <button onClick={() => changeStep(9)}>
                                              عرض التفاصيل
                                         </button>
                                         
                                   </div>
                                   
                                      
                             </div>
       
                             {/* الداف الثالث  */}
       
                             <div className='birthdays-contener-1-1'>
                                   <img src={photo5} alt='imge'/>
                   
                                   <div className='birthdays-contener-1-1-1'>
                                       <h4>قاعة أعياد الميلاد</h4>
                                       <p>سوهاج</p>
                                       <h6>سعة 100 شخص</h6>
                   
                                       <h6>السعر لليوم<span>10,000 ج.م</span></h6>
                   
                                         <button onClick={() => changeStep(9)}>
                                              عرض التفاصيل
                                         </button>
                                         
                                   </div>
                                   
                                      
                             </div>
       
       
            </div>
       
            </div>
    </>
  )
}

export default birthdays
