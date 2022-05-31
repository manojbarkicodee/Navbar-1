import React from 'react'
import styles from "./style.module.css"
const Links = ({links}) => {
  return (
    <div >
        {links.map((el)=><span className={styles.span}>{el}</span>)
        
}
    </div>
  )
}

export default Links