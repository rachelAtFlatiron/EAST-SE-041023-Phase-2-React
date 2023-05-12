import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList({ allProjects }) {
	//[ {..}, {..}, {..} ]
	//[ <li>name</li>, <li>name</li>, ...]
	return (
		<ul>
            {/* javascript that needs to execute inside JSX (i.e. the return statement) */}
			{allProjects.map((project) => {
				return <ProjectListItem oneProject={project} />;
			})}
		</ul>
	);
}

export default ProjectList;
