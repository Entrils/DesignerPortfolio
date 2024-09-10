import React from 'react'
import styles from './Projects.module.css'
import titlerBlack from '../../assets/titler_black.png'
import ArtForum from '../../assets/projects/ArtForum.png'

export const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}><img className={styles.image} src={titlerBlack} alt='Разделитель'/>ПРОЕКТЫ</div>
      <div className={styles.description}>Designed by Semenova Mary.</div>
      <div className={styles.content}>
        <div className={styles.lowProj}> <img src={ArtForum} alt='Artist Forum'/> <p>Форум Художников</p></div>
        <div className={styles.lowProj}> <img src={ArtForum} alt='Artist Forum'/> <p>Тест1</p></div>
        <div className={styles.lowProj}><img src={ArtForum} alt='Artist Forum'/><p>Тест2</p></div>
        <div className={styles.lowProj}><img src={ArtForum} alt='Artist Forum'/><p>Тест3</p></div>
        <div className={styles.highProj}><img src={ArtForum} alt='Artist Forum'/><p>Тест4</p> </div>
      </div>
      </div>
  )
}
