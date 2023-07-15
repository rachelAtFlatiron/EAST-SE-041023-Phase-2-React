import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectListItem({ project }) {
	let { name, about, image, claps, link, phase } = project;

	const [projectClaps, setProjectClaps] = useState(claps);

	const handleClap = () => {
		setProjectClaps((prevProjectClaps) => prevProjectClaps + 1);
	};

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				<button onClick={handleClap} className="claps">
					👏{projectClaps}
				</button>
			</figure>
			<section className="details">
				<h4>{name}</h4>
				<p>{about}</p>
				<p>
					<a href={link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {phase}</span>
				<div className="manage">
					<button>
						<FaPencilAlt />
					</button>
					<button>
						<FaTrash />
					</button>
				</div>
			</footer>
		</li>
	);
}

export default ProjectListItem;
