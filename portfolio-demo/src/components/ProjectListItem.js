import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectListItem({
	project,
	updateEditFormProject,
	deleteProject,
	updateProjects,
}) {
	const { id, image, about, name, link, phase, claps } = project;

	const [clapCount, setClapCount] = useState(claps);

	const handleDelete = () => {
		//TODO: fetch delete
		fetch(`/projects/${project.id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => deleteProject(project));
	};

	const handleClaps = () => {
		setClapCount((prev) => prev + 1);
		//TODO: fetch patch
		fetch(`/projects/${project.id}`, {
			method: "PATCH",
			body: JSON.stringify({ claps: clapCount + 1 }),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => updateProjects(data));
	};

	return (
		<li className="card">
			{/* <Link to={`/projects/${id}`} > */}
			<figure className="image">
				<img src={image} alt={name} />
				<button className="claps" onClick={handleClaps}>
					👏{clapCount}
				</button>
			</figure>

			<section className="details">
				<Link to={`/projects/${id}`} state={{ project }}>
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
					<Link to={`/projects/${project.id}/edit`} state={{ project }}>
						{/* <button onClick={() => updateEditFormProject(project)}> */}

						<button>
							<FaPencilAlt />
						</button>
					</Link>
					<button onClick={handleDelete}>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
