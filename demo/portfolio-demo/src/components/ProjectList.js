import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

//✅ 3. implement filter by phase feature
function ProjectList({ projects }) {
	//✅ 3b. initialize state to represent phase to filter by
	//🛑 phase represents number to match projects.phase === phase
	//💡 what would a good initial state be?
	const [phaseState, setPhase] = useState(0);

	//✅ 3d. filter projects by phase
	//🛑 recreated every time component re-renders
	const filteredProjects = projects.filter(
		(project) => phaseState === 0 || project.phase === phaseState
	);

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				{/*✅ 3a. create buttons to represent each phase to filter by */}
				{/*✅ 3c. add onclick events to each button to update phase state */}
				<button onClick={() => setPhase(0)}>All</button>
				<button onClick={() => setPhase(5)}>Phase 5</button>
				<button onClick={() => setPhase(4)}>Phase 4</button>
				<button onClick={() => setPhase(3)}>Phase 3</button>
				<button onClick={() => setPhase(2)}>Phase 2</button>
				<button onClick={() => setPhase(1)}>Phase 1</button>
			</div>
			<ul className="cards">
				{/*🛑 instead of ALL projects, we only want filtered projects */}
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
