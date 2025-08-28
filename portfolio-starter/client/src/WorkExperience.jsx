import React from 'react'
import astros from './assets/astros.png'
import tmss from './assets/tmss.png'

export default function WorkExperience(){
  const entries = [
        {
      id: 2,
      company: 'Astros BD',
      role: 'Freelance Full-Stack Developer',
      period: 'May 2024 - August 2024',
      desc: 'Worked with a client on contract to develop and maintain a real-time auctioning website focused on high-intensity 30-minute auctions for 2-5 items at a time. Personally handled the entire development, debugging, and deployment process and established a stable, scalable, and user-friendly website.',
      logo: astros
    },
    {
      id: 1,
      company: 'TMSS',
      role: 'Software Engineer',
      period: 'January 2024 - May 2024',
      desc: 'Worked on optimization of the internal workings of the company, automating a manual entry process saving time for 200+ employees and improving data integrity. Rewrote inefficient database queries in SQL to reduce API response time and latency by 40%.' ,
      logo: tmss
    }
  ]

  return (
    <section className="section work" id="work">
      <div className="work-inner">
        <h2 className="section-title">Work Experience</h2>
        <div className="work-list">
          {entries.map(e => (
            <div className="work-entry" key={e.id}>
              <div className="logo" aria-hidden>
                {/* logo image: keep as jpg/png — CSS tinting applied in styles */}
                <img src={e.logo} alt={`${e.company} logo`} />
                <div className="logo-tint" />
              </div>
              <div className="details">
                <div className="company-row">
                  <h3 className="company">{e.company}</h3>
                  <div className="period">{e.period}</div>
                </div>
                <div className="role">{e.role}</div>
                <p className="desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
