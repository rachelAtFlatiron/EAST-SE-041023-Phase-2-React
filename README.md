# React Forms

## SWBATs:

- [ ] Explain the difference between a controlled and uncontrolled input
- [ ] Explain why controlled inputs are preferred by the React community
- [ ] Review how to use callback functions with events in React
- [ ] Review how to change parent state from a child component

---

## Deliverables



#### 1. Create a `ProjectForm` component that will create a new project

<br />

#### 2. Make the `ProjectForm` component a controlled component

##### 2a. Initialize state for all the form fields found in the component

##### 2b. Add an `onChange` event to each field that will update state associated to the field that is interacted with

##### 2c.  Provide a `value` attribute to each form field that will return the associated piece of state

##### 2d.  Add an `onSubmit` event handler to the form



<br />

#### 3. Handle submitting the form and update state in parent using inverse data flow

##### - When the form is submitted:

##### 3a. Use inverse data flow to include the new project in the `projects` state in `App`

<br />

#### 4. Create a search by name filter in `App`
##### 4a. Create state for the `searchQuery` in `ProjectList`
##### 4b. Create a controlled form for the search query
##### 4c. One search query change update the `searchQuery`