import React from 'react'
import sa from "./sa.png";
import  us from "./us.png";
const Language = () => {
  return (
    <>

      <h2 className='Language-p'>اللغة</h2>

      <div className='Language-conteaner'>

        {/* الداف الاول  */}
        <div className='Language-1'>

          <div className='Language-img'>
                <img src={us} alt='imag'/>
          </div>
  
          <button>الانجليزية</button>

        </div>

        {/* الداف الثانلى */}

        <div className='Language-1'>

            <div className='Language-img'>
                <img src={sa} alt='imag'/>
          </div>
           <button>العربية</button>
        </div>

      </div>


    </>
  )
}

export default Language
