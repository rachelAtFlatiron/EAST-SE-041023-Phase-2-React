# Components & Props

## SWBATs:

- [ ] Review the benefits of React over Vanilla JS
- [ ] Explain the difference between HTML and JSX 
- [ ] Explain the ReactDOM.render() method including what arguments it takes and why it's important
<br /><br />
- [ ] Explain the difference between declarative and imperative programming
- [ ] Review the importance of components and modular code
- [ ] Explain what props are and how to create them
- [ ] Recognize best practices when writing components and props
<br /><br />
- [ ] Review how a component is written
- [ ] Recognize destructured props and how to work with them
- [ ] Observe how to render multiple components from a list
---

## Deliverables

#### 1. Create an `App` component that:

##### - Returns a `Header`, `ProjectForm` and `ProjectList` components

##### - Provides the array of `projects` to `ProjectList` as props

<br />

##### 1a. Create a `Header` component that renders the text `Header`

##### 1b. Create a `ProjectForm` component that renders the text `ProjectForm`

##### 1c. Create a `ProjectList` component that renders the text `ProjectList`

<br />

#### 2. Define a `ProjectList` component that:

##### 2a. - Accepts the props provided to the component

##### 2b. - Destructures `projects` from the props object

##### 2c. - Maps over the `projects` array to render a `ProjectListItem` component for each element:

#####  - Provide a key prop set to the `project id` value

#####  - Provide each `project` object as a prop named `project`

<br />

##### 3. Define a `ProjectListItem` component that:

##### 3a. Accepts the props argument

##### 3b. Destructure the props object and return `project`

##### 3c. Destructure the properties of the `project` object

#####  3d. Displays the information of the `project` object

##### - Create an `img` element nested inside a `figure` element

##### - Set the `img` property `src` to the `img` variable created when destructuring

##### - Set the `img` property `alt` to `{name}`

##### - Create an `article` element with `h4` and `p` tags nested inside

<br />

#### 4. Dynamically render each project name inside the `h4` tag and the project about inside the `p` tag


### Resources

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Webpack](https://webpack.js.org/)
- [Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)

### VSCode extensions

- [draw.io integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [ES7+ React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
