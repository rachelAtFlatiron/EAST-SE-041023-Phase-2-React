import { Link } from "react-router-dom";
import { useState, useEffect, useContext  } from 'react';
import ProjectListItem from '../ProjectListItem'
import { ProjectContext } from "../../contexts/ProjectContext";

function Home() {
	const ctx = useContext(ProjectContext)
	const [topFive, setTopFive] = useState([])

	useEffect(() => {
		console.log('update top five')
		ctx.topFive().then(data => setTopFive(data))
	}, [ctx, ctx.projects])

	return (
		<section className="box">
			<h2>Hey!  View Awesome Projects.</h2>
			<p>
				Looking for someone to hire? Check out these awesome projects from
				Flatiron students.
			</p>

			<div style={{ margin: "60px 0" }}>
				<Link className="button" to="/projects">
					View All Projects
				</Link>
			</div>

			<ul className="cards" >
				{
					topFive.map(el => <ProjectListItem project={el} />)
				}
			</ul>
		</section>
	);
}

export default Home;
