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

*** 

## Deliverables

#### 1. Add a click event to the 'Dark Mode' button inside the `Header` component:

##### 1a. In `App.js` initialize state `isDarkMode` to true

##### 1b. Define a function 'handleClick' that will toggle and update the `isDarkMode` state
- pass it down to `Header.js`

##### 1c. Create a button in `Header.js` to toggle dark/light mode
- Attach a 'click' event to the button that invokes the callback function `handleClick`
- Create a ternary to set the button text

#### 2. Add a click event to a clap button inside the `ProjectListItem` component that increments by one when triggered:

##### 2a. Create a clap button in the `figure` div 
##### 2b. Initialize state `clapCounts` set to 0

##### 2c. Create a function `handleClap` that will increment and update the `clapCounts` state by 1

##### 2d. Attach a 'click' event to the clap button that invokes the callback function `handleClap`

#### 3. Implement a Filter by project name feature inside the `ProjectList` component:

##### 3a. Create buttons in `ProjectList.js` that represent each phase.
##### 3b. Initialize state `searchQuery` and `phase` set to an empty string

##### 3c.  Add an `onChange` event to the search input field and `onClick` events to the buttons

##### 3d. When the `onChange` and `onClick` event occurs, update the `searchQuery`  and `phase` state 

##### 3e. Given the array of `projects`, filter the projects that include the value of the search query and phase

## Resources

- [React Docs - Events](https://reactjs.org/docs/events.html)
- [React Docs - Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Docs - Functional State Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [React Docs - Stale State Problem](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
