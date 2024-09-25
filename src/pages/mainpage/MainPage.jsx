import React from 'react'
import { MainFrame } from '../../components/MainFrame/MainFrame'
import { About } from '../../components/About/About'
import { Skills } from '../../components/Skills/Skills'
import { Projects } from '../../components/Projects/Projects'

export default function MainPage() {
  return (
    <div>
      <MainFrame/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}
