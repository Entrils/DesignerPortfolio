import React from 'react'
import styles from './TopSide.module.css'
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'

export default function TopSide() {
  return (
    <div className={styles.content}>
             <NavLink to={MAIN_ROUTE}>
                <div className={styles.title}>
            SE+MARY
            </div>
            </NavLink>
    </div>
  )
}
