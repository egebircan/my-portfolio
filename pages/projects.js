import Project from "components/Project"
import content from "content/content.json"
import Header from "components/Header"
import styled from 'styled-components'

const renderProjects = projects => {
  return projects.map(project => (
    <Project name={project.name} 
             description={project.description} 
             videoLink={project.videoLink} 
             demoLink={project.demoLink}
             codeLink={project.codeLink}
             />
  ))
}
export default function ProjectsPage() {
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

  @media (max-width: 800px) {
    flex-direction: column;
  }
`