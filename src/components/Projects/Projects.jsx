import React from 'react'
import styles from './Projects.module.css'
import titlerBlack from '../../assets/titler_black.png'

export const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}><img className={styles.image} src={titlerBlack} alt='Разделитель'/>ПРОЕКТЫ</div>
      <div className={styles.description}>Designed by Semenova Mary.</div>
      <div className={styles.imageContainer}>
        
      </div>
      </div>
  )
}
