import React from 'react'
import django from './assets/django.png'
import aws from './assets/aws.png'

// Use jsDelivr CDN for devicon/svg and simple-icons where available (more reliable)
const languages = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
]

const frameworks = [
  // Force local PNG for Django; disable SVG/CDN fallback to avoid glitches
  { name: 'Django', logo: null },
  { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
]

const ai = [
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'NLTK', logo: null } // render text-only if local PNG not provided
]

const devops = [
  // Force local PNG for AWS; disable SVG/CDN fallback to avoid glitches
  { name: 'AWS', logo: null },
  { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'Cloudflare', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-plain.svg' },
  { name: 'Heroku', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg' }
]

const competencies = [
  'Machine Learning & Natural Language Processing (NLP)',
  'Model Optimization & Deployment',
  'Distributed & Scalable Systems',
  'Data Structures & Algorithms',
  'Full-Stack Web Development',
  'Backend Engineering & API Design',
  'Cloud Infrastructure & Deployment',
  'Software Development Lifecycle (SDLC) Management',
  'Linux Server Administration',
  'Database Management'
]

export default function Technologies(){
  const slugify = (name) =>
    name.toLowerCase().replace(/\+/g, 'plus').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  // Use specific local PNG overrides for assets stored directly under /src/assets
  const localOverrides = {
    django: django,
    aws: aws
  }

  return (
    <section className="section tech" id="technologies">
      <div className="tech-inner">
        <h2 className="section-title">Technologies</h2>

        <div className="tech-block">
          <h3 className="subhead">Languages</h3>
          <div className="tech-grid">
            {languages.map(l => {
              const slug = slugify(l.name)
              const pngLocal = localOverrides[slug] || `/src/assets/logos/${slug}.png`
              return (
                <div key={l.name} className="tech-item" title={l.name}>
                  <img src={pngLocal} alt={l.name} onError={(e)=>{ /* try CDN fallback once; else show text */
                      if (l.logo) { e.currentTarget.onerror = null; e.currentTarget.src = l.logo; }
                      else { e.currentTarget.style.display='none'; const fb = e.currentTarget.parentElement.querySelector('.text-fallback'); if(fb) fb.style.display='block'; }
                    }} />
                    <div className="text-fallback" style={{display:'none'}}>{l.name}</div>
                  <div className="label">{l.name}</div>

                </div>
              )
            })}
          </div>
        </div>

        <div className="tech-block">
          <h3 className="subhead">Frameworks</h3>
          <div className="tech-grid">
            {frameworks.map(f => {
              const slug = slugify(f.name)
              const pngLocal = localOverrides[slug] || `/src/assets/logos/${slug}.png`
              return (
                <div key={f.name} className="tech-item" title={f.name}>
                  <img src={pngLocal} alt={f.name} onError={(e)=>{ if (f.logo) { e.currentTarget.onerror=null; e.currentTarget.src = f.logo } else { e.currentTarget.style.display='none'; const fb = e.currentTarget.parentElement.querySelector('.text-fallback'); if(fb) fb.style.display='block'; } }} />
                    <div className="text-fallback" style={{display:'none'}}>{f.name}</div>
                  <div className="label">{f.name}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="tech-block">
          <h3 className="subhead">AI & ML</h3>
          <div className="tech-grid">
            {ai.map(a => {
              const slug = slugify(a.name)
              const pngLocal = localOverrides[slug] || `/src/assets/logos/${slug}.png`
              return (
                <div key={a.name} className="tech-item" title={a.name}>
                  <img src={pngLocal} alt={a.name} onError={(e)=>{ if (a.logo) { e.currentTarget.onerror=null; e.currentTarget.src = a.logo } else { e.currentTarget.style.display='none'; const fb = e.currentTarget.parentElement.querySelector('.text-fallback'); if(fb) fb.style.display='block'; } }} />
                  <div className="label">{a.name}</div>
                  <div className="text-fallback" style={{display:'none'}}>{a.name}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="tech-block">
          <h3 className="subhead">DevOps</h3>
          <div className="tech-grid">
            {devops.map(d => {
              const slug = slugify(d.name)
              const pngLocal = localOverrides[slug] || `/src/assets/logos/${slug}.png`
              return (
                <div key={d.name} className="tech-item" title={d.name}>
                  <img src={pngLocal} alt={d.name} onError={(e)=>{ if (d.logo) { e.currentTarget.onerror=null; e.currentTarget.src = d.logo } else { e.currentTarget.style.display='none'; const fb = e.currentTarget.parentElement.querySelector('.text-fallback'); if(fb) fb.style.display='block'; } }} />
                  <div className="label">{d.name}</div>
                  <div className="text-fallback" style={{display:'none'}}>{d.name}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="tech-block">
          <h3 className="subhead">Core competencies</h3>
          <ul className="competencies">
            {competencies.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
