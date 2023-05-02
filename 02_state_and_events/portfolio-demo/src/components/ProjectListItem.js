import { useState } from "react";

function ProjectListItem({ project }) {

	
	let { name, about, image, claps, link, phase } = project;
	
	//ask what projectClaps shoud be set to
	const [projectClaps, setProjectClaps] = useState(claps)

	function updateProjectClaps () {
		setProjectClaps( prev => prev + 1)
	}
	
	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				{/* <button onClick={() => updateProjectClaps()} className="claps">👏{projectClaps}</button> */}
				<button onClick={() => setProjectClaps(prev => prev+1)} className="claps">👏{projectClaps}</button>
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
