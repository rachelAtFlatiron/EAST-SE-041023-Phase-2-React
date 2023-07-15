import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
//all pages to be used as routes
import Home from './pages/Home'
import About from './pages/About'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'
import ProjectDetails from './pages/ProjectDetails'
import ProjectsPage from './pages/ProjectsPage'

/*
  1. Create Routes to each component in App.js
    - wrap App in BrowserRouter
    - ***can still pass props to elements in Route component

  2. Create Links to each route's path
    - (probably in header, but this can be done anywhere)
  
  3. use string interpolation to pass in parameter to each path
    - useParams() to get that information...make a fetch request, whatever else
  
  4. redirect use USENAVIGATE()
    - import useNavigate
    - create instance of useNavigate: const navigate = useNavigate()
    - somewhere in code: navigate("/path")

  5. headache of refactoring
*/

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])
  const [ projectToEdit, setProjectToEdit ] = useState({})

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~USE EFFECT TO GET PROJECTS ON PAGE LOAD
  //move to ProjectsPage
  useEffect(() => {
    loadProjects()
  }, []) 

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SET DARK MODE
  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JSX
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      {/* <ProjectForm addProject={addProject} />
      <ProjectEditForm projectToEdit={projectToEdit} editProject={editProject}/>
      <ProjectList projects={projects} updateProjectToEdit={updateProjectToEdit} editProject={editProject} deleteProject={deleteProject} /> */}
      {/* 3. create routes for all pages -> ProjectsPage.js */}
      <Routes>
      <Route path="/projects/:id/edit" element={<EditProject />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage  />} />
        <Route path="/new" element={<CreateProject />} />
      </Routes>
    </div>
  );
}


export default App;
