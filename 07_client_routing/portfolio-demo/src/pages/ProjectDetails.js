import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectListItem from '../components/ProjectListItem'

function ProjectDetails() {
  const { id } = useParams()
  const [ project, setProject ] = useState({})
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
    .then(res => res.json())
    .then(data => setProject(data))
  }, [])

  //2. make show (SHOW - fetch one thing, /:id) request

  
  return (
    <div>
      <ProjectListItem project={project} />
    </div>
    //3. refactor to make use of ProjectListItem component
  )
}

export default ProjectDetails