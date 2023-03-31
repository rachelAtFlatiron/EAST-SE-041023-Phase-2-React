# State and Events
## SWBATs:

- [ ] Understand how to create events in React
- [ ] Review event handler functions, a type of callback function
<br /><br />
- [ ] Explain the importance of state
- [ ] Explain the difference between state and props
- [ ] Discuss some "gotchas" of working with useState: async code and closures
<br /><br />
- [ ] Observe how to use the useState hook
- [ ] Observe how to use DOM events in React
- [ ] Create event handler callbacks that manipulate state
- [ ] Trigger re-renders by setting state

---

## Events in JS

```js
// 1. Find an element in the DOM:
const pizza = document.getElementById("pizza");
// 2. Add an event listener to that element
pizza.addEventListener;
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

<img src="https://www.exploringreact.com/wp-content/uploads/2020/11/unidirectional.png" />
🏹 To work with state in a functional component, we use the `useState` hook

---

## useState()

`useState` will return an array of two elements:

- state variable: returns the initial value for the state

- setter function: a function that will update the value of the state when invoked

React recommends using array destructuring:

```js
const [stateVariable, setterFunc] = useState(someVal);
```

---

## Setting State

- To update a state variable, we use its setter function:

```js
setterFunc("newValue")
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
const myCallback = () => setterFunc("newValue");
```

---

## 🛑 DO NOT DIRECTLY UPDATE STATE

```js
setterVariable = "newValue" //BAD
setterFunc(setterVariable) //BAD

//GOOD
setterFunc(prevSetterVariable => prevSetterVariable + "new string") 
//in the case of arrays use destructuring to create a new array
//instead of directly mutating original array
setterFuncForArray(prevArrayVariable => [...prevArrayVariable, newValue])
```

---

## 🛑 YOUR COMPONENTS' LOGIC WILL RUN WITH THE INITIAL STATE

- If your state is meant to be an array, I recommend initializing it with an empty array
- If your state is meant to be a number, I recommend initializing it with a number (such as 0 or -1)
- You can initialize with ```null```
- There is no hard and fast rules for this, just keep it in mind as it can cause errors when your React app first loads

---

## 💡 Conclusion

Events and state are both important and can work together to allow the DOM to reflect a users interactions and activities by:

1. Attaching events to parts of our JSX

2. Updating the state based on the goal of the event

3. State change forces a re-render that will cause DOM manipulation and reflect the changes on the interface
