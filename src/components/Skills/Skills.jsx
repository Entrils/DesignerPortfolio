import React from 'react'
import styles from './Skills.module.css'
import titler from '../../assets/titler.png'
import { data } from "../../data/skills";

export const Skills = () => {
  return (
    <div className={styles.container} id='skills'>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/> НАВЫКИ</div>
      <div className={styles.content}>
      {
        data.map((item,id) => {
          return <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img className={styles.skillImage} src={item.imageSrc} alt={item.title} />
              </div>
              <progress className={styles.skillBar} value={item.skillPcnt} max={100}/>
            </div>
        })
      }
      </div>
      <div className={styles.under}>
      Все программы я изучаю и по сей день, смотря видео, делая дизайн и обращаясь к иностранным источникам.
      </div>
    </div>
  )
}
