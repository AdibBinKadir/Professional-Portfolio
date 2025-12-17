import React from 'react'
import esclogo from './assets/org-logos/ESC logo.jpg'
import scailogo from './assets/org-logos/scai_logo.jpg'
import sglogo from './assets/org-logos/sg_logo.jpeg'
import acmlogo from './assets/org-logos/acm_logo.jpg'

export default function Leadership(){
  const activities = [
    { id: 1, title: 'Project Development Lead', org: 'Students in Computing & AI (SCAI)', period: 'September 2025 - Present', summary: 'Managing development of all SCAI projects', detail: '• Leading the development of 3 projects\n• Meeting with stakeholders\n• Mentoring up-and-coming programmers', img: scailogo },
    { id: 2, title: 'Outreach Co-chair', org: 'Enginering Student Council (ESC)', period: 'August 2025 - Present', summary: 'Leading the outreach efforts of ESC', detail: '• Reaching out to industry professionals\n• Collaborating with other student organizations\n• Promoting the organization to new members', img: esclogo },
    { id: 3, title: 'Supreme Court Justice', org: 'UTA Student Government', period: 'October 2025 - Present', summary: 'Serving on the Supreme Court of UTA Student Government', detail: '• Making decisions on RSO (registered student organization) fund allocation\n• Responsible for on-campus dispute management\n• Organized campus elections', img: sglogo },
    { id: 4, title: 'Engineering Senator', org: 'UTA Student Government', period: 'August 2024 - September 2025', summary: 'Represented the voice of engineering students', detail: '• Authored 4 resolutions, one of which was adopted by the senate\n• Performed research and deliberated on countless other resolutions\n• Represented the voice of Engineering students', img: sglogo },
    { id: 5, title: 'General Member', org: 'ACM UTA', period: 'August 2024 - Present', summary: 'Hackathon participant', detail: '• Participated in HackUTA 2024 & 2025\n• Kept up with workshops and events\n• Participating in a number of events', img: acmlogo },
  ];

  return (
    <section className="section work" id="leadership">
      <div className="work-inner">
        <h2 className="section-title">Leadership & Involvement</h2>
        <div className="work-list">
          {activities.map(a => (
            <div className="work-entry" key={a.id}>
              <div className="logo" aria-hidden>
                {a.img ? <img src={a.img} alt={`${a.title} logo`} /> : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent1)',fontWeight:700}}>IMG</div>}
                <div className="logo-tint" />
              </div>
              <div className="details">
                <div className="company-row" style={{marginBottom:'2px'}}>
                  <h3 className="company">{a.title}</h3>
                  <div className="period" style={{marginBottom:0}}>{a.period}</div>
                </div>
                <div className="role" style={{marginTop:0}}>{a.org}</div>
                <p className="desc" style={{marginTop:'6px'}}>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
