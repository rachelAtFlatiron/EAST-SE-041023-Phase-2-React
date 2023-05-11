import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import ProjectEditForm from './components/ProjectEditForm';
import Home from './pages/Home'
import About from './pages/About'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'
import ProjectDetails from './pages/ProjectDetails'
import ProjectsPage from './pages/ProjectsPage'

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])
  const [ projectToEdit, setProjectToEdit ] = useState({})

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~USE EFFECT TO GET PROJECTS ON PAGE LOAD
  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SET PROJECTOTEDIT TO PRE-POPULATE EDIT FORM
  //triggered on ProjectListItem onClick
  const updateProjectToEdit = (project) => {
    setProjectToEdit(project)
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SET DARK MODE
  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PATCH REQUEST
  //needed in both ProjectListItem (for claps) and ProjectEditForm
  //params: fromProjectEditForm {...}
  const editProject = (fromProjectEditForm) => {

    fetch(`http://localhost:4000/projects/${fromProjectEditForm.id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				...fromProjectEditForm,
				phase: parseInt(fromProjectEditForm.phase),
				claps: parseInt(fromProjectEditForm.claps)
			}),
			headers: {
				'content-type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(data => {
			//set projects state
			setProjects(
        [...projects].map(el => {
          return el.id === fromProjectEditForm.id ? fromProjectEditForm : el
        })
      )
      //only do inside of fetch statement in case fetch fails
      setProjectToEdit({})
		})
   
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FOR POST REQUEST IN PROJECTFORM.JS
  const addProject = (project) => {
    setProjects([...projects, project])
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
  
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JSX
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectEditForm projectToEdit={projectToEdit} editProject={editProject}/>
      <ProjectList projects={projects} updateProjectToEdit={updateProjectToEdit} editProject={editProject} deleteProject={deleteProject} />
    </div>
  );
}


export default App;
