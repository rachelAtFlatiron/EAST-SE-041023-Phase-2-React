
# Client Side Routing

## SWBATs

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V6
- [ ] Observe how to use the react-router-dom hooks useLocation, useNavigate, and useParams

---

## 💡 What is client side routing and React router?

"React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."
[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

⬇️

"Client side routing is a type of routing where as the user navigates around the application or website no full page reloads take place, even when the page’s URL changes. Instead, JavaScript is used to update the URL and fetch and display new content" - Will Taylor

---

##  🗒️ Planning Routes 

Before we do anything, we need to make a plan about what we want.

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

##  The Primary React Router Components 

- BrowserRouter

- Switch

- Route

- Link

- NavLink

---

##  1️⃣ BrowserRouter 

💡 `BrowserRouter` is a wrapper for App to allow conditional rendering based on the URL

❓ Where does it belong?

- Since `App` component is imported and mounted inside the `Index.js` file, this is a great place to wrap the component within `BrowserRouter`

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
```

---

##  Switch Component 

💡 `Switch` is a wrapper for Routes. Looks through all its child Route components and returns the first one that matches the current URL (like a switch statement in JavaScript)

❓ Where does it belong?

- Consider where most of the applications components are rendered, this is where they will be nested inside the `Switch` component. Typically this is in the `App` component. Sometimes an extra component will be created designated for just routing.

```js
return (
  <div className={isDarkMode ? "App" : "App light"}>
    <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    <Switch>
      <Home />
      <About />
      {renderForm()}
      <ProjectList
        projects={projects}
        onEditProject={onEditProject}
        onDeleteProject={onDeleteProject}
        setSelectedPhase={setSelectedPhase}
        setSearchQuery={setSearchQuery}
      />
      <Home />
      <ProjectDetail />
    </Switch>
  </div>
);
```

---

##  Creating routes using the Route Component 

💡 `Route` wraps content that should be visible when the designated route is active.

❓ Where does it belong?

- Every component nested inside of the `Switch` component will be individually wrapped inside of a `Route` component.

💥 Route will be provided a `path` prop. This is where the developer can define the URL associated with the component. That means that if the pattern of the URL matches the path defined, the Route will render its children. Otherwise, the Route renders null.

---

```js
return (
  <div className={isDarkMode ? "App" : "App light"}>
    <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects/new">
        <ProjectForm onAddProject={onAddProject} />
      </Route>
      <Route path="/projects/:id/edit">
        <ProjectEditForm onUpdateProject={onUpdateProject} />
      </Route>
      <Route path="/projects/:id">
        <ProjectDetail />
      </Route>
      <Route path="/projects">
        <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
      </Route>
    </Switch>
  </div>
);
```

---

##  Link Component 

💡 `Link` creates an anchor tag in your application that will navigate using React Router instead of the browser default

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>`

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href)

---

##  Replace the anchor tags in the Header Component 

```js
return (
  <header>
    <nav>
      <Link to="/" style={{ borderBottom: "none" }}>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
      </Link>
      <div className="navigation">
        <Link className="button" to="/projects">
          All Projects
        </Link>
        <Link className="button" to="/projects/new">
          Add Project
        </Link>
        <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
      </div>
    </nav>
  </header>
);
```
---

##  Using Navlink 

💡 `NavLink` is the same as Link with the additional feature that an "active" class will be added when the url matches the value of the 'to' prop

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>`

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href)