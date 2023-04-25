import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { ProjectContext } from "../contexts/ProjectContext";

function ProjectListItem({project}) {
	const ctx = useContext(ProjectContext);
	const { id, image, about, name, link, phase, claps } = project;

	//state for clap count, don't want to re-render
	//const [clapCount, setClapCount] = useState(claps);

	//delete using context
	const handleDelete = () => {
		ctx.deleteProject(project.id);
	};

	//update using context
	const handleClaps = () => {
		//console.log(id, { claps: clapCount + 1})
		ctx.updateProject(id, { claps: claps + 1 });
	};

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				<button className="claps" onClick={handleClaps}>
					👏{claps}
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
