import React from 'react'
import styles from './Contact.module.css'
import titler from '../../assets/titler.png'
import tg from '../../assets/contact/tg.png'
import wu from '../../assets/contact/wu.png'
import vk from '../../assets/contact/vk.png'

export const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.title}><img className={styles.image} src={titler} alt='Разделитель'/>КОНТАКТЫ</div>
      <div className={styles.ContactImages}>
        <img className={styles.imageProps} src={tg} alt="Telegram"/>
        <img className={styles.imageProps} src={wu} alt="WhatsUp"/>
        <img className={styles.imageProps} src={vk} alt="VKontakte"/>
      </div>
      <div className={styles.mail}>M4XTHOMAS@YANDEX.RU</div>
    </footer>
  )
}
