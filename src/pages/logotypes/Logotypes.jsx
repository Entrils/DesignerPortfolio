import React from 'react'
import styles from './Logodypes.module.css'
import titler from '../../assets/titler.png'
import doddler from '../../assets/logotypes/doddle.png'
import seMary from '../../assets/logotypes/se+mary.png'
import ugolek from '../../assets/logotypes/ugolek.png'
import neko from '../../assets/logotypes/neko.png'
import zooShop from '../../assets/logotypes/zoo_shop.png'
import alena from '../../assets/logotypes/alena_bakery.png'
import sakura from '../../assets/logotypes/sakura.png'
import potolok from '../../assets/logotypes/potolok.png'
import potolokInfo from '../../assets/logotypes/potolok_info.png'
import seMaryV2 from '../../assets/logotypes/se+mary_v2.png'
import sasha from '../../assets/logotypes/sasha_pavlova.png'
import babyTalk from '../../assets/logotypes/baby_talk.png'
import dragon from '../../assets/logotypes/black_dragon.png'
import spherium from '../../assets/logotypes/spherium.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'

const logos = [
  { src: doddler, alt: 'Doddle', type: 'square' },
  { src: seMary, alt: 'Se Mary', type: 'square' },
  { src: ugolek, alt: 'Ugolek', type: 'square' },
  { src: neko, alt: 'Neko', type: 'square' },
  { src: zooShop, alt: 'Zoo Shop', type: 'square' },
  { src: alena, alt: 'Alena Bakery', type: 'square' },
  { src: sakura, alt: 'Sakura', type: 'square' },
  { src: potolok, alt: 'Potolok', type: 'wide' },
  { src: potolokInfo, alt: 'Potolok info', type: 'square' },
  { src: seMaryV2, alt: 'Se Mary V2', type: 'square' },
  { src: sasha, alt: 'Sasha Pavlova', type: 'square' },
  { src: babyTalk, alt: 'Baby Talk', type: 'wide' },
  { src: dragon, alt: 'Black Dragon', type: 'square' },
  { src: spherium, alt: 'Spherium', type: 'hero' }
]

export default function Logotypes() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          ПАК ЛОГОТИПОВ
        </div>
        <p className={styles.description}>Подборка логотипов из разных проектов и ниш</p>
      </header>

      <div className={styles.gallery}>
        {logos.map((logo) => (
          <figure
            className={`${styles.card} ${logo.type === 'wide' ? styles.wide : ''} ${logo.type === 'hero' ? styles.hero : ''}`}
            key={logo.alt}
          >
            <img loading='lazy' decoding='async' src={logo.src} alt={logo.alt}/>
          </figure>
        ))}
      </div>
    </section>
  )
}
