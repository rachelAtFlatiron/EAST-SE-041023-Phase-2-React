import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext'
import ProjectListItem from './../components/ProjectListItem'

function Home() {
	const name = useContext(UserContext)
	const [topProjects, setTopProjects] = useState([])

	useEffect(() => {
		fetch("http://localhost:8000/projects?_sort=claps&_order=desc&_limit=5")
		.then(res => res.json())
		.then(data => {
			setTopProjects(data)
		})
	}, [])
	return (
		<section className="box">
			<h2>Hey {name}!  View Awesome Projects.</h2>
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
					topProjects.map(el => <ProjectListItem project={el} />)
				}
			</ul>
		</section>
	);
}

export default Home;
