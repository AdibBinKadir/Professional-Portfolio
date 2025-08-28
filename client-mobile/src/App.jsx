import React, { useEffect, useState } from 'react'
import pngPath from './assets/hero-illustration.png'
import svgPath from './assets/hero-illustration.svg'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import Technologies from './Technologies'
import Footer from './Footer'

export default function App() {
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
    <div className="page" style={{ minHeight: '100vh' }}>
            <div className="hero-right">
                 <img src={imgSrc} alt="hero" />
            </div>
           <div className="snap-root">
             <main className="hero snap-child">
               <div className="hero-left">
                 <h1 className="headline">Adib Bin Kadir</h1>
                 <p className="sub">I am a <span className="link">software engineer</span> with a passion for artificial intellgience, machine learning, and computer vision.</p>
                 <button className="cta muted" onClick={() => window.open('https://github.com/AdibBinKadir', '_blank')}>Visit my Github</button>
               </div>
             </main>


           </div>
           <Projects/>
           <WorkExperience/>
           <Technologies/>
           <Footer/>
    </div>
  );
}