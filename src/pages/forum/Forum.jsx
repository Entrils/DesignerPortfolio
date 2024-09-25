import React from 'react'
import styles from './Forum.module.css'
import titler from '../../assets/titler.png'
import panel from '../../assets/art_forum/panel.png'
import fullScreen from '../../assets/art_forum/fullScreen.png'

export default function Forum() {
  return (
    <div className={styles.container}>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/> ФОРУМ ДЛЯ ХУДОЖНИКОВ</div>
      <div className={styles.description}>Цветовые решения проекта</div>
      <div className={styles.colors}>
          <div className={styles.color1}/>
          <div className={styles.color2}/>
          <div className={styles.color3}/>
          <div className={styles.color4}/>
      </div>
      <div className={styles.screenDesc}>
      Удобная панель навигации с возможностью переключения аккаунтов, перехода на другие страницы и быстрого входа/регистрации
      </div>
      <div className={styles.panelScreenContainer}><img className={styles.panelScreen} src={panel} alt='Панель'/></div>
      <div className={styles.screenDesc}>
      Стартовая страница с популярными темами, эмоциями, работами художников и новостной лентой форума.
      </div>
      <div className={styles.panelScreenContainer}><img className={styles.panelScreen} src={fullScreen} alt='Панель'/></div>
    </div>
  )
}
