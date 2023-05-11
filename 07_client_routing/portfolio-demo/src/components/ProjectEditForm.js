import { useState, useEffect } from "react";

function ProjectEditForm({ projectToEdit, editProject }) {

	const [formData, setFormData] = useState({...projectToEdit});

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~ UPDATE FORMDATA WHEN PROJECTTOEDIT CHANGES (IN APP.JS)
	useEffect(() => {
		setFormData({...projectToEdit})
	}, [projectToEdit])

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PASS FORMDATA TO APP.JS FOR PATCH
	//make PATCH request here
	const handleSubmit = (e) => {
		e.preventDefault()
		editProject(formData)
	};

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ UPDATE FORMDATA ON INPUT CHANGE
	const handleOnChange = (e) => {
		setFormData(
			{
				...formData,
				[e.target.name]: e.target.value
			}
		)
	};

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JSX
	return (
		<form onSubmit={handleSubmit} className="form" autoComplete="off" style={{display: Object.keys(projectToEdit).length === 0 ? "none" : "flex"}}>
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
