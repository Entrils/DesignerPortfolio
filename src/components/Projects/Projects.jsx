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
      <div className={styles.title}><img className={styles.image} src={titlerBlack} alt='Разделитель'/>ПРОЕКТЫ</div>
      <div className={styles.description}>Designed by Semenova Mary.</div>
      <div className={styles.content}>

        <div className={styles.module}>
          <NavLink to={FORUM_ROUTE}>
            <div className={styles.lowProj}>
              <div className={styles.blueGrad}/>
              <p className={styles.types}>Web Design</p>
              <img src={ArtForum} alt='Artist Forum'/>
              <p className={styles.projTitle}>Форум Художников</p>
            </div>
          </NavLink>
        
          <NavLink to={LOGO_ROUTE}>
            <div className={styles.lowProj}>
              <div className={styles.yellowGrad}/>
              <p className={styles.types}>Logotypes</p>
              <img src={Neko} alt='Пак логотипов'/>
              <p className={styles.projTitle}>Пак логотипов</p>
            </div>
          </NavLink>
        </div>

          <div className={styles.module}>
        <NavLink to={STUDIO_ROUTE}>
        <div className={styles.lowProj}>
          <div className={styles.lightBlueGrad}/>
          <p className={styles.types}>Web Design</p>
          <img src={KoreaNails} alt='Korea Nails'/>
          <p className={styles.projTitle}>Студия маникюра «Korea Nails»</p>
        </div>
        </NavLink>

        <NavLink to={DIAMOND_ROUTE}>
        <div className={styles.lowProj}>
          <div className={styles.blackGrad}/>
          <p className={styles.types}>Diamonds</p>
          <img src={DiamondCanvas} alt='Diamond Canvas'/>
          <p className={styles.projTitle}>Алмазная мозаика</p>
        </div>
        </NavLink>
          </div>


        <NavLink to={ANOTHERONE_ROUTE}>
        <div className={styles.highProj}>
          <div className={styles.orangeGrad}/>
          <p className={styles.typesHigh}>Прочее</p>
          <img src={water} alt='AnotherOne'/>
          <p className={styles.projTitleHigh}>Другие дизайны, макеты и наброски </p> 
        </div>
        </NavLink>
        
        <div className={styles.module}>
        <NavLink to={ANOTHERTWO_ROUTE}>
        <div className={styles.lowProj}>
          <div className={styles.blackGrad}/>
          <p className={styles.types}>Прочее</p>
          <img src={anotherTwoo} alt='AnotherTwo'/>
          <p className={styles.projTitle}>Другие дизайны, макеты и наброски 2</p>
        </div>
        </NavLink>

        <NavLink to={ANOTHERTHREE_ROUTE}>
        <div className={styles.lowProj}>
          <div className={styles.blackGrad}/>
          <p className={styles.types}>Прочее</p>
          <img src={anotherThreee} alt='AnotherThree'/>
          <p className={styles.projTitle}>Другие дизайны, макеты и наброски 3</p>
        </div>
        </NavLink>

        </div>
      </div>
      </div>
  )
}
