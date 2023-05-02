import { useState } from 'react'
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";

function App() {

  //initialize darkMode state
  const [darkMode, setDarkMode] = useState(true)

  //call this whatever you want
  //may be passed down as prop (see later lectures)
  const handleClick = () => {
    //if you are basing new state off of previous state
    setDarkMode(prevDarkMode => !prevDarkMode)

    //if new state is NOT based off previous state
    //just pass in the new value
    //setDarkMode("skdfj")
  }

  //on<eventname>
  //there will be an onEvent for every native DOM event
  return (
    <div className={darkMode ? "App" : "App light"}>
      <Header />
      <button onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <ProjectForm />
      <ProjectList projects = {projects}/>
    </div>
  );
}

// create state -> 
// loads JSX / view (dark mode) -> 
// person fires onClick ->
// state gets updated ->
// component re-renders/updates ->
// light mode

export default App;
