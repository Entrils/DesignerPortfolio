import React from 'react'
import styles from './Projects.module.css'
import titlerBlack from '../../assets/titler_black.png'
import ArtForum from '../../assets/projects/ArtForum.png'
import DiamondCanvas from '../../assets/projects/DiamondCanvas.png'
import KoreaNails from '../../assets/projects/KoreaNails.png'
import Neko from '../../assets/projects/Neko.png'
import Twitch from '../../assets/projects/twitch.png'

export const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
      <div className={styles.title}><img className={styles.image} src={titlerBlack} alt='Разделитель'/>ПРОЕКТЫ</div>
      <div className={styles.description}>Designed by Semenova Mary.</div>
      <div className={styles.content}>

        <div className={styles.lowProj}>
          <div className={styles.blueGrad}/>
          <p className={styles.types}>Web Design</p>
          <img src={ArtForum} alt='Artist Forum'/>
          <p className={styles.projTitle}>Форум Художников</p>
        </div>

        <div className={styles.lowProj}>
        <div className={styles.yellowGrad}/>
          <p className={styles.types}>Logotypes</p>
          <img src={Neko} alt='Пак логотипов'/>
          <p className={styles.projTitle}>Пак логотипов</p>
        </div>

        <div className={styles.lowProj}>
          <div className={styles.lightBlueGrad}/>
          <p className={styles.types}>Web Design</p>
          <img src={KoreaNails} alt='Korea Nails'/>
          <p className={styles.projTitle}>Студия маникюра «Korea Nails»</p>
        </div>

        <div className={styles.lowProj}>
          <div className={styles.blackGrad}/>
          <p className={styles.types}>Diamonds</p>
          <img src={DiamondCanvas} alt='Diamond Canvas'/>
          <p className={styles.projTitle}>Алмазная мозаика</p>
        </div>

        <div className={styles.highProj}>
          <div className={styles.orangeGrad}/>
          <p className={styles.typesHigh}>Twitch</p>
          <img src={Twitch} alt='Twitch'/>
          <p className={styles.projTitleHigh}>Оформление Twitch-канала</p> 
        </div>

      </div>
      </div>
  )
}
