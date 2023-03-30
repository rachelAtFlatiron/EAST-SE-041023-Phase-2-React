---

title: '02_state_and_events'

---

## State & Events

---

## ✅ Objectives 

- Explain the importance of state
- Explain the difference between state and props
- Observe how to use the useState hook
- Observe how to use DOM events in React

---

## Why is state important?

🏹 State is used to track information that changes over time. 

🏹 Props are passed from the parent component, state is internal to a component. 

🏹 Values stored in state are meant to change, especially in response to user behaviors (as the user interacts with the DOM and triggers events).

🏹 We can do conditional rendering based on state values. This is a key component of declarative programming in React: we tie our components to our state by integrating state values into our JSX rendering logic. This way, changes in state eventually cause changes to the DOM (Updating the Dark Mode button!).

---

## React Flow

<img height="600px" alt="Data Display Behavior" src="./assets/data-display-behavior.drawio.svg" />

🔑 We use state to store data that may change in response to user behavior

🏹 To work with state in a functional component, we use the `useState` hook

---

##  Handling events in React </strong> </h2>

```js
const Counter = () => {
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
};
```

NOTE: Events can only be attached to DOM elements, we can't attach event listeners directly to our components

---

## Defining Event Handlers

We can also define event handler functions within our components and pass the function reference to our event listener in the JSX.

```js
const Counter = () => {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
};
```

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX.

---

✅ Toggle Dark Mode Button

Inside the `Header` component, there is a button with textContent of `Dark Mode`

```js
<button>Dark Mode</button>
```

Attach an `onClick` event to the button:

```js
<button onClick={() => console.log("clicked")}>Dark Mode</button>
```

We can also also refactor using a helper function:

```js

 const handleClick = () => console.log('clicked')

<button onClick={handeClick}>Dark Mode</button>
```

💡 We need to now figure out how to properly set new text for the button and perform DOM manipulation to reflect the change. That is where `state` will come in.


---

<img src="assets/component-lifecycle.drawio.svg" alt="Component Lifecycle" width="1200" />

---

<img height="600px" alt="Data Display Behavior" src="./assets/data-display-behavior.drawio.svg" />

---

## ☕️ Break!!! ☕️

---

<h2 style="text-align: center;"> Filter by project name in ProjectList component </h2>

Currently, we are creating a `ProjectListItem` component for each project inside of the `projects` array:

```js
const projectListItems = projects.map(project => {
  return <ProjectListItem key={project.id} project={project} />
})
```

We need to make this dynamic by implementing a filter feature that returns the projects based on the user's entry in the `search input`

```js
<input type="text" placeholder="Search..." />
```

---

<h3 style="text-align: center;"> Filter by project name in ProjectList component steps: </h3>

1. Initialize state to track the `searchQuery`:

```js
const [searchQuery, setSearchQuery] = useState("");
```

2. Add on `onChange` event to the input element:

```js
<input onChange={handleSearch} type="text" placeholder="Search..." />
```

3. Update the state in the `handleSearch` helper function:

```js
const handleSearch = (e) => setSearchQuery(e.target.value);
```

---

<h3 style="text-align: center;"> Filter by project name in ProjectList component steps contd: </h3>

4. Filter the `projects` array to return the search results based on the `searchQuery` value:

```js
const searchResults = projects.filter((project) =>
  project.name.toLowerCase().includes(searchQuery.toLowerCase())
);
```

5. Map over `searchResults` instead of `projects` when creating `projectListItems`:

```js
const projectListItems = searchResults.map(project => {
  return <ProjectListItem key={project.id} project={project} />
})
```

<strong>Note:</strong> If the searchQuery is an empty string, the `filter()` will return all the project items

---

<h2 style="text-align: center;"> 💡 Conclusion </h2>

Events and state are both important and can work together to allow the DOM to reflect a users interactions and activities by:

1. Attaching events to parts of our JSX

2. Updating the state based on the goal of the event

3. State change forces a re-render that will cause DOM manipulation and reflect the changes on the interface

<h4 style="text-align: center;"><strong> user behavior -> update state -> React updates DOM </strong></h4>