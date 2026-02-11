import React from 'react'
import styles from './Projects.module.css'
import titlerBlack from '../../assets/titler_black.png'
import ArtForum from '../../assets/projects/ArtForum.png'
import DiamondCanvas from '../../assets/projects/DiamondCanvas.png'
import KoreaNails from '../../assets/projects/KoreaNails.png'
import Neko from '../../assets/projects/Neko.png'
import anotherTwoo from '../../assets/projects/anotherTwo.png'
import anotherThreee from '../../assets/projects/anotherThree.png'
import water from '../../assets/another1/under_water.png'
import { NavLink } from 'react-router-dom'
import { ANOTHERONE_ROUTE, ANOTHERTHREE_ROUTE, ANOTHERTWO_ROUTE, DIAMOND_ROUTE, FORUM_ROUTE, LOGO_ROUTE, STUDIO_ROUTE } from '../../utils/consts'

export const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
      <h2 className={styles.title}><img loading='lazy' decoding='async' className={styles.image} src={titlerBlack} alt='Разделитель'/>ПРОЕКТЫ</h2>
      <p className={styles.description}>Designed by Mary Se.</p>
      <div className={styles.content}>

        <div className={styles.module}>
          <NavLink to={FORUM_ROUTE} aria-label='Открыть проект: Форум художников'>
            <div className={styles.lowProj}>
              <div className={styles.blueGrad}/>
              <p className={styles.types}>Веб-дизайн</p>
              <img loading='lazy' decoding='async' src={ArtForum} alt='Форум художников'/>
              <p className={styles.projTitle}>Форум художников</p>
            </div>
          </NavLink>
        
          <NavLink to={LOGO_ROUTE} aria-label='Открыть проект: Пак логотипов'>
            <div className={styles.lowProj}>
              <div className={styles.yellowGrad}/>
              <p className={styles.types}>Логотипы</p>
              <img loading='lazy' decoding='async' src={Neko} alt='Пак логотипов'/>
              <p className={styles.projTitle}>Пак логотипов</p>
            </div>
          </NavLink>
        </div>

        <div className={styles.module}>
          <NavLink to={STUDIO_ROUTE} aria-label='Открыть проект: Студия маникюра Korea Nails'>
            <div className={styles.lowProj}>
              <div className={styles.lightBlueGrad}/>
              <p className={styles.types}>Веб-дизайн</p>
              <img loading='lazy' decoding='async' src={KoreaNails} alt='Korea Nails'/>
              <p className={styles.projTitle}>Студия маникюра «Korea Nails»</p>
            </div>
          </NavLink>

          <NavLink to={DIAMOND_ROUTE} aria-label='Открыть проект: Алмазная мозаика'>
            <div className={styles.lowProj}>
              <div className={styles.blackGrad}/>
              <p className={styles.types}>Иллюстрации</p>
              <img loading='lazy' decoding='async' src={DiamondCanvas} alt='Алмазная мозаика'/>
              <p className={styles.projTitle}>Алмазная мозаика</p>
            </div>
          </NavLink>
        </div>

        <NavLink to={ANOTHERONE_ROUTE} aria-label='Открыть подборку: Другие дизайны, макеты и наброски'>
          <div className={styles.highProj}>
            <div className={styles.orangeGrad}/>
            <p className={styles.typesHigh}>Подборка</p>
            <img loading='lazy' decoding='async' src={water} alt='Другие работы'/>
            <p className={styles.projTitleHigh}>Другие дизайны, макеты и наброски</p>
          </div>
        </NavLink>
        
        <div className={styles.module}>
          <NavLink to={ANOTHERTWO_ROUTE} aria-label='Открыть подборку: Другие дизайны, макеты и наброски 2'>
            <div className={styles.lowProj}>
              <div className={styles.blackGrad}/>
              <p className={styles.types}>Подборка</p>
              <img loading='lazy' decoding='async' src={anotherTwoo} alt='Другие работы 2'/>
              <p className={styles.projTitle}>Другие дизайны, макеты и наброски 2</p>
            </div>
          </NavLink>

          <NavLink to={ANOTHERTHREE_ROUTE} aria-label='Открыть подборку: Другие дизайны, макеты и наброски 3'>
            <div className={styles.lowProj}>
              <div className={styles.blackGrad}/>
              <p className={styles.types}>Подборка</p>
              <img loading='lazy' decoding='async' src={anotherThreee} alt='Другие работы 3'/>
              <p className={styles.projTitle}>Другие дизайны, макеты и наброски 3</p>
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Projects
