# Side Effects and Fetching

## SWBATs

 - [ ] Explain what a side effect is
 - [ ] Observe how React manages side effects with the useEffect hook
 - [ ] Observe how to use the useEffect hook to fetch data on page load
 - [ ] Review changing parent state

 ---

 ## Deliverables


#### 1. Persist the new project upon the `ProjectForm` submission

##### 1a. Send the new project data to the server using a `POST` fetch request

<br />

#### 2. Implement useEffect in App component to load projects

##### 2a. Import the `useEffect` hook from the React library

##### 2b. Use `useEffect` and make a `GET` request using the `fetch` method

##### 2c. Update `projects` state to the response from the server

<br />

#### 3. Demonstrate the order of operations between rendering a component and running the side effect

##### - Place a console.log() inside the `App` component as well as the `useEffect` method

##### - Open up the devtools to observe when each phase of the component will occur 

<br />

#### 4. Demonstrate `useEffect` dependency array with `phaseState`, `searchQuery`, and `projects` in `ProjectList.js`

##### 4a. Create a state for `filteredProjects` in `ProjectList.js`

##### 4b. Create a `useEffect` with `phaseState`, `searchQuery` and `projects` in the dependency array 

##### 4c. Filter through `projects` based on `phaseState` and `searchQuery` inside the useEffect

##### 4d. Set `filteredProjects` to the filtered state

##### - Open up the devtools to observe when the cleanup will occur in the stages of a components lifecycles