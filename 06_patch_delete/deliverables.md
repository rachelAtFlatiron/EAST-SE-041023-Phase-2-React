# PATCH & DELETE Requests

## SWBATs:

- [ ] Observe how to send PATCH & DELETE requests
- [ ] Review changing parent state

***

## Deliverables

#### 1. Create a `ProjectEditForm` component
##### 1a. Make `ProjectEditForm` a controlled form
<br />

#### 2. Create state in `App` to represent the project to edit
##### 2a. Add a button to `ProjectListItem` that, when clicked on, will:
##### - update said state with the appropriate project object
##### - display the `ProjectEditForm` with the appropriate data.

<br />

#### 3. Submit the edit project form and make a PATCH request

##### 3a. In `ProjectEditForm` create an `onSubmit` function that executes the `PATCH` request.
##### 3b. In `App` update `projects` with the revised project and reset `projectToEdit`.

<br />

#### 4. For the clap button, update the `onClick` event handler to send a `PATCH` request to save the updated claps in the database
##### 4a. Send this information to `App` and include it in `projects`

<br />

#### 5. Add a delete button to `ProjectListItem`
##### 5a. Create an `onClick` event handler
##### 5b. When clicked, use a fetch request to delete the project from the database
##### 5c. Pass this information to `App` and remove the appropriate project from `projects`

<br />


