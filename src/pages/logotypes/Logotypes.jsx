import React from 'react'
import styles from './Logodypes.module.css'
import titler from '../../assets/titler.png'
import doddler from '../../assets/logotypes/doddle.png'
import se_mary from '../../assets/logotypes/se+mary.png'
import ugolek from '../../assets/logotypes/ugolek.png'
import neko from '../../assets/logotypes/neko.png'
import zoo_shop from '../../assets/logotypes/zoo_shop.png'
import alena from '../../assets/logotypes/alena_bakery.png'
import sakura from '../../assets/logotypes/sakura.png'
import potolok from '../../assets/logotypes/potolok.png'
import potolok_info from '../../assets/logotypes/potolok_info.png'
import se_mary_v2 from '../../assets/logotypes/se+mary_v2.png'
import sasha from '../../assets/logotypes/sasha_pavlova.png'
import baby_talk from '../../assets/logotypes/baby_talk.png'
import dragon from '../../assets/logotypes/black_dragon.png'
import spherium from '../../assets/logotypes/spherium.png'
import TopSide from '../../components/TopSIde/TopSide'

export default function Logotypes() {
  return (
    <div className={styles.container}>
      <TopSide/>
       <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>ПАК ЛОГОТИПОВ</div>
       <div className={styles.description}>Подборка логотипов за всю мою работу дизайнером</div>
       <div className={styles.imagesWrapper}>
          <img  src={doddler} alt='doddler'/>
          <img  src={se_mary} alt='se_mary'/>
          <img  src={ugolek} alt='ugolek'/>
          <img  src={neko} alt='neko'/>
          <img  src={zoo_shop} alt='zoo_shop'/>
          <img  src={alena} alt='alena_bakery'/>
          <img  src={sakura} alt='sakura'/>
          <img  src={potolok} alt='potolok'/>
          <img  src={potolok_info} alt='potolok_info'/>
          <img  src={se_mary_v2} alt='se_mary_v2'/>
          <img  src={sasha} alt='sasha_pavlova'/>
          <img  src={baby_talk} alt='baby_talk'/>
          <img  src={dragon} alt='black_dragon'/>
          <img  src={spherium} alt='spherium'/>
       </div>
    </div>
  )
}
