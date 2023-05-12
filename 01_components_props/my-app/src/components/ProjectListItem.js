import React from "react";

function ProjectListItem({ oneProject }) {
	return (
		<li className="card">
			<figure className="image">
				<img src={oneProject.image} alt={oneProject.name} />
				<button className="claps">👏{oneProject.claps}</button>
			</figure>
			<section className="details">
				<h4>{oneProject.name}</h4>
				<p>{oneProject.about}</p>
				<p>
					<a href={oneProject.link}>Link</a>
				</p>
			</section>

			<footer className="extra">
				<span className="badge blue">Phase {oneProject.phase}</span>
			</footer>
		</li>
	);
}

export default ProjectListItem;
