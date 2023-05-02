import Header from "./components/Header";
import ProjectList from "./components/ProjectList"
import ProjectForm from "./components/ProjectForm"
import projects from './projects'


function App() {
  return (
    <div className="App">
      <Header />
      <button>Dark Mode</button>
      <ProjectForm />
      <ProjectList projects = {projects}/>
    </div>
  );
}

export default App;
