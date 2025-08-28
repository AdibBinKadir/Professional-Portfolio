import React, { useEffect, useState } from 'react'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import Technologies from './Technologies'
import Footer from './Footer'
import svgPath from './assets/hero-illustration.svg'
import pngPath from './assets/hero-illustration.png'

export default function App(){
  const [imgSrc, setImgSrc] = useState(svgPath)

  useEffect(() => {
    // prefer PNG when present (user-supplied transparent PNG)
    fetch(pngPath, { method: 'HEAD' })
      .then(res => { if (res.ok) setImgSrc(pngPath) })
      .catch(() => {})
    // No device detection or body class changes; desktop only
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Adib Bin Kadir</div>
        <nav className="menu">
          <a href="#projects" onClick={(e)=>{e.preventDefault(); scrollToId('projects')}}>Projects</a>
          <a href="#work" onClick={(e)=>{e.preventDefault(); scrollToId('work')}}>Experience</a>
          <a href="#technologies" onClick={(e)=>{e.preventDefault(); scrollToId('technologies')}}>Technologies</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollToId('contact')}}>Contact</a>
        </nav>
      </header>
      <div className="snap-root">
        <main className="hero snap-child">
          <div className="hero-left">
            <h1 className="headline">Software<br/>Engineer</h1>
            <p className="sub">My name is Adib. I am a <span className="link">software engineer</span> with a passion for artificial intellgience, machine learning, and computer vision.</p>
            <button className="cta muted" onClick={() => window.open('https://github.com/AdibBinKadir', '_blank')}>Visit my Github</button>
          </div>
          <div className="hero-right">
            <img src={imgSrc} alt="hero" />
          </div>
        </main>
        <Projects />
        <WorkExperience />
        <Technologies />
      </div>
      <Footer />
    </div>
  )
}
