import styles from "./BookingSaved.module.css";
import React from 'react'

const BookingSaved = ({ changeStep }) => {
  return (
    <>

         <div className={styles.BookingSavedconteaner}>
            <div className={styles.BookingSavedcard}>
    
    <div className={styles.BookingSavedicon}>✔</div>

    <h3>تمت العملية بنجاح</h3>

    <button>تم</button>

  </div>
       </div>


     </>
  )
}

export default BookingSaved
