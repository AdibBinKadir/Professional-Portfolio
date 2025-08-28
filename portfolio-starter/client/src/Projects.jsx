import React, { useState } from 'react'

export default function Projects(){
  const initial = [
  { id: 1, title: 'HealthCentralAI', summary: 'A first-aid chatbot', body: 'A chatbot trained on 200+ professionally annotated medical records to ensure high speed and accuracy for emergency life-threatening scenarios. The project uses Tensorflow and NLTK to train the model which starts off as a h5 model but is converted to tflite for mobile deployment. There is also Gemini API integrated as a fallback option. It\'s hosted on an e2-micro virtual machine on GCP with a Flask backend and uses Cloudflare to handle the TLS/SSL origin certificate.\n\nGithub: https://github.com/AdibBinKadir/HealthCentralAI\n\nLive demo: https://healthcentral.adibkadir.dev' },
    { id: 2, title: 'Astros Auction House', summary: 'A real-time auctioning website', body: 'A high-intensity auction website with site administration, timezone-aware countdown, user-authentication, real-time bidding, and winner confirmation. It uses Django on the backend and uses Django features like Django admin and db sqlite to accomodate majority of the features. The project is hosted on Heroku and uses Cloudflare to handle the TLS/SSL origin certificate.\n\nGithub: https://github.com/AdibBinKadir/Astros-Auction-House\n\nLive demo: https://astros.adibkadir.dev' },
    { id: 3, title: 'Aetherius Strife', summary: 'A turn-based fighting game', body: 'A turn-based fighting game that incorporates strategic elements and character customization. Players can choose from a variety of character archetypes, each with unique abilities and playstyles. It features a complex mechanism against a CPU which I built myself(plan to upgrade it with machine learning later down the line). It is a terminal-based text-based game written fully in C. It was our group project in CSE 1320 and featured a two-person development pair and a two-person documentation pair.\n\nGithub: https://github.com/AdibBinKadir/Aetherius-Strife' },
    { id: 4, title: 'Sentimento', summary: 'Manually trained sentiment detector', body: 'A scoring system that analyzes text and assigns sentiment scores based on both theoretical and practical methods. The theoretical method uses mathematics and discrete structures concepts of conjunction, disjunction, and negation of emotions along with manually annotated emotion words to calculate a manual score in a formal software process written in Python. However, entire sentences are also manually annotated to train an AI model using NLTK and Scikit-learn to predict an AI based practical score. The theoretical score works better for literal and simple emotions whereas the practical score is more effective for nuanced and idiomatic expressions.\n\nGithub: https://github.com/AdibBinKadir/Sentimento' },
    { id: 5, title: 'Grocery Store', summary: 'A comprehensive grocery store', body: 'The group project for CSE 1325 where I took lead on the development and my partner took lead on the documentation. It is the ultimate testament to object-oriented programming principles and design patterns, showcasing our ability to create a scalable and maintainable codebase. It is completely written in Java and features numerous classes and objects to implement all sorts of feature such as user authentication, password encryption, searching and sorting products, placing and storing orders, and restoring temporary user information such as carts accross multiple user logged-in sessions.\n\nGithub: https://github.com/AdibBinKadir/GroceryStore' },
]


  const [expanded, setExpanded] = useState(null)

  function toggle(id){
    setExpanded(prev => prev === id ? null : id)
  }

  return (
    <section className="section projects" id="projects">
      <div className="projects-inner">
        <h2 className="section-title">Projects</h2>
        <div className="cards">
          {initial.map(p => (
            <article key={p.id} className={`card ${expanded === p.id ? 'is-open' : ''}`} onClick={() => toggle(p.id)}>
              <div className="card-header">
                <h3>{p.title}</h3>
                <p className="summary">{p.summary}</p>
              </div>
              <div className="card-body">
                {formatBody(p.body)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helpers: turn \n\n into paragraphs and auto-link URLs, ensuring https:// prefix where missing.
function formatBody(text){
  const paras = text.split(/\n{2,}/)
  return paras.map((para, i) => (
    <p key={i} style={{margin: '0 0 12px 0'}}>{linkify(para)}</p>
  ))
}

function linkify(text){
  const parts = []
  const regex = /(https?:\/\/[^\s]+|(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[\w\-./?%&=+#]*)?)/gi
  let lastIndex = 0
  let m
  while((m = regex.exec(text)) !== null){
    if(m.index > lastIndex){
      parts.push(text.slice(lastIndex, m.index))
    }
    const raw = m[0]
    const href = raw.startsWith('http') ? raw : `https://${raw}`
    parts.push(
      <a key={`${href}-${m.index}`} href={href} target="_blank" rel="noopener noreferrer" onClick={(e)=> e.stopPropagation()} className="link">
        {raw}
      </a>
    )
    lastIndex = regex.lastIndex
  }
  if(lastIndex < text.length){
    parts.push(text.slice(lastIndex))
  }
  return parts
}
