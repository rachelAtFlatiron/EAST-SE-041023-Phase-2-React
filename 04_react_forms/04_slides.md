---

title: "04_react_forms"

---

# React Forms 📝 

---

## ✅ Objectives 

- Explain the difference between a controlled and uncontrolled input
- Explain why controlled inputs are preferred by the React community
- Review how to use callback functions with events in React
- Review how to change parent state from a child component

---

## What is a controlled input 

In React, rather than looking into the DOM to get the form's input field values:

```js
form.addEventListener('submit', (e) => {
  let formValue = e.target['form-value'].value
})
```

we use state to monitor the user's input as they type, so that our component state is always in sync with the DOM:

```js
//its ideal to setState to whatever data type formValue will be
const [formValue, setFormValue] = useState('')
```

- This allows us to pass these values to other components and event handlers.
- It gives React a "single source of truth" for values

---

## Making an input controlled 

To keep track of each input's value, you need:

1. State for the input that will manage the input's value

```js
const [formValue, setFormValue] = useState('')
```

2. An `onChange` listener attached to the input to monitor users behavior and update state as the user interacts with the field

```js
<input type="text" onChange={ (e) => setFormValue(e.target.value) } />
```

3. A `value` attribute on the input that corresponds to that piece of state


```js
<input type="text" value={ formValue } onChange={ (e) => setFormValue(e.target.value) } />
```

4. Form components also need an `onSubmit` listener on the form element to handle the submitted form data.

```js
<form onSubmit={ (e) => { /* use formValue */ } } />
```

---


<img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1646072384/controlled-forms_j69gpu.svg" alt="controlled input diagram" height="500" width="1000">

---

<img width="800px" src="https://www.exploringreact.com/wp-content/uploads/2020/11/unidirectional.png" />

---

## Examples

Uncontrolled:
```js
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form>
      <input type="text" name="username" />
      <textarea name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Examples

Controlled:
```js
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <form>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <textarea name="comment" onChange={handleCommentChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Demo: Building a Controlled Form

---

## Inverse Data Flow and Form Submission

When the form actually submits, it's helpful to pass the new data from the form up to a parent component. Imagine we have an app like this:

---

## Draw.io Component Tree Demo

<img src="https://react.dev/images/docs/s_thinking-in-react_ui_outline.png" width="900px" />


---

## 🔑 After the form has been submitted 

The state of `products` is defined inside of the parent component `App` and the form behavior occurs in the child component `ProductSearch`. When the form value is submitted, `products` will need to be updated to include it.

---

## 💡 Conclusion 

- State is a very integral part of the way that React applications render and manipulate the DOM. 
- React prefers using state to update the forms and keep track of the form fields values, making them controlled inputs, rather than letting form inputs manage their own internal state (through their value). 
- What our user sees in the input fields reflects the value of the state associated with that field. 
- Example: Doing this allows us to make an edit form populated with a project's previously saved values for the inputs by setting the formState to match the saved record.

---

## Demo: Inverse Flow

---
s
## Why we don't mutate state directly

- One of the choices made in the reconciliation process is to only commit to updating a component in the DOM if one of its nodes or property values has changed. If all nodes (types of React elements) and their props and values are the same, React will leave that component unchanged from the previous render.

If an object or array is mutated directly and then set as the new value for state **React sees the same object in state as the previous render and leaves the DOM untouched**

```js
// so don't do this because it won't update the DOM
state.prop = "New Value"
setState(state);

// do this instead because it will (newState object will be different from the old one)
setState(state => ({...state, prop: "New Value"}))
```