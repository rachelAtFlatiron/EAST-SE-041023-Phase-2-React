---

title: "01_components_props"
output:
  theme: white

--- 

# React

---

## ✅ Objectives 

- Discuss the benefits of React over Vanilla JS
- Explain the importance of components
- Practice writing components
- Define props and how to create them
- Recognize destructured props and how to work with them
- Recognize best practices when writing components and props
- Render multiple components from a list

---

## ❓ Why React 

Writing vanilla JavaScript is hard especially when it comes to
- Creating/Updating DOM elements
- Code organization (separation of concerns)

---

## 💡 React Philosophy 

- Use declarative syntax (JSX)
- Make it easier to work with the DOM

---

## Declarative vs Imperative 

- Imperative: Describing how to do something (an explicit sequence of events):

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
```

- Declarative: Describe what we want (specifies the result):

```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
```

---

## JS vs. JSX 
Under the hood, React apps use a tool called Babel, a Javascript compiler, to transpile the JSX syntax to valid JS

- we write JSX
- babel transpiles JSX into valid JS
- that transpiled code is what actually runs in the browser

---

The code you write
```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
 
```

The code the browser runs
```js
"use strict";
var h1 =
  /*#__PURE__*/
  React.createElement(
    "h1",
    { id: "main", className: "blue" },
    "Hello from JSX!"
  );
```

---

## ReactDOM.render 

```js
ReactDOM.render(<App />, document.getElementById('root'))
```

- inserts a react element into the DOM
- first arg is the react element we'd like to render to the DOM(JSX)
- the second argument is the DOM node where we want to insert that react element

<br />

- Note: This is usually contained in `index.js`
- All children of <App /> will also be rendered

--- 

NOTE: ReactDOM.render only works with React up to version 17.  We will be using version 16.  React 18 now uses ReactDOM.createRoot() but it does the same thing as ReactDOM.render().

---


## `StrictMode`

- runs additional checks and warnings
- does not show up on the DOM
- only runs in development mode
- you can wrap any component in strict mode, create-react-app by default wraps the entire `App` in strict mode

```js
<React.StrictMode>
  <App />
<React.StrictMode>
```

#### `StrictMode` can...
- identify unsafe lifecycles and detecting unexpected side effects
- give warnings about deprecated code 

---

## 🚗 React Roadmap

The goals for Phase 2: 

- Create a static frontend site with components and props (DOM Manipulation)
- Use state and events to make your site dynamic (Event Handling)
- Add side effects and data fetching to communicate with a server (Network Communication)

---

## `create-react-app` demo

---


## Static vs Dynamic 

- Static websites: websites that deliver the same content for all users
- Dynamic websites: websites that change files on the web server (which is different from the database server) based on some factor

<br />

- React is considered static because we always send the client the same JS, however the data itself can be considered dynamic as it changes based on user interaction

---

## Virtual DOM

- React creates a virtual representation of the UI that is saved in browser memory
- ReactDOM is responsible for making sure the real DOM matches the virtual DOM
- This process abstracts out the manual updating, element creation, etc. from phase 1

---

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CqdIWZy0NMPQhYx2rKzo9g.png" width="900px"/>

---

<img src="https://react.dev/images/docs/s_thinking-in-react_ui_outline.png" width="900px" />

---

## Lifecycle Terms

- Mount: When a component is first added to the DOM
- Re-render/update: When a component updates DOM nodes 
- Unmount: When a component is removed from the DOM

---

## React Lifecycle

<img width="900px" src="https://media.licdn.com/dms/image/D5612AQE5Nzfep6s1Ww/article-inline_image-shrink_1500_2232/0/1654106745367?e=1686787200&v=beta&t=-L8G2BVZeprAmOVOE6QHdE_wJFpcpuhxhWZgAIBPpAA"> 



---

## Components 
Components are the building blocks of React. A component is a <strong>function</strong> that:

- Takes in some raw data (props)
- Returns user interface (JSX)

</p>

```js
const Header = () => {
  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
```

---

## Component Gotchas 

This is okay:

```js
function Card() {
  return (
    <div id="card1" className="card">
      <h1>hi</h1>
      <p>wassup?</p>
    </div>
  );
}
```

This is NOT okay:

```js
function card() {
  return (
    <h1>hi</h1>
    <p>wassup?</p>
  )
}
```

- Component name needs to be capitalized
- Components can only return one element

---

## 🎩 Props! 

When you create components, one way to make them dynamic and reusable is by passing in props. For example, if we wanted to create several cards on our page using a Card component, we could do so like this:

```js
function Card(props) {
  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}

// Inside another component

return (
  <div>
    <Card greeting="hi" subGreeting="hello" />
    <Card greeting="sup" subGreeting="what's up" />
  </div>
);
```

---

## 🎩 Props Continued 

The props argument in our Card component defines an object that React will pass to our function when it is called, and it will use whatever attributes we add to our JSX component as key-value pairs on that props object.

For example, if we were to add a console.log in the Card component above, we'd end up seeing this object:

```js
function Card(props) {
  console.log(props); // => { greeting: "hi", subGreeting: "hello" }

  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}
```

---

## Component Iteration

We can expand on this by translating using `forEach`

```js
  //vanilla js
  cards.forEach(card => {
    let h1 = document.createElement('h1')
    h1.textContent = card.title
    parentNode.append(h1)
  })
```

```js
  //react
  return (
    <div>
      {cards.forEach(card => <CardComponent cardProp={card} />)}
    </div>
  )
```



## Modular Coding 

- Clearer connection between the code we write and what is displayed in the browser
- Use components to break down complex UI into smaller pieces which creates a better separation of concerns
- Easier to maintain


---


<img src="https://react.dev/images/docs/s_thinking-in-react_ui_outline.png" width="900px" />

---

## Wireframes 

Tools: 

- [Miro](https://miro.com/)
- [Balsamiq](https://balsamiq.com/)
- [Figma](https://www.figma.com/wireframe-tool)
- [LucidChart](https://www.lucidchart.com/pages/examples/wireframe_software)

---

## Components Demo
