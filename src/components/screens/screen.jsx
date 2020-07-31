import * as React from "react"
import styles from './screen.module.scss';

/**
 * @param {string} imageUrl
 */
export const Screen = ({imageUrl, className = ''}) => {
  return (
    <div className={`${styles.screenContainer} ${className}`}>
      {!!imageUrl && <div className={styles.screenImg} style={{backgroundImage: `url('${imageUrl}')`}}/>}
    </div>
  )
}
