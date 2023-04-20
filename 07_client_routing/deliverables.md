# Client Side Routing

## SWBATs:

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V6
- [ ] Observe how to use the react-router-dom hooks useLocation, useNavigate, and useParams

---

## Planning

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| About           | /about             |
| ProjectForm     | /projects/new      |
| ProjectEditForm | /projects/:id/edit |
| ProjectDetail   | /projects/:id      |
| ProjectList     | /projects          |

---

## Deliverables

#### 1. Install and setup react router

##### - The curriculum uses React Router V5 however in this demonstration we will be using V6.
##### - There are particularly major updates regarding hooks and nested routes.



##### 1a. Within `index.js`, wrap the `App` component in the `BrowserRouter` component that will be imported from the `react-router-dom` library

<br /> 

#### 2. Create the following new components: `Home.js`, `About.js`, `ProjectsPage.js`
##### 2a. Put some stuff in `Home.js` and `About.js`


<br /> 

#### 3. Creater a Router tree in `App.js` with the following routes:
##### - `/home` to `<Home />`
##### - `/new` to `<CreateProjectForm />`
##### - `/about` to `<About />`
##### - `/projects` to `<ProjectsPage />`


<br /> 

#### 4. Add `Link`s and `NavLink`s in `Header` for the new routes
##### 4a. Include a `Link` on button `View All Projects` in `Home` that navigates to `/projects`


<br /> 

#### 5. Refactor `App.js` and `ProjectsList` to move everything to `ProjectsPage` such that `App` only contains the `Router` tree and the `Header`
##### 5a. Keep the search functionality and `filteredProjects` in `ProjectsList`


<br /> 

#### 6. In `ProjectsPage` replace `<CreateProjectForm />` with a `Link` to the appropriate route
##### 6a. In `CreateProjectForm` navigates to the `/projects` link when a new project is successfully created.


<br /> 

#### 7. Create a `ProjectDetails` page that will display the details for only one project.
##### 7a. In `App.js` create a `Route` that navigates to `/project/:id`
##### 7b. In `ProjectListItem` wrap `figure.image` with a `Link` to `/project/:id`
##### 7c. In `ProjectDetails` use `useParams` and `useEffect` to fetch the individual project
##### - use `id` in the `useEffect` dependancy array


<br /> 

#### 8. In `ProjectListItem` refactor the `Link` to include `state` with `project`
##### 8a. Refactor `ProjectDetails` to use `useLocation` to access `project` information


<br /> 

#### 9. In `App` create a route for `/project/:id/edit`
##### 9a. In `ProjectDetails` create a `Link` to `/project/:id/edit` with state `project`
##### 9b. Navigate to `/projects` upon successful submission of the edit form.
##### - this is for demonstration purposes only
