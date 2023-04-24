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

#### 1. Create an `App` component displays the following child components:

##### - A `Header`, `ProjectForm` and `ProjectList` component


##### 1a. Create a `Header` component that renders the text `Header`

##### 1b. Create a `ProjectForm` component that renders the text `ProjectForm`

##### 1c. Create a `ProjectList` component that renders the text `ProjectList`

##### 1d. Import the child components into `App` and render

<br />

#### 2. Provide the array of `projects` to `ProjectList` as props

##### - import `projects.js`
##### - pass it as props to `ProjectList`

<br />

#### 3. Update the `ProjectList` component to render a list of project titles:

##### 3a. Create a `ProjectListItem` component

##### 3b. In `ProjectList` create a `ProjectListItem` for each project title

<br />

#### 4. Update the `ProjectListItem` component to display the entire project:

##### 4a. Accept the entire `project` as an argument

##### 4b. Destructures the props object

#####  4c. Displays the information of the `project` object

<br />


```js
<li className="card">
    <figure className="image">
        <img src="" alt="" />
        <button className="claps">👏""</button>
    </figure>
    <section className="details">
        <h4>""</h4>
        <p>""</p>
        <p>
            <a href="">Link</a>
        </p>
    </section>

    <footer className="extra">
        <span className="badge blue">Phase ""</span>
    </footer>
</li>
```

***

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
