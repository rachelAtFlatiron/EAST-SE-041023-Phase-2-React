import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import ProjectList from "../components/ProjectList";
// import CreateProjectForm from "./form-components/CreateProjectForm";
// import EditProjectForm from "../form-components/EditProjectForm";

import { ProjectContext } from "../contexts/ProjectContext";

function ProjectsPage() {
	const [projects, setProjects] = useState([]);
	// const [editFormProject, setEditFormProject] = useState(null);

	const ctx = useContext(ProjectContext)

	console.log(`hi this is projectContext from ProjectsPage.js ${ctx}`)
	
	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = () => {
		fetch("/projects")
			.then((res) => res.json())
			.then((data) => setProjects(data));
	};

	// const updateProjects = (project) => {
	// 	console.log(project);
	// 	setProjects(
	// 		projects.map((el) => {
	// 			if (el.id !== project.id) {
	// 				return el;
	// 			}
	// 			return project;
	// 		})
	// 	);
	// 	setEditFormProject(null);
	// };

	// const createProject = (project) => {
	// 	console.log(project);
	// 	setProjects([...projects, project]);
	// };

	const deleteProject = (project) => {
		console.log(project);
		setProjects(projects.filter((el) => el.id !== project.id));
	};

	return (
		<div>
			<section>
				{/* {editFormProject ? (
					<EditProjectForm
						project={editFormProject}
						updateProjects={updateProjects}
					/>
				) : null} */}
                <Link to={"/new"} > Add New Project </Link>
			</section>

			<section>
				<ProjectList
					projects={projects}
					// updateEditFormProject={(project) => setEditFormProject(project)}
					// updateProjects={updateProjects}
					deleteProject={deleteProject}
				/>
			</section>
		</div>
	);
}

export default ProjectsPage;
