import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";


function App() {

  const [darkMode, setDarkMode] = useState(true)
  //has to be [] because we call .filter on projects in ProjectList.js
  const [ projects, setProjects ] = useState([])

  const updateDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const loadProjects = () => {
    fetch('http://localhost:4000/projects')
    .then(res => res.json())
    //setProjects causes view to re-render
    .then(data => setProjects(data))
  }
  
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header handleClick={updateDarkMode} darkMode={darkMode} />
      <ProjectForm />
      <button onClick={loadProjects}>Load Projects</button>
      <ProjectList projects = {projects}/>
    </div>
  );
}


export default App;
