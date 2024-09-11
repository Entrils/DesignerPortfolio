import React from 'react'
import styles from './Contact.module.css'
import titler from '../../assets/titler.png'
import tg from '../../assets/contact/tg.png'
import wu from '../../assets/contact/wu.png'
import vk from '../../assets/contact/vk.png'

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>КОНТАКТЫ</div>
      <div className={styles.ContactImages}>
        <a href='https://t.me/bdmaryzeppelin'><img className={styles.imageProps} src={tg} alt="Telegram"/></a>
        <a href='/'><img className={styles.imageProps} src={wu} alt="WhatsUp"/></a>
        <a href='https://vk.com/bdmaximum'><img className={styles.imageProps} src={vk} alt="VKontakte"/></a>
      </div>
      <div className={styles.mail}><a href="mailto:m4xthomas@yandex.ru">M4XTHOMAS@YANDEX.RU</a></div>
    </footer>
  )
}
