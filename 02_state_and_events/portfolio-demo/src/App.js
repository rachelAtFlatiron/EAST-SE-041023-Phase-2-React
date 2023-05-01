import { useState } from 'react' //import usestate
import Header from "./components/Header";
import ProjectList from "./components/ProjectList"
import ProjectForm from "./components/ProjectForm"
import projects from './projects.js'


function App() {
  const [darkMode, setDarkMode] = useState(true)
  
      
  function updateDarkMode() {
    setDarkMode(prev => !prev)
  }

  return (

    
    <div className={darkMode ? 'App' : 'App light'}>
      
      <Header  />
      <button onClick={() => updateDarkMode()}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <ProjectForm />
      <ProjectList projects = {projects}/>
    </div>
  );
}

export default App;
