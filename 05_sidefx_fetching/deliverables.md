# Side Effects and Fetching

## SWBATs

 - [ ] Explain what a side effect is
 - [ ] Observe how React manages side effects with the useEffect hook
 - [ ] Observe how to use the useEffect hook to fetch data on page load
 - [ ] Observe how to send a POST request via form
 - [ ] Review changing parent state

 ---

 ## Deliverables


#### 1. Persist the new project upon the `ProjectForm` submission

##### 1a. Send the new project data to the server using a `POST` fetch request

#### 2. Implement useEffect in App component to load projects

##### 2a. Import the `useEffect` hook from the React library

##### 2b. `useEffect` and make a `GET` request using the `fetch` method

##### 2c. `projects` state to response from the server

#### 3. Demonstrate the order of operations between rendering a component and running the side effect

##### - Place a console.log() inside the `App` component as well as the `useEffect` method

##### - Open up the devtools to observe when each phase of the component will occur 

#### 4. Demonstrate the unmounting and cleanup phase of a component through `useEffect`

##### - Return a cleanup function inside the `useEffect` with a console.log()

##### - Open up the devtools to observe when the cleanup will occur in the stages of a components lifecycles