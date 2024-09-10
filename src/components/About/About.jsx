import React from 'react'
import styles from './About.module.css'
import titler from '../../assets/titler.png'

export const About = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/> ОБО МНЕ</div>
      <div className={styles.description}>
          TEXT
      </div>
    </div>
  )
}
