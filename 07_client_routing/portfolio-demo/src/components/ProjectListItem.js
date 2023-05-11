import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectListItem({ project, editProject, updateProjectToEdit, deleteProject }) {
	let { id, name, about, image, claps, link, phase } = project;

	const [projectClaps, setProjectClaps] = useState(claps);

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PATCH REQUEST FOR CLAPS
	const handleClap = () => {
		editProject({
			...project,
			claps: project.claps + 1
		})
		setProjectClaps((prevProjectClaps) => prevProjectClaps + 1);
	};

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DELETE PROJECT
	const handleDelete = () => {
		fetch(`http://localhost:4000/projects/${project.id}`, {
			method: 'DELETE'
		})
		.then(res => res.json())
		.then(() => deleteProject(project))
	}

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JSX
	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				<button onClick={handleClap} className="claps">
					👏{projectClaps}
				</button>
			</figure>
			<section className="details">
				{/* create link to project details page */}
				<h4>{name}</h4>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
				<div className="manage">
					<button onClick={() => updateProjectToEdit(project)}>
						<FaPencilAlt />
					</button>
					<button onClick={() => handleDelete()}>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
