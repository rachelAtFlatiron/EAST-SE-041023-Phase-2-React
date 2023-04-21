---

title: '02_state_and_events'

---

# State & Events

---

## ✅ Objectives 

- Understand how to create events in React
- Understand how to define the event handler function
- Explain the importance of state
- Explain the difference between state and props
- Observe how to use the useState hook
- Observe how to use DOM events in React

---

## Events in JS

```js
// 1. Find an element in the DOM:
const pizza = document.getElementById("pizza");

// 2. Add an event listener to that element
pizza.addEventListener(...);

// 3. Give type and callback to the event listener:
pizza.addEventListener("click", () => {
  console.log("It's Pizza Time!");
});
```
In React we can skip directly to step 2 by adding the event listener and handler (as a callback function) to our JSX 

---

##  Events in React 

```js
const Counter = () => {
  
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
   
};
```

in the example above...
- `Counter()` is a super basic components
- `return` returns `jsx`
- `<button>Click Me</button>` represents the HTML element to return
- `onClick={}` represents the event 
- `() => console.log("clicked!")` is the callback function for the `onClick` event

NOTE: Events can only be attached to JSX elements.  There is no equivalent of 'addEventListener' and you cannot query for a JSX element. 

---

## Defining Event Handlers

Event handler functions (passed as a callback function) are often defined as helper functions outside of your JSX.

```js
//functional component definition
const Counter = () => {

  //helper function
  function handleClick(event) {
    console.log(event);
  }

  //JSX - helper function passed into onClick event
  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

```

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX.

---

## Synthetic Events

- React passes "synthetic event objects" to our event handlers rather than the native event object created by the browser.
- This means React events still have `preventDefault()`!!!!
- Synthetic events ensure that you can use the event object in the same way regardless of browser or machine.


---

## Demo

---

## Why is state important?

🏹 State is used to track information that changes over time. 

🏹 Props are passed from the parent component, state is internal to a component. 

🏹 Values stored in state are meant to change, especially in response to user behaviors (through events and interactions).

🏹 We can do conditional rendering based on state values. Based on state we can determine what JSX or logic to execute. This way, changes in state eventually cause changes to the DOM.

---

## React Flow

<img width="500px" src="https://www.exploringreact.com/wp-content/uploads/2020/11/unidirectional.png" />

🏹 To work with state in a functional component, we use the `useState` hook

---

## React Lifecycle

<img width="900px" src="https://media.licdn.com/dms/image/D5612AQE5Nzfep6s1Ww/article-inline_image-shrink_1500_2232/0/1654106745367?e=1686787200&v=beta&t=-L8G2BVZeprAmOVOE6QHdE_wJFpcpuhxhWZgAIBPpAA"> 

---

## useState()

`useState` will return an array of two elements:

- state variable: returns the initial value for the state

- setter function: a function that will update the value of the state when invoked

React recommends using array destructuring:

```js
const [stateVariable, setStateVariable] = useState(someVal);
```

---

## Setting State

- To update a state variable, we use its setter function:

```js
setStateVariable("newValue")
```
Calling the setter function does two things:

1. It updates the state variable to some new value

2. It causes our component to re-render and update the DOM

---

## Setting State Gotcha's

setState is async and are "batched for performance gains", therefore....

---

## 🛑 DO NOT PASS DOWN SETSTATE AS A PROP

Always wrap it in a callback function and pass the callback function as a prop instead

```js
const myCallback = () => setStateVariable("newValue");
```

---

## 🛑 YOUR COMPONENTS' LOGIC WILL RUN WITH THE INITIAL STATE

- If your state is meant to be an array, I recommend initializing it with an empty array
- If your state is meant to be a number, I recommend initializing it with a number (such as 0 or -1)
- You can initialize with ```null```
- There is no hard and fast rules for this, just keep it in mind as it can cause errors when your React app first loads

---

## 🤗 Reconciliation 🤗

- When setState is called, React will re-render that component and all of its children
- This is an expensive operation, so React optimizes by running a diffing algorithm to decide which components actually need to trigger committed changes to the DOM.
- This diffing process is called [reconciliation](https://reactwithhooks.netlify.app/docs/reconciliation.html)
- During reconciliation, React compares its own picture of the current state of the DOM tree with what it should look like after the change. Using this diff, the minimal DOM manipulation necessary is committed to reconcile the current DOM tree with what it should be after the change to state.

---

## 🛑 DO NOT DIRECTLY UPDATE STATE

- One of the choices made in the reconciliation process is to only commit to updating a component in the DOM if one of its nodes or property values has changed. If all nodes (types of React elements) and their props and values are the same, React will leave that component unchanged from the previous render.

If an object or array is mutated directly and then set as the new value for state **React sees the same object in state as the previous render and leaves the DOM untouched**

```js
setterVariable = "newValue" //BAD
setterFunc(setterVariable) //BAD

//GOOD
setterFunc(prevSetterVariable => prevSetterVariable + "new string") 

//instead of directly mutating arrays use the spread operator, filter, or map
setterFuncForArray(prevArrayVariable => [...prevArrayVariable, newValue])
```

---

## 💡 Conclusion

Events and state are both important and can work together to allow the DOM to reflect a users interactions and activities by:

1. Attaching events to parts of our JSX

2. Updating the state based on the goal of the event

3. State change forces a re-render that will cause DOM manipulation and reflect the changes on the interface
