import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";


/*
inverse flow

1. parent component
- create state
- create callback that updates state

2. parent -> child
- pass down state
- pass down callback

3. child -> parent
- child triggers callback (through an event)
- results in setState in parent
- results in a state change -> re-render
*/


function App() {

  const [darkMode, setDarkMode] = useState(true)
  //has to be [] because we call .filter on projects in ProjectList.js
  const [ projects, setProjects ] = useState([])

  const [phaseState, setPhase] = useState(0)

  function updatePhase(phaseNumber) {
		setPhase(phaseNumber)
	}


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
      <ProjectList phaseState={phaseState} updatePhase={updatePhase} projects={projects}/>
    </div>
  );
}


export default App;
