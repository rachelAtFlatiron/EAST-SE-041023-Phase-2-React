# State and Events

## SWBATs:

- [ ] Understand how to create events in React
- [ ] Understand how to define the event handler function
- [ ] Explain the importance of state
- [ ] Explain the difference between state and props
- [ ] Observe how to use the useState hook
- [ ] Observe how to use DOM events in React

*** 

## Deliverables

#### 1. Create a dark mode button in `App.js` 

##### 1a. Initialize state `isDarkMode` to true

##### 1b. Define a function 'handleClick' that will toggle and update the `isDarkMode` state

##### 1c. Add a click event to the 'Dark Mode' button inside the `App` component that takes `handleClick` as the callback function

##### - Create a ternary to set the button text between "Light Mode" and "Dark Mode'

<br />

#### 2. Add a click event to a clap button inside the `ProjectListItem` component that increments claps by one when triggered:

##### 2a. Create a clap button in the `figure` div 
##### 2b. Initialize state `clapCounts`

##### 2c. Create a function `handleClap` that will increment the `clapCounts` state by 1

##### 2d. Attach a 'click' event to the clap button that invokes the callback function `handleClap`

<br />

#### 3. Implement a filter by project phase feature inside the `ProjectList` component:

##### 3a. Create buttons in `ProjectList.js` that represent each phase.
##### 3b. Initialize state `phase` set to 0

##### 3c. Create a callback function, `handleClick` that will update phase

##### 3d.  Add `onClick` events to the phase buttons with the callback function `handleClick`

##### 3e. Given the array of `projects`, filter the projects by phase

***
## Resources

- [React Docs - Events](https://reactjs.org/docs/events.html)
- [React Docs - Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Docs - Functional State Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [React Docs - Stale State Problem](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
