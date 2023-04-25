import { createContext, useState, useEffect } from "react";

const ProjectContext = createContext();

const CustomProjectProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		console.log('project context getting projects')
		getProjects()
	}, [])

	const topFive = () => {
		return fetch("/projects?_sort=claps&_order=desc&_limit=5")
		.then(res => res.json())
		.then(data => data)
	}

	const getProjects = () => {
		console.log('project context fetching/setting projects')
		fetch("/projects")
			.then((res) => res.json())
			.then((data) => setProjects(data));
	};

	const deleteProject = (id) => {
		fetch(`/projects/${id}`, {
			method: "DELETE",
		}).then(() => setProjects(projects.filter((el) => el.id !== id)));
	};

	const updateProject = (id, body) => {
		fetch(`http://localhost:8000/projects/${id}`, {
			method: "PATCH",
			body: JSON.stringify(body),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				let temp = [...projects]
				temp = temp.map(el => el.id === data.id ? data : el)
				setProjects(temp);
			})
	};

    const createProject = (body) => {
        return fetch("/projects", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => setProjects(prev => [...prev, data]));

    }

	const projectCtx = {
		topFive,
		getProjects,
		deleteProject,
		updateProject,
        createProject,
		projects,
	};

	return (
		<ProjectContext.Provider value={projectCtx}>
			{children} 
		</ProjectContext.Provider>
	);
};

export { ProjectContext, CustomProjectProvider };
