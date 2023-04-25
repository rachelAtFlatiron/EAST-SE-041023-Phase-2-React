import { useContext } from "react";
import { Link } from "react-router-dom"
import ProjectList from '../ProjectList'
import { ProjectContext } from "../../contexts/ProjectContext";

function ProjectsPage() {
	const ctx = useContext(ProjectContext)

	return (
		<div>
			<section>
                <Link to={"/new"} > Add New Project </Link>
			</section>

			<section>
				<ProjectList
					projects={ctx.projects}
				/>
			</section>
		</div>
	);
}

export default ProjectsPage;
