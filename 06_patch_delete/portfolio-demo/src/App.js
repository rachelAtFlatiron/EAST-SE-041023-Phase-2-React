import { useState, useEffect } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [ projects, setProjects ] = useState([])
  
  useEffect(() => {
    loadProjects()
  }, []) 

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }

  const addProject = (project) => {
    setProjects([...projects, project])
  }
  
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects}/>
    </div>
  );
}


export default App;
