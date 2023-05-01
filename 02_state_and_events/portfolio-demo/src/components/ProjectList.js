import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
	return (
		<section>
			<h1>Project List</h1>
			<ul className="cards">
				{projects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectList;
