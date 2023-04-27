# Information Flow

## SWBATs:

- [ ] Define the term “lifting state”
- [ ] Recognize the pattern for changing state in a parent component from a child component
- [ ] Explain the role that callback functions play in changing parent state
- [ ] Recognize destructured props and how to work with them

---

## Deliverables

#### 1. Add a button to our App that will use json-server to fetch `projects.js` and store them in state

##### 1a. Create a state for projects array
##### 1b. Add a button 'Load Projects' to `App`

##### 1c. Add a 'click' event to the button

##### 1d. When the button is clicked, make a fetch request to "http://localhost:4000/projects" and set the `projects` state to the value returned by the response

<br />

#### 2. Use inverse data flow to implement Light-Dark mode

##### 2a. Move the dark mode button to `Header`

##### 2b. Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

##### 2c.  Inside the `Header` component, invoke the callback function to update state in `App`

<br />

#### 3. Refactor the phase filter component out of `ProjectList` and implement inverse data flow

##### 3a. Move the `phase` state from `ProjectList` to `App`


##### 3b. Write a callback function inside the App component:

  ##### - the function should take in a new phase value and update state

  ##### - pass the callback function down as a prop to `ProjectList`

##### 3c. Using inverse data flow, get the value of the phase to filter by UP to the App component:
##### - Invoke the callback function from the onClick event listener

<br />

--- 
### Resources
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)