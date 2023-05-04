import { useState } from "react";

/*

controlled form process

1. make state that represents form values (and ultimately the structure of what gets added to the database)
2. add value to each JSX input so that it displays what is in state ( value = {formState.name} )
3. create onChange callback to dynamically update form state { ...form, [e.target.name]: e.target.value }
4. add onChange to every input field
5. create onSubmit callback that adds form values to appropriate place, reset form (state)
- don't forget your e.preventDefault()

*/

function ProjectForm({ addProject }) {
	// const [ about, setAbout ] = useState('')
	// const [ name, setName ] = useState('')
	// const [ phase, setPhase ] = useState(0)
	// const [ link, setLink ] = useState('')
	// const [image, setImage] = useState('')

	//our empty form initially
	const formOutline = {
		name: "",
		about: "",
		link: "",
		image: "",
		phase: 0,
		claps: 0,
	};

	//form state initialized to empty form outline
	const [form, setForm] = useState(formOutline);

	const handleSubmit = (e) => {
		e.preventDefault(); //we still need this in synthetic events

		// addProject({
		// 	name,  //no curly braces, because not in JSX
		// 	about, //shortcut for about: about when both key/variable is same name
		// 	link: link,
		// 	image: image,
		// 	phase: parseInt(phase),
		// 	claps: 0
		// })

		// setAbout('')
		// setName('')
		// setPhase(0)
		// setLink('')
		// setImage('')

		//~~~~~~~~~~~~~~~~~~~~~POST REQUEST~~~~~~~~~~~~~~~~~~~~
		fetch("http://localhost:4000/projects", {
			method: "POST",
			body: JSON.stringify({
				...form,
				phase: parseInt(form.phase),
			}),
			headers: {
				"content-type": "application/json",
			},
		})
		.then((res) => res.json())
		//only want App's projects state to update
		//only want form to reset
		//if post request was successful
		.then((data) => {

			// addProject({
			// 	...form, 
			// 	phase: parseInt(form.phase)
			// })

			//call addProject with data returned by POST request
			//so that we can also pass up id created by json-server
			addProject(data); 


			//reset form on successful submit
			setForm(formOutline);
		})
		.catch(err => console.log(err))

		
	};

	const handleChange = (e) => {
		setForm({
			...form,
			//update input field (e.target.name) with new value (e.target.value)
			[e.target.name]: e.target.value,
		});
	};

	//only in JSX in return statement / no html
	return (
		<section>
			<form
				className="form"
				autoComplete="off"
				onSubmit={(e) => handleSubmit(e)}
			>
				<h3>Add New Project</h3>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={form.name}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="about">About</label>
				<textarea
					id="about"
					name="about"
					value={form.about}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="phase">Phase</label>
				<select
					name="phase"
					id="phase"
					value={form.phase}
					onChange={(e) => handleChange(e)}
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
					value={form.link}
					onChange={(e) => handleChange(e)}
				/>

				<label htmlFor="image">Screenshot</label>
				<input
					type="text"
					id="image"
					name="image"
					value={form.image}
					onChange={(e) => handleChange(e)}
				/>

				<button type="submit">Add Project</button>
			</form>
		</section>
	);
}

export default ProjectForm;
