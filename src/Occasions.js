import styles from "./Occasions.module.css";
import React from 'react'
import photo2 from "./photo2.jpg";
const Occasions = ({ changeStep }) => {
  return (
    <>
      <h2 className={styles.Occasionsp}>المناسبات</h2>

           {/* الداف الاب */}
           <div className={styles.Occasionscontener}> 
      
      {/* الداف الاول الاساسى  */}
           <div className={styles.Occasionscontener1}>
      
      
              {/* الداف الاول  */}
      
                  <div className={styles.Occasionscontener11}>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className={styles.Occasionscontener111}>
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
                            
                   <div className={styles.Occasionscontener11}>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className={styles.Occasionscontener111}>
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
      
                             <div className={styles.Occasionscontener11}>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className={styles.Occasionscontener111}>
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
            
      
          <div className={styles.Occasionscontener2}>
      
      {/* الداف الاول  */}
             <div className={styles.Occasionscontener11}>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className={styles.Occasionscontener111}>
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
      
          <div className={styles.Occasionscontener11}>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className={styles.Occasionscontener111}>
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
      
                            <div className={styles.Occasionscontener11}>
                                  <img src={photo2} alt='imge'/>
                  
                                  <div className={styles.Occasionscontener111}>
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
