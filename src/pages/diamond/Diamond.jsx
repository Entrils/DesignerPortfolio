import React from 'react'
import styles from './Diamond.module.css'
import titler from '../../assets/titler.png'
import canvas1 from '../../assets/diamonds/canvas1.png'
import canvas2 from '../../assets/diamonds/canvas2.png'
import canvas3 from '../../assets/diamonds/canvas3.png'
import canvas4 from '../../assets/diamonds/canvas4.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'

const works = [
  { src: canvas1, alt: 'Алмазная мозаика 1' },
  { src: canvas2, alt: 'Алмазная мозаика 2' },
  { src: canvas3, alt: 'Алмазная мозаика 3' },
  { src: canvas4, alt: 'Алмазная мозаика 4' }
]

export default function Diamond() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          АЛМАЗНАЯ МОЗАИКА
        </div>
        <p className={styles.description}>
          Подготовка изображения под алмазную выкладку: цветокоррекция, детализация и тональная сборка
        </p>
      </header>

      <div className={styles.gallery}>
        {works.map((work) => (
          <figure className={styles.card} key={work.alt}>
            <img loading='lazy' decoding='async' src={work.src} alt={work.alt}/>
          </figure>
        ))}
      </div>
    </section>
  )
}
