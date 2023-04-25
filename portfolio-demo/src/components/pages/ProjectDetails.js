import { useContext } from 'react'
import { useLocation, Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { ProjectContext } from "../../contexts/ProjectContext";

function ProjectDetails() {
	
	const ctx = useContext(ProjectContext)

	const location = useLocation();
	const { project } = location.state;

	const handleClaps = () => {
		ctx.updateProject(project.id, {...project, claps: parseInt(project.claps + 1)})
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
