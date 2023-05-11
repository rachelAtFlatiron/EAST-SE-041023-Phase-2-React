import React from 'react'

function About() {
  return (
    <section className="about">
    <h1>About</h1>
    <p>
        This application showcases a few of the awesome projects built by
        students at the Flatiron School's Software Engineering bootcamp. This
        application features:{" "}
    </p>
    <ul>
        <li>Client Side routing with React Router v5</li>
        <li>Data fetching via JSON server to a db.json file</li>
        <li>Debounced searching via a combination of useState and useEffect</li>
        <li>
            Multiple examples of inverse data flow where a child component invokes
            a callback passed from a parent component that causes an update to the
            parent's state and a subsequent re-render
        </li>
    </ul>
</section>
  )
}

export default About