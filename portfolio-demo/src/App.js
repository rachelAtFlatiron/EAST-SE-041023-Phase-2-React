import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomProjectProvider } from "./contexts/ProjectContext";

import Header from "./components/Header";
import ProjectsPage from "./components/pages/ProjectsPage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectDetails from "./components/pages/ProjectDetails";
import CreateProjectForm from "./components/form-components/CreateProjectForm";
import EditProjectForm from "./components/form-components/EditProjectForm";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? "App" : "App light"}>
			<Header
				darkMode={darkMode}
				updateDarkMode={() => setDarkMode((prev) => !prev)}
			/>

			<CustomProjectProvider>
				<Routes>
					<Route exact path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route exact path="/new" element={<CreateProjectForm />} />
					<Route exact path="/projects" element={<ProjectsPage />} />
					<Route path="/projects/:id" element={<ProjectDetails />} />
					<Route path="/projects/:id/edit" element={<EditProjectForm />} />
					<Route exact path="/" element={<Home />} />
				</Routes>
			</CustomProjectProvider>
		</div>
	);
}

export default App;
