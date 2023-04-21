import Header from "./components/Header";
import ProjectList from "./components/ProjectList"
import ProjectForm from "./components/ProjectForm"
import projects from './projects'


function App() {
  return (
    // Deliverables 1a, 1b, 1c
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects = {projects}/>
    </div>
  );
}

export default App;
