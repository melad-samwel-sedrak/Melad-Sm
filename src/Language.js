import styles from "./Language.module.css";
import React from 'react'
import sa from "./sa.png";
import  us from "./us.png";
const Language = () => {
  return (
    <>

      <h2 className={styles.Languagep}>اللغة</h2>

      <div className={styles.Languageconteaner}>

        {/* الداف الاول  */}
        <div className={styles.Language1}>

          <div className={styles.Languageimg}>
                <img src={us} alt='imag'/>
          </div>
  
          <button>الانجليزية</button>

        </div>

        {/* الداف الثانلى */}

        <div className={styles.Language1}>

            <div className={styles.Languageimg}>
                <img src={sa} alt='imag'/>
          </div>
           <button>العربية</button>
        </div>

      </div>


    </>
  )
}

export default Language
