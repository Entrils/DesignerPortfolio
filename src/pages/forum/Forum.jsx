import React from 'react'
import styles from './Forum.module.css'
import titler from '../../assets/titler.png'
import panel from '../../assets/art_forum/panel.png'
import fullScreen from '../../assets/art_forum/fullScreen.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'

const shots = [
  {
    src: panel,
    alt: 'Панель навигации',
    caption: 'Панель навигации с быстрым доступом к разделам и аккаунтам'
  },
  {
    src: fullScreen,
    alt: 'Главная страница форума',
    caption: 'Главная страница с темами, работами авторов и новостной лентой'
  }
]

export default function Forum() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          ФОРУМ ДЛЯ ХУДОЖНИКОВ
        </div>
        <p className={styles.description}>Цветовые решения и интерфейсные паттерны проекта</p>

        <div className={styles.palette}>
          <span style={{ backgroundColor: '#4D10DD' }}/>
          <span style={{ backgroundColor: '#253AF9' }}/>
          <span style={{ backgroundColor: '#EEF1F6' }}/>
          <span style={{ backgroundColor: '#3F3F3F' }}/>
        </div>
      </header>

      <div className={styles.gallery}>
        {shots.map((shot) => (
          <figure className={styles.card} key={shot.alt}>
            <img loading='lazy' decoding='async' src={shot.src} alt={shot.alt}/>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
