import React, { useState } from 'react'
import mf from '../../assets/mf/MainFrame.png'
import styles from './MainFrame.module.css'

export const MainFrame = () => {
  const [frameStyle, setFrameStyle] = useState({
    '--rx': '0deg',
    '--ry': '0deg',
    '--rtx': '0deg',
    '--rty': '0deg'
  })

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const rotateY = (x - 0.5) * 6
    const rotateX = (0.5 - y) * 4
    const rotateTextY = (x - 0.5) * 3.5
    const rotateTextX = (0.5 - y) * 2.5
    setFrameStyle({
      '--rx': `${rotateX.toFixed(2)}deg`,
      '--ry': `${rotateY.toFixed(2)}deg`,
      '--rtx': `${rotateTextX.toFixed(2)}deg`,
      '--rty': `${rotateTextY.toFixed(2)}deg`
    })
  }

  const handleLeave = () => {
    setFrameStyle({
      '--rx': '0deg',
      '--ry': '0deg',
      '--rtx': '0deg',
      '--rty': '0deg'
    })
  }

  return (
    <div
      className={styles.container}
      style={frameStyle}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <img src={mf}
      alt='Main portfolio showcase'
      fetchpriority='high'
      decoding='sync'
      className={styles.image}></img>
      <div className={styles.textContainer}>
        <p className={styles.text}>WEB</p>
          <p className={styles.midText}>PORTFOLIO</p>
          <p className={styles.text}>UI/UX</p>
        </div>
    </div>
  ) 
}
