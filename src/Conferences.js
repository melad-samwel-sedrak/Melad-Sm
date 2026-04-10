import React from 'react'
import photo3 from "./photo3.jpg";
const Conferences = ({ changeStep }) => {
  return (
    <>
      <h2 className='Conferences-p'> المؤتمرات </h2>

       <div className='Conferences-contener'> 
      
      {/* الداف الاول الاساسى  */}
           <div className='Conferences-contener-1'>
      
      
              {/* الداف الاول  */}
      
                  <div className='Conferences-contener-1-1'>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className='Conferences-contener-1-1-1'>
                                      <h4>قاعة  المؤتمرات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 500 شخص</h6>
                  
                                      <h6>السعر لليوم<span>20,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
      {/* الداف الثانى */}
                            
                   <div className='Conferences-contener-1-1'>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className='Conferences-contener-1-1-1'>
                                     <h4>قاعة  المؤتمرات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 500 شخص</h6>
                  
                                      <h6>السعر لليوم<span>20,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
                            {/* الداف الثالث */}
      
                             <div className='Conferences-contener-1-1'>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className='Conferences-contener-1-1-1'>
                                      <h4>قاعة  المؤتمرات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 500 شخص</h6>
                  
                                      <h6>السعر لليوم<span>20,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
                  
           </div>
            
      
          <div className='Conferences-contener-2'>
      
      {/* الداف الاول  */}
             <div className='Conferences-contener-1-1'>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className='Conferences-contener-1-1-1'>
                                     <h4>قاعة  المؤتمرات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 500 شخص</h6>
                  
                                      <h6>السعر لليوم<span>20,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
      {/* الداف الثانى */}
      
          <div className='Conferences-contener-1-1'>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className='Conferences-contener-1-1-1'>
                                      <h4>قاعة  المؤتمرات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 500 شخص</h6>
                  
                                      <h6>السعر لليوم<span>20,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
                            {/* الداف الثالث  */}
      
                            <div className='Conferences-contener-1-1'>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className='Conferences-contener-1-1-1'>
                                      <h4>قاعة  المؤتمرات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 500 شخص</h6>
                  
                                      <h6>السعر لليوم<span>20,000 ج.م</span></h6>
                  
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

export default Conferences
