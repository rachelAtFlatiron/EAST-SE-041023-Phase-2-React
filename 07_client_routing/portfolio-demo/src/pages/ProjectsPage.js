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

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FOR DELETE REQUEST IN PROJECTLISTITEM.JS
    const deleteProject = (project) => {
      //remove project from projects state
      setProjects(
        [...projects].filter(el => 
          project.id === el.id ? false : true
        )
      )
    }


  return (
    <div>
      <ProjectList projects={projects} deleteProject={deleteProject} />
    </div>
  )
}

export default ProjectsPage