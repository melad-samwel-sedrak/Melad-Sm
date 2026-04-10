import React from 'react'
import visa from "./visa.png";
import baabal from "./baabal.png";
import instaPay from "./instaPay.png";
import vodafone from "./vodafone.png";
const Payment = () => {
  return (
    <>
      <h2 className='Payment-p'>الدفع</h2>

      <div className='Payment-contener'>

        {/* الداف الاول  */}

            <div className='Payment-1'>
               <div className='Payment-1-img-1'><img src={visa} alt="imag" /></div>

               <button>كارت الفيزا</button>

            </div>
        {/* الداف الثانى  */}

          <div className='Payment-1'>

            <div className='Payment-1-img-2'><img src={baabal} alt="imag" /></div>

               <button>باي بال</button>

          </div>
        {/* الداف الثالث  */}


            <div className='Payment-1'>

               <div className='Payment-1-img-3'><img src={instaPay} alt="imag" /></div>

               <button>انستا باي</button>

            </div>
        {/* الداف الرابع */}
              <div className='Payment-1'>

                 <div className='Payment-1-img-4'><img src={vodafone } alt="imag" /></div>

                <button>فودافون كاش</button>
              </div>


      </div>




    </>
  )
}

export default Payment
