import React from "react";

function Header({ updateDarkMode }) {
	return (
		<header>
			<h1>
				<span className="logo">{"//"}</span>
				Project Showcase
			</h1>
			<button onClick={updateDarkMode}>Dark Mode</button>
			<button className="button" to={"/about"}>
				About
			</button>
			<button className="button" to={"/new"}>
				New Project
			</button>
			<button className="button" to={"/projects"}>
				All Projects
			</button>
		</header>
	);
}

export default Header;
