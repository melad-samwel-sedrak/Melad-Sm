import React from 'react'
import styles from "./SaveSuccess.module.css";
const SaveSuccess = () => {
  return (
    <>
       <div className={styles.SaveSuccessconteaner}>
            <div className={styles.card}>
    
    <div className={styles.icon}>✔</div>

    <h3>تمت العملية بنجاح</h3>

    <button className={styles.buttonSaveSuccess}>تم</button>

  </div>
       </div>
    </>
  )
}

export default SaveSuccess
