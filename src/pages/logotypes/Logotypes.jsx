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
import BackArrow from '../../components/BackArrow/BackArrow'

export default function Logotypes() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <BackArrow/>
       <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>ПАК ЛОГОТИПОВ</div>
       <div className={styles.description}>Подборка логотипов за всю мою работу дизайнером</div>
       <div className={styles.imagesWrapper}>
          <img className={styles.quadImg} src={doddler} alt='doddler'/>
          <img className={styles.quadImg} src={se_mary} alt='se_mary'/>
          <img className={styles.quadImg} src={ugolek} alt='ugolek'/>
          <img className={styles.quadImg} src={neko} alt='neko'/>
          <img className={styles.quadImg} src={zoo_shop} alt='zoo_shop'/>
          <img className={styles.quadImg} src={alena} alt='alena_bakery'/>
          <img className={styles.quadImg} src={sakura} alt='sakura'/>
          <img className={styles.potolok} src={potolok} alt='potolok'/>

          <img className={styles.potolok_info} src={potolok_info} alt='potolok_info'/>
          <img className={styles.quadImg} src={se_mary_v2} alt='se_mary_v2'/>
          <img className={styles.quadImg} src={sasha} alt='sasha_pavlova'/>
          
          <img className={styles.babyTalk} src={baby_talk} alt='baby_talk'/>
          <img className={styles.quadImg} src={dragon} alt='black_dragon'/>
          <img className={styles.spherium} src={spherium} alt='spherium'/>
       </div>
    </div>
  )
}
