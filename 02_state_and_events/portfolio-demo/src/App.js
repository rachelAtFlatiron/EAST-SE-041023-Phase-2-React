import { useState } from "react"; //import usestate
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";

function App() {
  //~~~~~~~~~~~~~NUMBER ONE~~~~~~~~~~~~~
	let [darkMode, setDarkMode] = useState(true);

	function updateDarkMode() {
		//TODO: example set state directly - don't forget to change state to 'let'
		/*
      darkMode = !darkMode
      console.log(darkMode)
    */
		setDarkMode(prev => !prev)
	}

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header />
			<button onClick={() => updateDarkMode()}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
      { /*show updating in function and inline */ }
			{/* <button onClick={() => setDarkMode(prev => !prev)}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button> */}
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}

export default App;
