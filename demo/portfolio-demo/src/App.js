import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import projects from "./projects.js";

//✅ 1. create a dark mode button in App
function App() {
	//✅ 1a. initialize darkMode state
	const [darkMode, setDarkMode] = useState(true);

  //✅ 1b. callback to toggle and set dark mode state
	//🛑 can call this function whatever you want
	const handleClick = () => {
		//🛑 if you are basing new state off of previous state
		//🛑 otherwise pass in the new value: setDarkMode("hello")
		setDarkMode((prevDarkMode) => !prevDarkMode);
	};

	//🛑 on<eventname>
	//🛑 MDN docs: there will be an onEvent for nearly every native DOM event
	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header />
      {/*✅ 1c. add click event to button*/}
			<button onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
			<ProjectForm />
			<ProjectList projects={projects} />
		</div>
	);
}
//🛑 create state -> render -> event -> update state -> re-render -> ...

export default App;
