/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import mf from '../../assets/mf/MainFrame.png'
import styles from './MainFrame.module.css'

export const MainFrame = () => {
  return (
    <div className={styles.container}>
      <img src={mf}
      className={styles.image}></img>
      <div className={styles.textContainer}>
        <p className={styles.text}>WEB
          <span className={styles.midText}>PORTFOLIO</span>
          UI/UX</p>
        </div>
    </div>
  ) 
}
