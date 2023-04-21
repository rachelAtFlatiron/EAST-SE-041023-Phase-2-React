import { createContext, useState, useEffect } from "react"

const ProjectContext = createContext()

const CustomProjectProvider = ({ children }) => {
    const [ testState, setTestState ] = useState("hi...i'm state")
    const [ projects, setProjects ] = useState([])

    console.log('hi from projectscontex.js')

    const getProjects = () => {
        fetch('/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    }

    const showTest = () => {
        console.log("hi i'm from projectProvider")
    }


    const projectCtx = {
        showTest: showTest,
        testState: testState,
        getProjects
    }

    return(
        <ProjectContext.Provider value={projectCtx}>
            {children} {/* pretty sure this is composition */}
        </ProjectContext.Provider>
    )
}

export {ProjectContext, CustomProjectProvider}


//import ProjectProvider into App.js or index.js? and wrap app.js with <ProjectProvider>
//import ProjectContext into App.js or index.js? and create a ctx value
// const ctx = useContext(ProjectContext)


//