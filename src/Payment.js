import styles from "./Payment.module.css";
import React from 'react'
import visa from "./visa.png";
import baabal from "./baabal.png";
import instaPay from "./instaPay.png";
import vodafone from "./vodafone.png";
const Payment = () => {
  return (
    <>
      <h2 className={styles.Paymentp}>الدفع</h2>

      <div className={styles.Paymentcontener}>

        {/* الداف الاول  */}

            <div className={styles.Payment1}>
               <div className={styles.Payment1img1}><img src={visa} alt="imag" /></div>

               <button>كارت الفيزا</button>

            </div>
        {/* الداف الثانى  */}

          <div className={styles.Payment1}>

            <div className={styles.Payment1img2}><img src={baabal} alt="imag" /></div>

               <button>باي بال</button>

          </div>
        {/* الداف الثالث  */}


            <div className={styles.Payment1}>

               <div className={styles.Payment1img3}><img src={instaPay} alt="imag" /></div>

               <button>انستا باي</button>

            </div>
        {/* الداف الرابع */}
              <div className={styles.Payment1}>

                 <div className={styles.Payment1img4}><img src={vodafone } alt="imag" /></div>

                <button>فودافون كاش</button>
              </div>


      </div>




    </>
  )
}

export default Payment
