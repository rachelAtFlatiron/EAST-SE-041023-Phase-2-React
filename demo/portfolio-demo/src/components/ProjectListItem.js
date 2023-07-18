//✅ 3. define ProjectListItem
import React from "react";

//✅ 3a. accept the props argument
// 🛑 (props) vs ({ project })
function ProjectListItem({ project }) {
    //✅ 3b. destructure the props object
	let { name, about, image, claps, link, phase } = project; //props.project
	
	//✅ 3c. display info of project object
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
