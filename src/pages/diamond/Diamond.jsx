import React from 'react'
import styles from './Diamond.module.css'
import titler from '../../assets/titler.png'
import canvas1 from '../../assets/diamonds/canvas1.png'
import canvas2 from '../../assets/diamonds/canvas2.png'
import canvas3 from '../../assets/diamonds/canvas3.png'
import canvas4 from '../../assets/diamonds/canvas4.png'
import TopSide from '../../components/TopSIde/TopSide'

export default function Diamond() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>АЛМАЗНАЯ МОЗАИКА</div>
      <div className={styles.description}>Редактирование фото, подбор цветов для подготовки алмазой мозаики по фото</div>

      <div className={styles.content}>
        <div className={styles.horizontal}>
            <img src={canvas1} alt='canvas1'/>
            <img src={canvas2} alt='canvas2'/>
        </div>
        <div className={styles.vertical}>
          <img src={canvas3} alt='canvas3'/>
          <img src={canvas4} alt='canvas4'/>
        </div>
      </div>
      </div>
  )
}
