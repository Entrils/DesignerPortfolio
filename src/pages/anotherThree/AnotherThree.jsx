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

const groups = [
  {
    title: 'Lego',
    gridClass: 'doubleGrid',
    items: [
      { src: cup, alt: 'Серия Lego' },
      { src: badge, alt: 'Lego badge' },
      { src: maska, alt: 'Lego mask' }
    ]
  },
  {
    title: 'Ugolek',
    gridClass: 'doubleGrid',
    items: [
      { src: ugolek, alt: 'Айдентика Ugolek' },
      { src: menu, alt: 'Меню Ugolek' },
      { src: ugolek2, alt: 'Вариации Ugolek' },
      { src: semary, alt: 'Se Mary identity' }
    ]
  },
  {
    title: 'Cafe',
    gridClass: 'doubleGrid',
    items: [
      { src: pattern, alt: 'Паттерн кафе' },
      { src: nakleiki, alt: 'Стикеры кафе' }
    ]
  }
]

export default function AnotherThree() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          ДРУГИЕ ДИЗАЙНЫ, МАКЕТЫ И НАБРОСКИ 3
        </div>
        <p className={styles.description}>Подборка работ по айдентике, упаковке и печатным материалам</p>
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
