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

<aside class="notes">heyyy notes</aside>

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

(There is a Draw.io color coded diagram)

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

<aside class="notes">
- This goes back to the concept of all functionality fro a given component being encapsulated inside that components (function).  
- Also notice that the JSX is only inside the return statement and everything else is outside the return.
- React event listeners will always be in camel case

---

## Synthetic Events

- React passes "synthetic event objects" to our event handlers rather than the native event object created by the browser.
- This means React events still have `preventDefault()` and `stopPropagation()` !!!!
- Synthetic events ensure that you can use the event object in the same way regardless of browser or machine.


🛑 NOTE: Events can only be attached to JSX elements.  There is no equivalent of 'addEventListener' and you cannot query for a JSX element. 

<aside class="notes">
- synthetic events are wrappers for native events
- they also make events cross browser compatible
</aside>

---

## Demo: Deliverable #1: Dark Mode

---

## What is React state?

- A built in container for storing information that is internal to a component.
- State is used to track information that changes over time. 

---

## Why is state important?

🏹 Values stored in state are meant to change, especially in response to user behaviors (through events and interactions).

🏹 We can do conditional rendering based on state values. Based on state we can determine what JSX or logic to execute. <strong>This way, changes in state eventually cause changes to the DOM.</strong>

🏹 To work with state in a functional component, we use the `useState` hook


🛑 Props are passed from the parent component, state is internal to a component. 


---

## useState()

`useState` will return an array of two elements:

- state variable: returns the initial value for the state

- setter function: a function that will update the value of the state when invoked

```js
const [stateVariable, setStateVariable] = useState(someVal);
```

---

## Setting State

- To update a state variable, we <strong>ONLY</strong> use its setter function:

```js
setStateVariable("newValue")
```
Calling the setter function does two things:

1. It updates the state variable to some new value

2. It causes our component to re-render and update the DOM

---

## Deliverable #2: 👏

---

## React Flow

<img width="800px" src="https://www.exploringreact.com/wp-content/uploads/2020/11/unidirectional.png" />

---

## React Lifecycle

<img width="700px" src="https://media.licdn.com/dms/image/D5612AQE5Nzfep6s1Ww/article-inline_image-shrink_1500_2232/0/1654106745367?e=1686787200&v=beta&t=-L8G2BVZeprAmOVOE6QHdE_wJFpcpuhxhWZgAIBPpAA"> 

---

## React Lifecycle

- Mount: When a component is first added to the DOM
- Re-render/update: When a component updates DOM nodes 
- Unmount: When a component is removed from the DOM

---

## Setting State Gotcha's

setState is async and are "batched for performance gains", therefore....

---

## 🛑 DO NOT PASS DOWN SETSTATE AS A PROP

Always wrap it in a callback function and pass the callback function as a prop instead

```js
const myCallback = () => setStateVariable("newValue");
```

<aside class="notes">directly passing down the setState function might interrupt the react lifecycle</aside>

---

## 🛑 YOUR COMPONENTS' LOGIC WILL RUN WITH THE INITIAL STATE

- If your state is meant to be an array, I recommend initializing it with an empty array
- If your state is meant to be a number, I recommend initializing it with a number (such as 0 or -1)
- You can initialize with ```null```
- There is no hard and fast rules for this, just keep it in mind as it can cause errors when your React app first loads

---

## 🛑 DO NOT DIRECTLY UPDATE STATE

If an object or array is mutated directly and then set as the new value for state **React sees the same object in state as the previous render and leaves the DOM untouched**

```js
setterVariable = "newValue" //BAD
setterFunc(setterVariable) //BAD

//GOOD
setterFunc(prevSetterVariable => prevSetterVariable + "new string") 

<aside class="notes">
- if you need to rely on the current version of state to create the new state we have to call in a callback function
- this is because setState is a async 
- react also batches async events to make things faster (multiple state updates are bundled into one update/rerender)
</aside>

//instead of directly mutating arrays use the spread operator, filter, or map
setterFuncForArray(prevArrayVariable => [...prevArrayVariable, newValue])
```

---

## Deliverable #3: Filter by Phase

---

## 💡 Conclusion

Events and state are both important and can work together to allow the DOM to reflect a users interactions and activities by:

1. Attaching events to parts of our JSX

2. Updating the state based on the goal of the event

3. State change forces a re-render that will cause DOM manipulation and reflect the changes on the interface

