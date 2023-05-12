import React from "react";
import { Link } from 'react-router-dom'

function Header({ updateDarkMode }) {
	return (
		<header>
			<h1>
				<span className="logo">{"//"}</span>
				Project Showcase
			</h1>
			<button onClick={updateDarkMode}>Dark Mode</button>
			<Link to={'/home'} className="button">
				Home
			</Link>
			<Link className="button" to={"/about"}>
				About
			</Link>
			<Link className="button" to={"/new"}>
				New Project
			</Link>
			<Link className="button" to={"/projects"}>
				All Projects
			</Link>
		</header>
	);
}

export default Header;
