import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
           <div className={styles.menu}>
            <ul className={styles.menuItems}
            >
             <li>
             <a href="#about">Обо мне</a>
             </li>
             <li>
             <a href="#skills">Навыки</a>
             </li>

             <div className={styles.logo}>
             <a className={styles.title} href="/">
            SE+MARY
            </a>
            </div>

             <li>
             <a href="#projects">Проекты</a>
             </li>
             <li>
             <a href="#contact">Контакты</a>
             </li>
            </ul>
        </div>
    </nav>
    );
}
