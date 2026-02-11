import React, { useState } from 'react'
import styles from './Skills.module.css'
import titler from '../../assets/titler.png'
import { data } from "../../data/skills";

export const Skills = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const handleFlip = (title) => {
    setFlippedCard((prev) => (prev === title ? null : title))
  }

  return (
    <div className={styles.container} id='skills'>
      <h2 className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/> НАВЫКИ</h2>
      <div className={styles.content}>
      {
        data.map((item) => {
          const isFlipped = flippedCard === item.title

          return <div key={item.title} className={`${styles.skill} ${isFlipped ? styles.skillFlipped : ''}`}>
              <div
                className={styles.flipCard}
                role='button'
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`Показать программу ${item.title}`}
                onClick={() => handleFlip(item.title)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    handleFlip(item.title)
                  }
                }}
              >
                <div className={styles.flipInner}>
                  <div className={styles.flipFront}>
                    <img className={styles.skillImage} src={item.imageSrc} alt={item.title} />
                  </div>
                  <div className={styles.flipBack}>
                    <span className={styles.programName}>{item.title}</span>
                  </div>
                </div>
              </div>
              <progress className={styles.skillBar} value={item.skillPcnt} max={100}/>
            </div>
        })
      }
      </div>
      <p className={styles.under}>
      Продолжаю развивать навыки каждый день: практика в проектах, разбор референсов и постоянная работа с инструментами.
      </p>
    </div>
  )
}

export default Skills
