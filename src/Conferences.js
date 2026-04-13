import styles from "./Conferences.module.css";
import React from 'react'
import photo3 from "./photo3.jpg";
const Conferences = ({ changeStep }) => {
  return (
    <>
      <h2 className={styles.Conferencesp}> المؤتمرات </h2>

       <div className={styles.Conferencescontener}> 
      
      {/* الداف الاول الاساسى  */}
           <div className={styles.Conferencescontener1}>
      
      
              {/* الداف الاول  */}
      
                  <div className={styles.Conferencescontener11}>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className={styles.Conferencescontener111}>
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
                            
                   <div className={styles.Conferencescontener11}>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className={styles.Conferencescontener111}>
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
      
                             <div className={styles.Conferencescontener11}>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className={styles.Conferencescontener111}>
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
            
      
          <div className={styles.Conferencescontener2}>
      
      {/* الداف الاول  */}
             <div className={styles.Conferencescontener11}>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className={styles.Conferencescontener111}>
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
      
          <div className={styles.Conferencescontener11}>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className={styles.Conferencescontener111}>
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
      
                            <div className={styles.Conferencescontener11}>
                                  <img src={photo3} alt='imge'/>
                  
                                  <div className={styles.Conferencescontener111}>
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
