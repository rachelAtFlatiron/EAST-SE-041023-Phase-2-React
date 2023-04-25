import { Link, NavLink } from "react-router-dom";

function Header({ updateDarkMode }) {
	return (
		<header>
			<Link to={`/home`}>
				<h1>
					<span className="logo">{"//"}</span>
					Project Showcase
				</h1>
			</Link>
			<button onClick={updateDarkMode}>Dark Mode</button>
			<NavLink className="button" to={"/about"}>
				About
			</NavLink>
			<NavLink className="button" to={"/new"}>
				New Project
			</NavLink>
			<NavLink className="button" to={"/projects"}>
				All Projects
			</NavLink>
		</header>
	);
}

export default Header;
