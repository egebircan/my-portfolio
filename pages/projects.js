import Project from "components/Project"
import content from "content/content.json"
import Header from "components/Header"
import styled from 'styled-components'
import { StoreContext } from 'store'
import { useContext } from "react"

const renderProjects = projects => {
  return projects.map(project => (
    <Project name={project.name} 
             description={project.description} 
             demoLink={project.demoLink}
             codeLink={project.codeLink}
             liveLink={project.liveLink}
             techStack={project.techStack}
             />
  ))
}

export default function ProjectsPage() {
  const { terminalClass, setTerminalClass } = useContext(StoreContext)

  if(terminalClass == "terminal") {
    setTerminalClass("loadedTerminal")
  }

  return (
    <>
      <Header />
      <ProjectsLayout>
          {renderProjects(content["projects"])}
      </ProjectsLayout>
    </>
  )
}

const ProjectsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
  min-height: 0px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  @media (max-width: 800px) {
    width: 95%;
    flex-direction: column;
    margin-top: 15px;
  }
`