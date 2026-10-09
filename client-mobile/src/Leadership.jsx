import React from 'react'
import esclogo from './assets/org-logos/ESC logo.jpg'
import scailogo from './assets/org-logos/scai_logo.jpg'
import sglogo from './assets/org-logos/sg_logo.jpeg'
import acmlogo from './assets/org-logos/acm_logo.jpg'

export default function Leadership(){
  const activities = [
    { id: 1, title: 'President', org: 'Students in Computing & AI (SCAI)', period: 'August 2026 - Present', summary: 'Managing development of all SCAI projects', detail: '• Directing an executive board of 6 officers to oversee operations, budget allocations, and campus events\n• Serving as the primary spokesperson, managing partnerships with university administration and local businesses.\n• Coordinating the logistics, marketing, and project development.', img: scailogo },
    { id: 2, title: 'Director of ACM Educate', org: 'ACM UTA', period: 'August 2024 - Present', summary: 'Hackathon participant', detail: '• Co-directing the Educate committee of ACM ensuring smooth educational opportunities are offered on a week-by-week basis\n• Coordinating student-led workshops and leetcode sessions educating participants on relevant material. \n• Leading workshops on highly relevant theoretical and practical concepts transforming personal experience into real-world impact.', img: acmlogo },
    { id: 3, title: 'Outreach Co-chair', org: 'Enginering Student Council (ESC)', period: 'August 2025 - Present', summary: 'Leading the outreach efforts of ESC', detail: '• Reaching out to industry professionals regarding speaker and professional development event opportunities\n• Collaborating with other student organizations to harbor and foster an inter-disciplinary culture at UTA\n• Managing the JCEO, an inter-discplinary student organization mission for collaboration', img: esclogo },
    { id: 4, title: 'Supreme Court Justice', org: 'UTA Student Government', period: 'October 2025 - Present', summary: 'Served on the Supreme Court of UTA Student Government deliberating on important campus issues', detail: '• Made decisions on RSO (registered student organization) fund allocation to encourage a more lively campus\n• Responsible for internal dispute management such as impeachments \n• Participated in campus elections gaining around 600 votes running for Vice President', img: sglogo },
    { id: 5, title: 'Engineering Senator', org: 'UTA Student Government', period: 'August 2024 - September 2025', summary: 'Represented the voice of engineering students', detail: '• Authored 4 resolutions, one of which passed about accepting A levels for credits.\n• Performed research and deliberated on 25+ resolutions making informed decisions about campus life\n• Represented the voice of Engineering students so the best interests of my constituents were maintained.', img: sglogo },
  ]

  return (
    <section className="section work" id="leadership">
      <div className="work-inner">
        <h2 className="section-title">Leadership & Involvement</h2>
        <div className="work-list">
          {activities.map(a => (
            <div className="work-entry" key={a.id}>
              <div className="logo-period-row">
                <div className="logo" aria-hidden>
                  {a.img ? <img src={a.img} alt={`${a.title} logo`}/> : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent1)',fontWeight:700}}>IMG</div>}
                  <div className="logo-tint" />
                </div>
                <div className="period">{a.period}</div>
              </div>
              <div className="details">
                <div className="company-row">
                  <h3 className="company">{a.title}</h3>
                </div>
                <div className="role">{a.org}</div>
                <p className="desc">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
