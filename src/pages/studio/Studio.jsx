import React from 'react'
import styles from './Studio.module.css'
import titler from '../../assets/titler.png'
import screen1 from '../../assets/korea/screen1.png'
import screen2 from '../../assets/korea/screen2.png'
import TopSide from '../../components/TopSIde/TopSide'

export default function Studio() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>СТУДИЯ МАНИКЮРА «KOREA NAILS»</div>
      <div className={styles.description}>Цветовые решения проекта</div>
      <div className={styles.colors}>
          <div className={styles.color1}/>
          <div className={styles.color2}/>
          <div className={styles.color3}/>
          <div className={styles.color4}/>
      </div>
      <div className={styles.screenDesc}>
      Главная страница с возможностью записи, адресом и поддержкой в реальном времени
      </div>
      <div className={styles.panelScreenContainer}><img className={styles.panelScreen} src={screen1} alt='Главная'/></div>
      <div className={styles.screenDesc}>
      Меню услуг на главной странице. Возможность отслеживания последних просматриваемых услуг и продуктов 
      </div>
      <div className={styles.panelScreenContainer}><img className={styles.panelScreen} src={screen2} alt='Услуги'/></div>
    </div>
  )
}
