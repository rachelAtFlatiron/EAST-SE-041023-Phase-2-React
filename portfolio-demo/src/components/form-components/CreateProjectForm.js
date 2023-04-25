import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../contexts/ProjectContext";

function CreateProjectForm({ createProject }) {
	const ctx = useContext(ProjectContext)
	const initialState = {
		name: "",
		about: "",
		phase: "",
		link: "",
		image: "",
	};

	const navigate = useNavigate()
	const [formData, setFormData] = useState(initialState);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//TODO: fetch POST
		// fetch("/projects", {
		// 	method: "POST",
		// 	body: JSON.stringify({ ...formData, phase: parseInt(formData.phase), claps: 0 }),
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// })
		// 	.then((res) => res.json())
		// 	// .then((data) => createProject(data));
		// 	.then(() => navigate('/projects'))
		ctx.createProject({ ...formData, phase: parseInt(formData.phase), claps: 0 })
		.then(() => navigate('/projects'))
		setFormData(initialState);
	};

	return (
		<section>
			<form className="form" autoComplete="off" onSubmit={handleSubmit}>
				<h3>Add New Project</h3>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={handleChange}
					value={formData.name}
				/>

				<label htmlFor="about">About</label>
				<textarea
					id="about"
					name="about"
					onChange={handleChange}
					value={formData.about}
				/>

				<label htmlFor="phase">Phase</label>
				<select
					name="phase"
					id="phase"
					onChange={handleChange}
					value={formData.phase}
				>
					<option value="">Pick a Phase</option>
					<option value="1">Phase 1</option>
					<option value="2">Phase 2</option>
					<option value="3">Phase 3</option>
					<option value="4">Phase 4</option>
					<option value="5">Phase 5</option>
				</select>

				<label htmlFor="link">Project Homepage</label>
				<input
					type="text"
					id="link"
					name="link"
					onChange={handleChange}
					value={formData.link}
				/>

				<label htmlFor="image">Screenshot</label>
				<input
					type="text"
					id="image"
					name="image"
					onChange={handleChange}
					value={formData.image}
				/>

				<button type="submit">Add Project</button>
			</form>
		</section>
	);
}

export default CreateProjectForm;
