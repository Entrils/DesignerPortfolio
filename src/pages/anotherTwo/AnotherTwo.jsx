import React from 'react'
import styles from './AnotherTwo.module.css'
import titler from '../../assets/titler.png'
import egg from '../../assets/another2/egg.png'
import seMary from '../../assets/another2/semary.png'
import uslugi from '../../assets/another2/uslugi.png'
import alena from '../../assets/another2/alena_bakery.png'
import tovari from '../../assets/another2/tovari.png'
import future1 from '../../assets/another2/future1.png'
import future2 from '../../assets/another2/future2.png'
import sasha from '../../assets/another2/sasha_pavlova.png'
import deserts from '../../assets/another2/pp_deserts.png'
import sasha2 from '../../assets/another2/sasha_pavlova2.png'
import semenova from '../../assets/another2/semenova_mary.png'
import babyTalk from '../../assets/another2/baby_talk.png'
import sharm1 from '../../assets/another2/sharm.png'
import sharm2 from '../../assets/another2/sharm2.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'


export default function AnotherTwo() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <BackArrow/>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ 2</div>
      <div className={styles.description}>Данная страница будет без подписей, так как дизайны довольно старые и их очень много :)</div>
      <div className={styles.content}>
        <div className={styles.first}>
          <img className={styles.egg} src={egg} alt='Egg'/>
          <img className={styles.semary} src={seMary} alt='Se+Mary'/>
        </div>
        <div className={styles.second}> 
          <div className={styles.sides}>
            <img className={styles.uslugi} src={uslugi} alt='Services'/>
            <img className={styles.tovari} src={tovari} alt='Items'/>
            <img className={styles.future2} src={future2} alt='Future'/>
            <img className={styles.deserts} src={deserts} alt='PP deserts'/> 
          </div>
          <div className={styles.sides}>
            <img className={styles.alena} src={alena} alt='Alena Bakery'/>
            <img className={styles.future1} src={future1} alt='Future'/>
            <img className={styles.sasha} src={sasha} alt='Sasha Pavlova'/>
            <img className={styles.sasha2} src={sasha2} alt='Sasha Pavlova'/>
          </div>
        </div>

        <img className={styles.semenova} src={semenova} alt='Semenova Mary'/>
        <img className={styles.babyTalk} src={babyTalk} alt='Baby Talk'/>
        <div className={styles.third}>
          <img className={styles.sharm} src={sharm1} alt='Sharm'/>
          <img className={styles.sharm} src={sharm2} alt='Sharm Reverse'/>
        </div>
      </div>
    </div>
  )
}
