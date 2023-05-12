import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProjectEditForm from '../components/ProjectEditForm'

//10. refactor so edit form is here
function EditProject({ editProject }) {
  const [project, setProject] = useState({})
  //11. pass in params to access id
  const { id } = useParams()


  //12. make fetch SHOW to get current project
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
    .then(res => res.json())
    .then(data => setProject(data))
  }, [])

  //14. make PATCH request


  
  return (
    <ProjectEditForm projectToEdit={project} editProject={editProject} />
    //13. make controlled form
  )
}

export default EditProject