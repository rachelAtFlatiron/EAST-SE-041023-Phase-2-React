//1. import useState
import { useState } from "react";

function ProjectListItem({ project }) {
	//project.claps
	let { name, about, image, claps, link, phase } = project;

	//2. create state
	// set to claps aka project.claps so that it is aligned with our data
	const [projectClaps, setProjectClaps] = useState(claps)

	//3. create callback function
	const handleClap = () => {
		//projectClaps = projectClaps + 1
		//projectClaps += 1

		//4. update state
		setProjectClaps(prevProjectClaps => prevProjectClaps + 1)
	}

	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				{ /* 5. create event handler */ }
				<button onClick={handleClap} className="claps">👏{projectClaps}</button>
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
			</footer>
		</li>
	);
}

export default ProjectListItem;
