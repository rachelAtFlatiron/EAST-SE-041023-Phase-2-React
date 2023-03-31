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

- Add a button 'Load Projects' to the JSX of the `App` component

- Add a 'click' event to the button

- When the button is clicked, make a fetch request to "http://localhost:4000/projects" and set the `projects` state to the value returned by the response

#### 2. Use Inverse Data flow to implement Light-Dark mode

- Refactor isDarkMode state from the `Header` component to the `App` component.

- Create a callback function that updates `isDarkMode` and pass the callback function as a prop to the `Header` component

- Inside the `Header` component, invoke the callback function in place of updating the state

#### 3. Refactor the filter component out of `ProjectList` and implement inverse data flow

- Refactor the `searchQuery` state and the filter method inside of the `ProjectList` component to the `App` component

- Using inverse data flow, get the value of the input field UP to the App component

- Write a callback function inside the App component:

  - the function should take in a new search value and set state with that value

  - pass the callback function down as a prop to `ProjectList`

- Call the callback function from the onChange event listener

--- 
### Resources
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)