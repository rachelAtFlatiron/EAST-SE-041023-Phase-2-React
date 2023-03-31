# State and Events

### SWBATs:

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

### Deliverables

#### 1. Add a click event to the 'Dark Mode' button inside the `Header` component:

- Initialize state `isDarkMode` to true

- Define a function 'handleClick' that will toggle and update the `isDarkMode` state

- Attach a 'click' event to the button that invokes the callback function `handleClick`

#### 2. Add a click event to the clap button inside the `ProjectListItem` component:

- Initialize state `clapCounts` set to 0

- Create a function `handleClap` that will increment and update the `clapCounts` state by 1

- Attach a 'click' event to the clap button that invokes the callback function `handleClap`

#### 3. Implement a Filter by project name feature inside the `ProjectList` component:

- Initialize state `searchQuery` set to an empty string

- Add an `onChange` event to the search input field

- When the `onChange` event occurs, update the `searchQuery` state to the value in the input field

- Given the array of `projects`, filter the projects that include the value of the search query

### Resources

- [React Docs - Events](https://reactjs.org/docs/events.html)
- [React Docs - Hooks](https://reactjs.org/docs/hooks-overview.html)
- [React Docs - Functional State Updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)
- [React Docs - Stale State Problem](https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
