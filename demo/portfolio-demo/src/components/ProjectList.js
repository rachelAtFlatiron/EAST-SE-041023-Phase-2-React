//✅ 2. create a project list component
import ProjectListItem from "./ProjectListItem";

//✅ 2a. accept the projects array as props
function ProjectList({ projects }) {

	//✅ 2b. display each project title in an li element
	//🛑 wordy, what if we have 100 projects?
	let projectList = (
		<ul>
			<li>{projects[0].name}</li>
			<li>{projects[1].name}</li>
			<li>{projects[2].name}</li>
			<li>{projects[3].name}</li>
		</ul>
	);

	//🛑 can render an array of JSX elements
	projectList = (
		<ul>
			{[
				<li>{projects[0].name}</li>,
				<li>{projects[1].name}</li>,
				<li>{projects[2].name}</li>,
				<li>{projects[3].name}</li>,
			]}
		</ul>
	);

	//💡 why .map and not .forEach
	projectList = (
		<ul className="cards">
			{projects.map((project) => (
				<ProjectListItem key={project.id} project={project} />
			))}
		</ul>
	);

	return (
		<section>
			<h1>Project List</h1>

			<ul className="cards">
				{projectList}
			</ul>
		</section>
	);
}

export default ProjectList;
