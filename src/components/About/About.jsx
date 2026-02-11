import React from 'react'
import styles from './About.module.css'
import titler from '../../assets/titler.png'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>
        <img className={styles.image} src={titler} alt='Разделитель'/>
        ОБО МНЕ
      </h2>

      <div className={styles.description}>
        <p className={styles.lead}>Добро пожаловать в портфолио.</p>

        <p>
          Меня зовут Семенова Мария, мне 21 год, я живу в Москве и работаю в сфере графического и
          UI/UX-дизайна.
        </p>

        <p>
          Имею среднее специальное образование по направлению «Графический дизайнер (инженер)» и
          практический опыт в коммерческих и учебных проектах.
        </p>

        <p>
          Дизайн для меня это способ делать сложное понятным и визуально точным. Постоянно развиваю
          насмотренность, инструменты и подход к интерфейсам.
        </p>
      </div>
    </section>
  )
}

export default About
