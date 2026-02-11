import React from 'react'
import styles from './Studio.module.css'
import titler from '../../assets/titler.png'
import screen1 from '../../assets/korea/screen1.png'
import screen2 from '../../assets/korea/screen2.png'
import TopSide from '../../components/TopSIde/TopSide'
import BackArrow from '../../components/BackArrow/BackArrow'

const shots = [
  {
    src: screen1,
    alt: 'Главный экран Korea Nails',
    caption: 'Главный экран с онлайн-записью, адресом и контактами студии'
  },
  {
    src: screen2,
    alt: 'Меню услуг Korea Nails',
    caption: 'Экран услуг с продуманной иерархией и акцентами на востребованные позиции'
  }
]

export default function Studio() {
  return (
    <section className={styles.page}>
      <TopSide/>
      <BackArrow/>

      <header className={styles.header}>
        <div className={styles.title}>
          <img loading='lazy' decoding='async' className={styles.image} src={titler} alt='Разделитель'/>
          СТУДИЯ МАНИКЮРА «KOREA NAILS»
        </div>
        <p className={styles.description}>Цветовая система и ключевые экраны проекта</p>

        <div className={styles.palette}>
          <span style={{ backgroundColor: '#282828' }}/>
          <span style={{ backgroundColor: '#5179FF' }}/>
          <span style={{ backgroundColor: '#EEF1F6' }}/>
          <span style={{ backgroundColor: '#FF5153' }}/>
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
