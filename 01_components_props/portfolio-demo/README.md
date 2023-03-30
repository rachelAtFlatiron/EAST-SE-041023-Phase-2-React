# Components & Props

### SWBATs:

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


<!-- demo -->
### Deliverables

#### 1. Create an `App` component that:

- Returns the `Header`, `ProjectForm` and `ProjectList` components

- Provides the array of `projects` to `ProjectList` as props

#### 2. Create a `header` component that:

- Renders the text `Header`

#### 3. Create a `ProjectForm` component that:

- Renders the text `ProjectForm`

#### 4. Define a `ProjectList` component that:

- Accepts the props provided to the component

- Destructures `projects` from the props object

- Maps over the `projects` array to render the `ProjectListItem` component for each element:

  - Provide a key prop set to the `project id` value

  - Provide each `project` object as a prop named `project`

#### 5. Define a `ProjectListItem` component that:

- Accepts the props argument

- Destructure the props object and return `project`

- Destructure the properties of the `project` object

- Create an `img` element nested inside a `figure` element

- Set the `img` property `src` to the `img` variable created when destructuring

- Set the `img` property `alt` to `project: ${name}`

- Create an `article` element with `h4` and `p` tags nested inside

  - Dynamically render each project name inside the `h4` tag

  - Dynamically render each project's about data inside the `p` tag


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
