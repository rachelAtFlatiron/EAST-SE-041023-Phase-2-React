---

title: '03_information_flow'

---

### React Information Flow 

---

### ✅ Objectives 

- Revisit our component hierarchy and describe the Flow of Information

- Decide which components should have state

- Pass data up with callbacks, and down with props

---

### Lifting State Up ⬆️ 

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called "lifting state up”

---

### 🤔 Decisions - Where should state be? 


From Step 4 of Thinking in React: To decide where state should live, for each piece of state in your application:

- Identify every component that renders something based on that state.

- Find a common owner component (a single component above all the components that need the state in the hierarchy).

- Either the common owner or another component higher up in the hierarchy should own the state.

- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

---

### Current Data Flow 


<img  src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1643912910/component-hierarchy-with-data-flow_cq3qkl.png" alt="Component Hierarchy" height="700" width="1500">

💡 Question: Where else do we need access to projects?

---

### Recap: Lifting the isDarkMode state up 🔧 


- Currently, we have our isDarkMode state within the Header component.

- What's the problem with that? If we want to update the style of the entire application as it changes, we will only cause a re-render to `Header` component and its children

---

### Let's fix it! 😸 


1. Lift the `isDarkMode` state to the `App` component. 

2. Create a function `onToggleDarkMode` that will handle updating the value of `isDarkMode` when necessary

3. Pass `isDarkMode` down as a prop to the `Header` component to use as the condition for what text the button will render

4. Pass `onToggleDarkMode` to be used as a callback function when the button is clicked

❓ Why? This allows us to maintain the state and manage its value where the state is defined

---

First, move the `isDarkMode` to the `App` component:

```js
const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

...
```

Second, create the `onToggleDarkMode` function that will update the `isDarkMode` state:

```js
const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);
```


Third, pass both `isDarkMode` and `onToggleDarkMode` to `Header` as props

```js
<Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
```

---

### Inside the Header component: 

Destructure the props in the argument and use the variables to render the button text and as a callback for the `onClick` event:

```js
const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const handleClick = () => onToggleDarkMode();

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
```

---

### 💡 Conclusion: 

Lifting state up allows us to share data across different components without having to redefine that state where it is needed. The lowest common parent component is the best place to create the state and the process of sharing the data is done through the passing of props.

Because this data is now created elsewhere, we also have to be mindful of how the state is managed. Best practice is to always maintain and manage state where it has been defined. If a behavior lives in a child component but state belongs to a parent component, we can employ inverse data flow. 

This means creating a callback function in the parent component that will be responsible for updating the state and passing it down as a prop to the child component with the behavior.