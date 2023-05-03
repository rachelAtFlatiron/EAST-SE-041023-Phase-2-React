import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects, phaseState, updatePhase }) {
	// const filteredProjectsMap = filteredProjects.map(project => {
	// 	return 	<ProjectListItem key={project.id} project={project} />
	// })


	//move filtering process here because it relies on phaseState
	//which is getting update in this component
	const filteredProjects = projects.filter(
		(project) => phaseState === 0 || project.phase === phaseState
	);

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				<button onClick={() => updatePhase(0)}>All</button>
				<button onClick={() => updatePhase(5)}>Phase 5</button>
				<button onClick={() => updatePhase(4)}>Phase 4</button>
				<button onClick={() => updatePhase(3)}>Phase 3</button>
				<button onClick={() => updatePhase(2)}>Phase 2</button>
				<button onClick={() => updatePhase(1)}>Phase 1</button>
			</div>
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
