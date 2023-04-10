# Information Flow

## SWBATs:

- [ ] Define the term “lifting state”
- [ ] Recognize the pattern for changing state in a parent component from a child component
- [ ] Explain the role that callback functions play in changing parent state
- [ ] Observe how we can render reusable components that invokes different callback functions after an event
- [ ] Recognize destructured props and how to work with them

---

## Deliverables

#### 1. Add a button to our App that will use json-server to fetch projects and store them in state

##### 1a. Add a button 'Load Projects' to the JSX of the `App` component

##### 1b. Add a 'click' event to the button

##### 1c. When the button is clicked, make a fetch request to "http://localhost:4000/projects" and set the `projects` state to the value returned by the response
<br />

#### 2. Use Inverse Data flow to implement Light-Dark mode

##### 2a. Refactor isDarkMode state from the `Header` component to the `App` component.

##### 2b. Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

##### 2c.  Inside the `Header` component, invoke the callback function in place of updating the state

<br />

#### 3. Refactor the filter component out of `ProjectList` and implement inverse data flow

##### 3a. Refactor the `searchQuery` and `phase` state and the filter method inside of the `ProjectList` component to the `App` component

##### 3b. Using inverse data flow, get the value of the info UP to the App component

##### 3c. Write a callback function inside the App component:

  ##### - the function should take in a new search value and set state with that value

  ##### - pass the callback function down as a prop to `ProjectList`

##### 3d. Call the callback function from the onChange event listener

<br />

--- 
### Resources
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)