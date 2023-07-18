import Header from "./components/Header";
import ProjectList from "./components/ProjectList"
import ProjectForm from "./components/ProjectForm"
import projects from './projects'


function App() {
  return (
    //✅ 1. create child components
    //✅ 1a. create a header component
    //✅ 1b. create a project form component
    //✅ 1c. create a project list component
    //✅ 1d. provide an array of projects to the project list
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects = {projects}/>
    </div>
  );
}

export default App;
