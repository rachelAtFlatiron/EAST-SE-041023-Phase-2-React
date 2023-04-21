import React from "react";

function ProjectListItem({ project }) {
    /* deliverables 3 and 4*/
	let { name, about, image, claps, link, phase } = project;
	return (
		<li className="card">
			<figure className="image">
				<img src={image} alt={name} />
				<button className="claps">👏{claps}</button>
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
