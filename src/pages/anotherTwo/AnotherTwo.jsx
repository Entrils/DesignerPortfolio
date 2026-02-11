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

const groups = [
  {
    title: 'Постер и титульный визуал',
    gridClass: 'doubleGrid',
    items: [
      { src: egg, alt: 'Постер Egg' },
      { src: seMary, alt: 'Постер Se Mary' }
    ]
  },
  {
    title: 'SMM и баннеры',
    gridClass: 'doubleGrid',
    items: [
      { src: uslugi, alt: 'Блок услуг' },
      { src: tovari, alt: 'Блок товаров' },
      { src: future1, alt: 'Баннер Future 1' },
      { src: future2, alt: 'Баннер Future 2' }
    ]
  },
  {
    title: 'Брендинг и вариации',
    gridClass: 'doubleGrid',
    items: [
      { src: alena, alt: 'Alena Bakery' },
      { src: deserts, alt: 'PP десерты' },
      { src: sasha, alt: 'Логотип Sasha Pavlova 1' },
      { src: sasha2, alt: 'Логотип Sasha Pavlova 2' }
    ]
  },
  {
    title: 'Sharm',
    gridClass: 'doubleGrid',
    items: [
      { src: sharm1, alt: 'Sharm 1' },
      { src: sharm2, alt: 'Sharm 2' }
    ]
  },
  {
    title: 'Широкие баннеры',
    gridClass: 'singleGrid',
    items: [
      { src: semenova, alt: 'Широкий баннер Semenova' },
      { src: babyTalk, alt: 'Широкий баннер Baby Talk' }
    ]
  }
]

export default function AnotherTwo() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ 2
        </div>
        <p className={styles.description}>Архивная коллекция макетов и визуальных экспериментов</p>
      </header>

      <div className={styles.groups}>
        {groups.map((group) => (
          <section className={styles.group} key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={`${styles.groupGrid} ${styles[group.gridClass]}`}>
              {group.items.map((work) => (
                <figure className={styles.card} key={work.alt}>
                  <img loading='lazy' decoding='async' src={work.src} alt={work.alt}/>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
