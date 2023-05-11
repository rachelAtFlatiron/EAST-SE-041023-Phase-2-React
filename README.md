# Client Side Routing

## SWBATs:

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V6
- [ ] Observe how to use the react-router-dom hook useParams

---

## Planning

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| About           | /about             |
| CreateProjectForm     | /projects/new      |
| EditProjectForm | /projects/:id/edit |
| ProjectDetail   | /projects/:id      |
| ProjectList     | /projects          |

🛑🛑🛑🛑🛑<strong>THESE ARE DIFFERENT THAN THE SERVER ROUTES</strong>🛑🛑🛑🛑🛑

---

## Deliverables

#### 1. Install and setup react router

##### - The curriculum uses React Router V5 however in this demonstration we will be using V6.
##### - There are particularly major updates regarding hooks and nested routes.



##### 1a. Within `index.js`, import the `react-router-dom` library and wrap the `App` component with `BrowserRouter` 

<br /> 


#### 2. Create the following new components: `Home.js`, `About.js`, `ProjectsPage.js`, `CreateProjectForm.js`, `EditProjectForm.js` and `ProjectDetail.js`
##### 2a. Refactor the new project form to be inside `CreateProjectForm.js`
##### 2b. Refactor the edit project form to be inside `EditProjectForm.js`
##### 2c. Refactor `ProjectDetail` to include the component `ProjectListItem`

<br /> 

#### 3. Creater a Router tree in `App.js` with the following routes:
##### - `/home` to `<Home />`
##### - `/new` to `<CreateProjectForm />`
##### - `/about` to `<About />`
##### - `/projects` to `<ProjectsPage />`
##### - `/projects/:id` to `<ProjectDetails />`
##### - `/projects/new` to `<CreateProjectForm />`
##### - `/projects/:id/edit` to `<EditProjectForm />`


<br /> 


#### 4. Add `Link`s and `NavLink`s in `Header` for the new routes
##### 4a. Include a `Link` on button `View All Projects` in `Home` that navigates to `/projects`
##### 4b. In `ProjectsPage` replace `<CreateProjectForm />` with a `Link` to the appropriate route

<br /> 

#### 5. Refactor `App.js` and `ProjectsList` to move everything to `ProjectsPage` such that `App` only contains the `Router` tree and the `Header`
##### - Keep the search functionality in `ProjectsList`


<br /> 

#### 6. Refactor so that the new project form is in `CreateProjectForm` 
##### 6a. Redirect to the `/projects` page when a new project is successfully created.


<br /> 


#### 8. In `ProjectListItem` add a `Link` that navigates to `/project/:id`
##### 8a. Include the id in the `Link`
##### 8b. Use a fetch request in `ProjectDetails` to access a single project

<br />

```js
    <div className="card project-detail">
        <figure className="image">
            <img src={project.image} alt={project.name} />
            <button className="claps" onClick={handleClaps}>
                👏{project.claps}
            </button>
        </figure>
        <section className="details">
            <h4>{project.name}</h4>
            <p>{project.about}</p>
            <p>
                <a href={project.link}>Link</a>
            </p>
        </section>
        <div className="extra">
            <span className="badge blue">Phase {project.phase}</span>
            <div className="manage">
                <Link to={`/projects/${project.id}/edit`} state={{project}}>
                    <button>
                        <FaPencilAlt />
                    </button>
                </Link>
            </div>
            {/* note no delete for ease of demonstration */}
        </div>
    </div>
```


<br /> 

#### 9. In `App` create a route for `/project/:id/edit`
##### 9a. In `ProjectDetails` create a `Link` to `/project/:id/edit` with state `project`
##### 9b. Navigate to `/projects` upon successful submission of the edit form.

