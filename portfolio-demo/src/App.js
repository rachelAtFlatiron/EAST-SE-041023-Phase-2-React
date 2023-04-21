import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProjectsPage from "./pages/ProjectsPage";
import Home from "./pages/Home";
import About from './pages/About';
import ProjectDetails from "./pages/ProjectDetails";
import CreateProjectForm from "./form-components/CreateProjectForm";
import EditProjectForm from "./form-components/EditProjectForm";

import UserContext from './contexts/UserContext'
import { ProjectContext, CustomProjectProvider } from "./contexts/ProjectContext";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<CustomProjectProvider>
		<UserContext.Provider value="Rachel">
		<div className={darkMode ? "App" : "App light"}>
			<Header
				darkMode={darkMode}
				updateDarkMode={() => setDarkMode((prev) => !prev)}
			/>

			{/* <ProjectsPage /> */}

			<Routes>
				<Route exact path="/home" element={<Home />} />
				<Route path = "/about" element={<About />} />
				<Route exact path="/new" element={<CreateProjectForm />} />
				<Route exact path="/projects" element={<ProjectsPage />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
				<Route path="/projects/:id/edit" element={<EditProjectForm />} />
				<Route exact path="/" element={<Home />} />
 			</Routes>
		</div>
		</UserContext.Provider>
		</CustomProjectProvider>
	);
	

	// return (
	// 	<div className={darkMode ? "App" : "App light"}>

	// 		<Header
	// 			updateDarkMode={() => setDarkMode(prev => !prev)}
	// 			darkMode={darkMode}
	// 		/>

	// 		<section>
	// 			{
	// 				editFormProject ? <EditProjectForm project={editFormProject} updateProjects={updateProjects}/> : null
	// 			}
	// 			<CreateProjectForm createProject = {createProject} />
	// 		</section>

	// 		<section>
	// 			<ProjectList
	// 				projects={projects}
	// 				updateEditFormProject = {(project) => setEditFormProject(project)}
	// 				updateProjects = {updateProjects}
	// 				deleteProject = {deleteProject}
	// 			/>
	// 		</section>

	// 	</div>
	// );
}

export default App;
