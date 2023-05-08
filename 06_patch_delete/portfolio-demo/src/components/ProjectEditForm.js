import { useState } from "react";

function ProjectEditForm() {
	const formOutline = {
		name: "",
		about: "",
		link: "",
		image: "",
		phase: 0,
		claps: 0,
	};
	const [formData, setFormData] = useState(formOutline);

	const handleSubmit = () => {};
	const handleOnChange = () => {};

	return (
		<form onSubmit={handleSubmit} className="form" autoComplete="off" style={{display: "none"}}>
			<h3>Edit Project</h3>

			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleOnChange}
			/>

			<label htmlFor="about">About</label>
			<textarea
				id="about"
				name="about"
				value={formData.about}
				onChange={handleOnChange}
			/>

			<label htmlFor="phase">Phase</label>
			<select
				name="phase"
				id="phase"
				value={formData.phase}
				onChange={handleOnChange}
			>
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
				value={formData.link}
				onChange={handleOnChange}
			/>

			<label htmlFor="image">Screenshot</label>
			<input
				type="text"
				id="image"
				name="image"
				value={formData.image}
				onChange={handleOnChange}
			/>

			<button type="submit">Update Project</button>
		</form>
	);
}

export default ProjectEditForm;
