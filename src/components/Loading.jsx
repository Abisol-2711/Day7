import React from 'react'
import styles from './Loading.module.css'

function Loading() {
  return (
    // <div>
    //     <div>
    //         <div>Cargando...</div>
    //     </div>
    // </div>
    <div className={styles.loadingContainer}>
        <div className={styles.loader}>
            <div></div>
        </div>
    </div>
  )
}

export default Loading