import React, { Suspense, lazy } from 'react'
import { MainFrame } from '../../components/MainFrame/MainFrame'
import { Navbar } from '../../components/Navbar/Navbar'
import Reveal from '../../components/Reveal/Reveal'

const About = lazy(() => import('../../components/About/About'))
const Skills = lazy(() => import('../../components/Skills/Skills'))
const Projects = lazy(() => import('../../components/Projects/Projects'))

export default function MainPage() {
  return (
    <main>
      <Navbar/>
      <Reveal>
        <MainFrame/>
      </Reveal>
      <Reveal delay={100}>
        <Suspense fallback={null}>
          <About/>
        </Suspense>
      </Reveal>
      <Reveal delay={170}>
        <Suspense fallback={null}>
          <Skills/>
        </Suspense>
      </Reveal>
      <Reveal delay={220}>
        <Suspense fallback={null}>
          <Projects/>
        </Suspense>
      </Reveal>
    </main>
  )
}
