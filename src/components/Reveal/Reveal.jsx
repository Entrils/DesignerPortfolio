import React, { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

export default function Reveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.unobserve(entry.target)
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={nodeRef}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
