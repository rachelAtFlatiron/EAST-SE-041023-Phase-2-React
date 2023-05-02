import { useState } from 'react'
import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

	//ask what would be a good starting value
	const [phase, setPhase] = useState(0)

	const handleClick = (num) => {
		setPhase(num)
	}

	//every time phase gets updated
	//code of ProjectList will re-run
	//thus every time phase gets updated filteredProjects will update
	//without needing to put filteredProjects in state
	const filteredProjects = projects.filter(el => {
		return (el.phase === phase || phase === 0)
	})

	return (
		<section>
			<h2>Project List</h2>
			<div className="filter">
<<<<<<< HEAD
				<button onClick={() => handleClick(0)}>All</button>
				<button onClick={() => handleClick(5)}>Phase 5</button>
				<button onClick={() => handleClick(4)}>Phase 4</button>
				<button onClick={() => handleClick(3)}>Phase 3</button>
				<button onClick={() => handleClick(2)}>Phase 2</button>
				<button onClick={() => handleClick(1)}>Phase 1</button>
				{/* can't use for loop, JSX always expects an object to be displayed */}
				{/* {
					[1, 2, 3, 4, 5].map(el => {
						return <button onClick={() => handleClick(el)}>Phase {el}</button>
					})
				} */}
=======
				<button>All</button>
				<button>Phase 5</button>
				<button>Phase 4</button>
				<button>Phase 3</button>
				<button>Phase 2</button>
				<button>Phase 1</button>
>>>>>>> 02_starter
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
