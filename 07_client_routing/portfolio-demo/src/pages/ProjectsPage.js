import { useState, useEffect } from 'react'
import ProjectList from '../components/ProjectList'

//4. refactor to include project list, filtering, searching
function ProjectsPage() {
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  return (
    <div>
      <ProjectList projects={projects} />
    </div>
    //6. make ProjectListItem for each project -> ProjectListItem


  )
}

export default ProjectsPage