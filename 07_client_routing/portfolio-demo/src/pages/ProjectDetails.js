import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectListItem from '../components/ProjectListItem'

function ProjectDetails() {
  const { id } = useParams()
  const [ project, setProject ] = useState({})

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
    .then(res => res.json())
    .then(data => setProject(data))
  }, [])

  return (
    <div>
      <ProjectListItem project={project} />
    </div>
  )
}

export default ProjectDetails