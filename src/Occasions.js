import React from 'react'
import photo2 from "./photo2.jpg";
const Occasions = ({ changeStep }) => {
  return (
    <>
      <h2 className='Occasions-p'>المناسبات</h2>

           {/* الداف الاب */}
           <div className='Occasions-contener'> 
      
      {/* الداف الاول الاساسى  */}
           <div className='Occasions-contener-1'>
      
      
              {/* الداف الاول  */}
      
                  <div className='Occasions-contener-1-1'>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className='Occasions-contener-1-1-1'>
                                      <h4>قاعة  المناسبات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 700 شخص</h6>
                  
                                      <h6>السعر لليوم<span>30,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
      {/* الداف الثانى */}
                            
                   <div className='Occasions-contener-1-1'>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className='Occasions-contener-1-1-1'>
                                      <h4>قاعة  المناسبات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 700 شخص</h6>
                  
                                      <h6>السعر لليوم<span>30,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
                            {/* الداف الثالث */}
      
                             <div className='Occasions-contener-1-1'>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className='Occasions-contener-1-1-1'>
                                     <h4>قاعة  المناسبات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 700 شخص</h6>
                  
                                      <h6>السعر لليوم<span>30,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
                  
           </div>
            
      
          <div className='Occasions-contener-2'>
      
      {/* الداف الاول  */}
             <div className='Occasions-contener-1-1'>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className='Occasions-contener-1-1-1'>
                                      <h4>قاعة  المناسبات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 700 شخص</h6>
                  
                                      <h6>السعر لليوم<span>30,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
      {/* الداف الثانى */}
      
          <div className='Occasions-contener-1-1'>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className='Occasions-contener-1-1-1'>
                                      <h4>قاعة  المناسبات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 700 شخص</h6>
                  
                                      <h6>السعر لليوم<span>30,000 ج.م</span></h6>
                  
                                        <button onClick={() => changeStep(9)}>
                                             عرض التفاصيل
                                        </button>
                                        
                                  </div>
                                  
                                     
                            </div>
      
                            {/* الداف الثالث  */}
      
                            <div className='Occasions-contener-1-1'>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className='Occasions-contener-1-1-1'>
                                     <h4>قاعة  المناسبات </h4>
                                      <p>سوهاج</p>
                                      <h6>سعة 700 شخص</h6>
                  
                                      <h6>السعر لليوم<span>30,000 ج.م</span></h6>
                  
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

export default Occasions
