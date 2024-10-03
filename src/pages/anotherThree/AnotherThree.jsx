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

export default function AnotherThree() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ 3</div>
      <div className={styles.description}>Данная страница будет без подписей, так как дизайны довольно старые и их очень много :)</div>
      <div className={styles.content}>
          <img src={cup} alt='Lego Cup'/>
          <img src={badge} alt='Lego Badge'/>
          <img src={maska} alt='Lego Maska'/>
          <img src={ugolek} alt='Ugolek Logotypes'/>
          <img src={menu} alt='Ugolek menu'/>
          <img src={ugolek2} alt='Ugolek logotypes'/>
          <img src={semary} alt='Se+Mary'/>
          <img src={pattern} alt='cafe pattern'/>
          <img src={nakleiki} alt='cafe nakleiki'/>
      </div>
    </div>
  )
}
