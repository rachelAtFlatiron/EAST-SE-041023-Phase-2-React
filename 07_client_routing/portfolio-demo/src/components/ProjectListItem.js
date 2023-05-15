import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectListItem({ project, deleteProject }) {
	let { id, name, about, image, claps, link, phase } = project;
	const navigate = useNavigate();

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DELETE PROJECT
	const handleDelete = () => {
		fetch(`http://localhost:4000/projects/${project.id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then(() => {
				deleteProject(project);
				navigate("/projects");
			});
	};

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JSX
	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
			</figure>
			<section className="details">
				{/* 7. create link to project details page */}
				<Link to={`/projects/${id}`}>
					<h4>{name}</h4>
				</Link>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
				<div className="manage">
					{/* 8. make link to EditProject.js */}

					{/* <button onClick={() => updateProjectToEdit(project)}> */}
					<Link to={`/projects/${id}/edit`}>
						<FaPencilAlt />
					</Link>
					{/* </button> */}
					<button onClick={() => handleDelete()}>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
