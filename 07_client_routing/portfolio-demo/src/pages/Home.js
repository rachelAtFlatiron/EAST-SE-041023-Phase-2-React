import { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import ProjectListItem from '../components/ProjectListItem'

function Home() {

  const [topFive, setTopFive] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/projects?_sort=claps&_order=desc&_limit=5')
    .then(res => res.json())
    .then(data => setTopFive(data))
  }, [])

  return (
    <section className="box">
    <h2>Hey!  View Awesome Projects.</h2>
    <p>
        Looking for someone to hire? Check out these awesome projects from
        Flatiron students.
    </p>

    <div style={{ margin: "60px 0" }}>
        {/* create link to project page */}
        <Link to={"/projects"}>
          <button className="button" >
              View All Projects
          </button>
        </Link>
        {
          topFive.map(el => <ProjectListItem project={el} />)
        }

    </div>

    

</section>
  )
}

export default Home