import styles from "./weddings.module.css";
import React from 'react'
import photo4 from "./photo4.jpg";

const weddings = ({ changeStep }) => {


  return (
    <>
    
     <h2 className={styles.weddingsP}>الافراح</h2>
     {/* الداف الاب */}
     <div className={styles.weddingsContener}> 

{/* الداف الاول الاساسى  */}
     <div className={styles.weddingsContener1}>


        {/* الداف الاول  */}

            <div className={styles.weddingsContener11}>
                            <img src={photo4} alt='imge'/>
            
                            <div className={styles.weddingsContener111}>
                                <h4>قاعة الافراح</h4>
                                <p>سوهاج</p>
                                <h6>سعة 500 شخص</h6>
            
                                <h6>السعر لليوم<span>20,000 ج.م</span></h6>
            
                                  <button onClick={() => changeStep(9)}>
                                       عرض التفاصيل
                                  </button>
                                  
                            </div>
                            
                               
                      </div>

{/* الداف الثانى */}
                      
             <div className={styles.weddingsContener11}>
                            <img src={photo4} alt='imge'/>
            
                            <div className={styles.weddingsContener111}>
                                <h4>قاعة الافراح</h4>
                                <p>سوهاج</p>
                                <h6>سعة 500 شخص</h6>
            
                                <h6>السعر لليوم<span>20,000 ج.م</span></h6>
            
                                  <button onClick={() => changeStep(9)}>
                                       عرض التفاصيل
                                  </button>
                                  
                            </div>
                            
                               
                      </div>

                      {/* الداف الثالث */}

                       <div className={styles.weddingsContener11}>
                            <img src={photo4} alt='imge'/>
            
                            <div className={styles.weddingsContener111}>
                                <h4>قاعة الافراح</h4>
                                <p>سوهاج</p>
                                <h6>سعة 500 شخص</h6>
            
                                <h6>السعر لليوم<span>20,000 ج.م</span></h6>
            
                                  <button onClick={() => changeStep(9)}>
                                       عرض التفاصيل
                                  </button>
                                  
                            </div>
                            
                               
                      </div>
            
     </div>
      

    <div className={styles.weddingsContener2}>

{/* الداف الاول  */}
       <div className={styles.weddingsContener11}>
                            <img src={photo4} alt='imge'/>
            
                            <div className={styles.weddingsContener111}>
                                <h4>قاعة الافراح</h4>
                                <p>سوهاج</p>
                                <h6>سعة 500 شخص</h6>
            
                                <h6>السعر لليوم<span>20,000 ج.م</span></h6>
            
                                  <button onClick={() => changeStep(9)}>
                                       عرض التفاصيل
                                  </button>
                                  
                            </div>
                            
                               
                      </div>

{/* الداف الثانى */}

    <div className={styles.weddingsContener11}>
                            <img src={photo4} alt='imge'/>
            
                            <div className={styles.weddingsContener111}>
                                <h4>قاعة الافراح</h4>
                                <p>سوهاج</p>
                                <h6>سعة 500 شخص</h6>
            
                                <h6>السعر لليوم<span>20,000 ج.م</span></h6>
            
                                  <button onClick={() => changeStep(9)}>
                                       عرض التفاصيل
                                  </button>
                                  
                            </div>
                            
                               
                      </div>

                      {/* الداف الثالث  */}

                      <div className={styles.weddingsContener11}>
                            <img src={photo4} alt='imge'/>
            
                            <div className={styles.weddingsContener111}>
                                <h4>قاعة الافراح</h4>
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

export default weddings
