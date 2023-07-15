import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [phaseState, setPhase] = useState(0);

	const filteredProjects = projects.filter(
		(project) => {
			return (
				(phaseState === 0 || project.phase === phaseState) &&
				(searchQuery === '' || project.name.toLowerCase().includes(searchQuery.toLowerCase()))
			)
		}
	);

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
				<button onClick={() => setPhase(0)}>All</button>
				<button onClick={() => setPhase(5)}>Phase 5</button>
				<button onClick={() => setPhase(4)}>Phase 4</button>
				<button onClick={() => setPhase(3)}>Phase 3</button>
				<button onClick={() => setPhase(2)}>Phase 2</button>
				<button onClick={() => setPhase(1)}>Phase 1</button>
			</div>
			<input
				type="text"
				placeholder="Search..."
				name="search"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<ul className="cards">
				{filteredProjects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
