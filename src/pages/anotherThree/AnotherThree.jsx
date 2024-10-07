import React from 'react'
import styles from './AnotherThree.module.css'
import titler from '../../assets/titler.png'
import cup from '../../assets/another3/lego.png'
import badge from '../../assets/another3/badge.png'
import maska from '../../assets/another3/maska.png'
import ugolek from '../../assets/another3/ugolek.png'
import menu from '../../assets/another3/menu.png'
import ugolek2 from '../../assets/another3/ugolek2.png'
import semary from '../../assets/another3/se+mary.png'
import pattern from '../../assets/another3/pattern.png'
import nakleiki from '../../assets/another3/nakleiki.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'

export default function AnotherThree() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <BackArrow/>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ 3</div>
      <div className={styles.description}>Данная страница будет без подписей, так как дизайны довольно старые и их очень много :)</div>
      <div className={styles.content}>
          <img className={styles.cup} src={cup} alt='Lego Cup'/>
          <div className={styles.module1}>
            <img className={styles.badge} src={badge} alt='Lego Badge'/>
            <img className={styles.maska} src={maska} alt='Lego Maska'/>
          </div>
          <img className={styles.ugolek} src={ugolek} alt='Ugolek Logotypes'/>
          <img className={styles.menu} src={menu} alt='Ugolek menu'/>
          <img className={styles.ugolek2} src={ugolek2} alt='Ugolek logotypes'/>
          <img className={styles.semary} src={semary} alt='Se+Mary'/>
          <div className={styles.module2}>
            <img className={styles.pattern} src={pattern} alt='cafe pattern'/>
            <img className={styles.nakleiki} src={nakleiki} alt='cafe nakleiki'/>
          </div>
      </div>
    </div>
  )
}
