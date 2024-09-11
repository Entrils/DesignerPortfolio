import React from 'react'
import styles from './About.module.css'
import titler from '../../assets/titler.png'

export const About = () => {
  return (
    <div className={styles.container} id='about'>
      
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/> ОБО МНЕ</div>
      <div className={styles.description}>
          <p>
          Добро пожаловать в портфолио!
          </p>
          <br/>
          <p>
          Меня зовут Семенова Мария, мне 20 лет и проживаю я в г. Москва.
          </p>
          <br/>
          <p>
          Имею средне-специальное образование «Графический дизайнер (инженер)» и общий опыт работы около 1.5 года. 
          </p>
          <br/>
          <p>
          Дизайн — то, что меня вдохновляет. Я хочу стать настоящим профессионалом и готова обучаться и двигаться вместе с будущей компанией.
          </p>
      </div>
    </div>
  )
}
