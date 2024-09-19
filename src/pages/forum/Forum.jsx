import React from 'react'
import styles from './Forum.module.css'
import titler from '../../assets/titler.png'

export default function Forum() {
  return (
    <div className={styles.container}>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/> ФОРУМ ДЛЯ ХУДОЖНИКОВ</div>
    </div>
  )
}
