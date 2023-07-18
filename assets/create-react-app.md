# Getting Started with Create React App

## Creating a React App

`create-react-app` will build a project folder for our application and install all the dependencies we need (via Node Package Manager).

To create a new React application and start it, run:

```
npx create-react-app app-name
cd app-name
npm start
```

In addition to React, it gives us:

- Webpack: a tool for bundling and minifying our code (along with a server for running our code in development)
- Babel: a transpiler that lets us write modern JavaScript and JSX

Note:
- ```npx``` stands for node packaage executable.  A package you run to execute a program (in our case ```create-react-app```)
- ```npm``` stands for node package manager.  It is responsible for installing, deleting, updating packages on your computer.
<br />

***
## Downloading packages: `npm install`
- This will download all the packages in the package.json file.  It will create a ```node_modules``` folder containing the downloaded code and a ```package-lock.json``` containing more information on any additional packages that were automatically downloaded.  
- **Do not alter the ```package-lock.json``` or ```node_modules``` folder**, however you can delete both and rerun `npm install`.  This is necessary if you add any additional dependencies (packages) to your project. 
<br />

***
## React and github `.gitignore`
- The `.gitignore` file is generated when a github repository is created in a directory using `git init`.  It contains instructions for files and folders not to push to the remote location (the internet).  This will include the `node_modules` folder and `package_lock.json` file.  
- We do not want `node_modules` pushed to the remote location (the internet) because it will contain a significant amount of code that takes up a lot of space.  Dependencies saved in `node_modules` will be installed via the package.json file upon cloning the repository onto your local machine and running `npm install`.

***
## Starting the development server: `npm start`
- This will start up a server running your React app.  It will automatically update when you save changes in your files. <br />
- ```npm start``` is actually a shortcut for the script ```react-scripts start```.  You can find the definition for this shortcut in the package.json files under "scripts".  In future phases you can alter these scripts to suit your needs.  
<br />

***
### Learn More

What is React via [Canvas](https://learning.flatironschool.com/courses/5263/pages/what-is-react?module_item_id=512685)
Intro to NPM via [Canvas](https://learning.flatironschool.com/courses/5263/pages/intro-to-npm?module_item_id=512686)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
