import { useState } from 'react'
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

	const [phase, setPhase] = useState(0)

	const handleClick = (num) => {
		setPhase(num)
	}

	const filteredProjects = projects.filter(el => {
		return (el.phase === phase || phase === 0)
	})

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				<button onClick={() => handleClick(0)}>All</button>
				<button onClick={() => handleClick(5)}>Phase 5</button>
				<button onClick={() => handleClick(4)}>Phase 4</button>
				<button onClick={() => handleClick(3)}>Phase 3</button>
				<button onClick={() => handleClick(2)}>Phase 2</button>
				<button onClick={() => handleClick(1)}>Phase 1</button>
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
