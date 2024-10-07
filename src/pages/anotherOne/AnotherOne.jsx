import React from 'react'
import styles from './AnotherOne.module.css'
import titler from '../../assets/titler.png'
import water from '../../assets/another1/under_water.png'
import phone1 from '../../assets/another1/phone1.png'
import phone2 from '../../assets/another1/phone2.png'
import phone3 from '../../assets/another1/phone3.png'
import worlds from '../../assets/another1/2worlds.png'
import zooshop1 from '../../assets/another1/zooshop1.png'
import zooshop2 from '../../assets/another1/zooshop2.png'
import zooshop3 from '../../assets/another1/zooshop3.png'
import neko from '../../assets/another1/neko.png'
import neonsh1 from '../../assets/another1/neonsh1.png'
import neonsh2 from '../../assets/another1/neonsh2.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'

export default function AnotherOne() {
  return (
    <div className={styles.container}>
      <TopSide/>
      <BackArrow/>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ</div>
      <div className={styles.description}>Блок для сайта</div>
      <div className={styles.water}>
        <img src={water} alt='Under Water'/>
      </div>
      <div className={styles.description}>Макеты кастомной темы на телефон</div>
      <div className={styles.phones}>
        <img src={phone1} alt='Phone 1'/>
        <img src={phone2} alt='Phone 2'/>
        <img src={phone3} alt='Phone 3'/>
      </div>
      <div className={styles.description}>Логотип и цветовые решения для современных телефонов 2WORLDS</div>
      <div className={styles.worlds}>
        <img src={worlds} alt='2 WORLDS'/>
      </div>
      <div className={styles.description}>Мокапы разных компаний и логотипов</div>
      <div className={styles.mocaps}>
        <div className={styles.upper}>
          <img src={zooshop1} alt='Zoo shop'/>
            <div className={styles.rightside}>
              <img src={zooshop2} alt='Zoo shop'/>
              <img src={zooshop3} alt='Zoo shop'/>
            </div>
        </div>
          <img src={neko} alt='Neko'/>
      </div>
      <div className={styles.description}>Полиграфия и оформление ВК</div>
      <div className={styles.vk}>
        <img src={neonsh1} alt='Neon Shik'/>
        <img src={neonsh2} alt='Neon Shik'/>
      </div>
    </div>
  )
}
