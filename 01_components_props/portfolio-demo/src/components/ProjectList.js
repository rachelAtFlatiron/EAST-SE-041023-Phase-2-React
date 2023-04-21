import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {

  return (
		// deliverables 1d
		<section>
			<h1>Project List</h1>

			{/* <ul>
				<li>{projects[0].name}</li>
				<li>{projects[1].name}</li>
				<li>{projects[2].name}</li>
				<li>{projects[3].name}</li>
			</ul> */}

			{/* <ul>
				{[
					<li>{projects[0].name}</li>,
					<li>{projects[1].name}</li>,
					<li>{projects[2].name}</li>,
					<li>{projects[3].name}</li>,
				]}
			</ul> */}

			{/* <ul>
        {
          //deliverables 2a, 2b, 2c
          // Note the use of .map and not .forEach
          projects.map(project => {
            console.log(project)
            return <li>{project.name}</li>
          })
        }
      </ul> */}

      <ul className="cards">

        {
          projects.map(project => <ProjectListItem key={project.id} project={project} />)
        }
      </ul>
		</section>
	);
}

export default ProjectList;
