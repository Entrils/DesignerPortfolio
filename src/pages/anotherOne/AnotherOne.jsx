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

const groups = [
  {
    title: 'Ключевые концепты',
    gridClass: 'doubleGrid',
    items: [
      { src: water, alt: 'Under water landing' },
      { src: worlds, alt: '2 Worlds branding' }
    ]
  },
  {
    title: 'Мобильные темы',
    gridClass: 'tripleGrid',
    items: [
      { src: phone1, alt: 'Phone theme 1' },
      { src: phone2, alt: 'Phone theme 2' },
      { src: phone3, alt: 'Phone theme 3' }
    ]
  },
  {
    title: 'Zoo Shop',
    gridClass: 'tripleGrid',
    items: [
      { src: zooshop1, alt: 'Zoo shop mockup 1' },
      { src: zooshop2, alt: 'Zoo shop mockup 2' },
      { src: zooshop3, alt: 'Zoo shop mockup 3' }
    ]
  },
  {
    title: 'Neko',
    gridClass: 'singleGrid',
    items: [
      { src: neko, alt: 'Neko mockup' }
    ]
  },
  {
    title: 'Neon Shik',
    gridClass: 'doubleGrid',
    items: [
      { src: neonsh1, alt: 'Neon Shik print 1' },
      { src: neonsh2, alt: 'Neon Shik print 2' }
    ]
  }
]

export default function AnotherOne() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ
        </div>
        <p className={styles.description}>
          Разноформатные работы: лендинги, мобильные темы, мокапы и полиграфия
        </p>
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
