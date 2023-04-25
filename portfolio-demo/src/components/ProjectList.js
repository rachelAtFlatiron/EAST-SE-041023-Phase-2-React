import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ projects }) {

	const [searchPhase, setSearchPhase] = useState(0);
	const [searchFilter, setSearchFilter] = useState("");

	//get filtered projects
	const filteredProjects = projects.filter(
		(el) =>
			el.name.toLowerCase().includes(searchFilter.toLowerCase()) &&
			(el.phase === searchPhase || searchPhase === 0)
	);

	//on change for search query form
	const handleOnChange = (e) => {
		setSearchFilter(e.target.value);
	};

	return (
		<section>
			<h2>Projects</h2>

			<div className="filter">
				<button onClick={() => setSearchPhase(0)}>All</button>
				<button onClick={() => setSearchPhase(5)}>Phase 5</button>
				<button onClick={() => setSearchPhase(4)}>Phase 4</button>
				<button onClick={() => setSearchPhase(3)}>Phase 3</button>
				<button onClick={() => setSearchPhase(2)}>Phase 2</button>
				<button onClick={() => setSearchPhase(1)}>Phase 1</button>
			</div>
			<input
				type="text"
				placeholder="Search..."
				name="search"
				value={searchFilter}
				onChange={handleOnChange}
			/>
			<ul className="cards">
				{filteredProjects.map((el) => (
					<ProjectListItem
						project={el}
					/>
				))}
			</ul>
		</section>
	);
}
