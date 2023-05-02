import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const handleClick = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header />
      <button onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <ProjectForm />
      <ProjectList projects = {projects}/>
    </div>
  );
}


export default App;
