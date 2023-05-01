import React from 'react'

function ProjectList({allProjects}) {
//[ {..}, {..}, {..}]

  return (
    <ul>
      {allProjects.map(el => {
        return<li className="card" key={el.id}>
        <figure className="image">
            <img src={el.image} alt={el.name} />
            <button className="claps">👏{el.claps}</button>
        </figure>
        <section className="details">
            <h4>{el.name}</h4>
            <p>{el.about}</p>
            <p>
                <a href={el.link}>Link</a>
            </p>
        </section>
    
        <footer className="extra">
            <span className="badge blue">Phase {el.phase}</span>
        </footer>
    </li>
      }
    )}
    </ul>
  )
}

export default ProjectList