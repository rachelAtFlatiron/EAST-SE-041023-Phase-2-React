---

title: "07_client_routing"

---

# Client Side Routing 📲 

---

## ✅ Objectives 

- Review the difference between server-side and client-side routing
- Observe a refactor to include client-side routing using React Router V6
- Observe how to use the react-router-dom hook useParams

---

## 💡 What is client side routing and React router?

"React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."
[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/tutorial)

⬇️

"Client side routing is a type of routing where as the user navigates around the application or website no full page reloads take place, even when the page’s URL changes. Instead, JavaScript is used to update the URL and fetch and display new content" - Will Taylor

---

## Note: 

While the curriculum has lessons for React Router V5 we will be using React Router V6

---

##  The Primary React Router Components 

- BrowserRouter (as Router)

- Routes

- Route

- Link or NavLink

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

##  Routes Component 

💡 `Routes` is a wrapper for all your `Route`s. It looks through all its child Route components and returns the first one that matches the current URL (like a switch statement in JavaScript)

❓ Where does it belong?

- Consider where most of the application's components are rendered.  Typically this is in the `App` component. Sometimes an extra component will be created designated for just routing.

```js
return (
  <div className={isDarkMode ? "App" : "App light"}>
    <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    <Routes>
      //route1
      //route2
      ...
    </Routes>
  </div>
);
```

---

##  Creating routes using the Route Component 

💡 `Route` wraps content that should be visible when the designated route is active.

❓ Where does it belong?

- Every component nested inside of the `Routes` component will be individually wrapped inside of a `Route` component.

💥 Route will be provided a `path` prop. This is where the developer can define the URL associated with the component. That means that if the pattern of the URL matches the path defined, the Route will render its children. Otherwise, the Route renders null.

💥 Route also has an `element` props where you will pass in the component to render at that URL.  You can still pass props to that component!

```js
<Route path="/url" element={<SomeComponent someProp={someProp} />} />
```


---


##  Link Component 

💡 `Link` creates an anchor tag in your application that will navigate using React Router instead of the browser default

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>`

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href)

```js
<Link to={"/url"}>Click Me!</Link>
```

💥 You usually see a bunch of `Link`s in navigation menus.

---

##  Using Navlink 

💡 `NavLink` is the same as Link with the additional feature that an "active" class will be added when the url matches the value of the 'to' prop

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>`

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href)

---

## Demo

---

## useLocation

- useLocation is a hook that returns information about our current location:

```js
{
  pathname: '/projects/2/edit', 
  search: '', 
  hash: '', 
  state: {…}, 
  key: '6u2ggbwf'

}
```
- You can pass information through `Link` using the `state` prop that is accessible when using `useLocation`

```js

<Link to={"/url"} state={{ stuff: "hello" }}>

```

```js
import { useLocation } from "react-router-dom" 

function UrlComponent(){
  const location = useLocation()
  const { stuff } = location.state
}

```

- Note: useLocation state needs to be JSON serializable such that we can't pass in any functions

---

## useParams

- `useParams` is another hook that gets information from queries sent along with the URL

```js
<Route to="some/url/:id" element={SomeComponent /} />
```

```js
import { useParams } from "react-router-dom"

const { id } = useParams()
```

---

## redirect

- Use `redirect` to redirect to another route especially in response to data

```js
import { redirect } from "react-router-dom"
fetch(url)
  .then(res => res.json())
  .then(() => redirect("/some/other/url"))
```

- Note: You may come across a `useNavigate` hook that replaces react router 5's `useHistory`...it is not reommended to use `useNavigate` for redirects involving fetches
- `useNavigate` is meant to be used inside your component (i.e. the `jsx`) whereas `redirect` is meant to be used inside normal functions

---

## URL structure

<img src="https://cdn.cognitiveseo.com/blog/wp-content/uploads/2019/11/url-structure-1024x538.jpg" widht="800px" />