import Header from "./components/Header.js"
import ProjectList from "./components/ProjectList.js";
import ProjectForm from "./components/ProjectForm.js";
import projects from './projects.js'

function App() {
  function a() {

  }

  function b() {

  }
  
  return (
    <div className="App">

      <Header />
      <ProjectForm />
      <ProjectList allProjects={projects} />
    </div>
  );
}

export default App;
