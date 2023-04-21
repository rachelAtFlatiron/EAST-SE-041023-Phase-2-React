import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectDetails() {
	// const [project, setProject] = useState({});
	// const { id } = useParams();

	const location = useLocation();
	const { project } = location.state;

	// useEffect(() => {
	// 	fetch(`/projects/${id}`)
	// 		.then((r) => r.json())
	// 		.then((project) => {
	// 			setProject(project);
	// 		});
	// }, [id]);

	const handleClaps = () => {
		alert("see console");
		console.log("no handle claps for the sake of demonstration");
		console.log("we would have to reuse fetch patch from projectListItem");
		console.log("perhaps we could do this with context");
	};

	return (
		<div className="card project-detail">
			<figure className="image">
				<img src={project.image} alt={project.name} />
				<button className="claps" onClick={handleClaps}>
					👏{project.claps}
				</button>
			</figure>
			<section className="details">
				<h4>{project.name}</h4>
				<p>{project.about}</p>
				<p>
					<a href={project.link}>Link</a>
				</p>
			</section>
			<div className="extra">
				<span className="badge blue">Phase {project.phase}</span>
				<div className="manage">
					<Link to={`/projects/${project.id}/edit`} state={{project}}>
						<button>
							<FaPencilAlt />
						</button>
					</Link>
				</div>
				{/* note no delete for ease of demonstration */}
			</div>
		</div>
	);
}

export default ProjectDetails;
