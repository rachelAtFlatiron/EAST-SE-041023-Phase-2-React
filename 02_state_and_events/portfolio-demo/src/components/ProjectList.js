import { useState } from 'react'
import ProjectListItem from "./ProjectListItem";

/*

1. import useState
2. initialized state to 0 (represent all projects)
3. written updatePhase which will setPhase based on argument
4. passed in updatePhase as the callback function for onClick
5. created a filteredProjects array to contain only projects that match phaseState

*/

function ProjectList({ projects }) {

	//phase represents number to match projects.phase === phase
	//initial state is 0, 0 will represent all projects
	const [phaseState, setPhase] = useState(0)


	//recreated every time component re-renders
	const filteredProjects = projects.filter(project => 
		//one line of code, so don't need curly braces and explicit return statement
		phaseState === 0 || project.phase === phaseState
	)

	//callback function to be used in onClick events
	// const updatePhase = (phaseNumber) => {
	// 	setPhase(phaseNumber)
	// }
	function updatePhase(phaseNumber) {
		setPhase(phaseNumber)
	}

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
				{/* instead of ALL projects, we only want filtered projects */}
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
