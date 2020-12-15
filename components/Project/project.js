import styled from 'styled-components'
import styles from './index.module.css'
import Tag from "components/Tag"

const renderTechStack = (tags) => {
  return tags.map(tag => (
    <Tag name={tag.name}/>
  ))
}
export default function Project({ name, description, demoLink, codeLink }) {
  return (
    <ProjectDiv>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
          {demoLink &&
            <a href={demoLink} target="_blank" className={styles.btn}>
                demo 
            </a>
          }
          {codeLink &&
            <a href={codeLink} target="_blank" className={styles.btn}>
                code
            </a>
          }
      </div>
      <div className={styles.techstack}>
        {renderTechStack([{name: "react"}, {name: "redux"}, {name: "react"}, {name: "redux"}, {name: "react"}, {name: "redux"}, {name: "react"}, {name: "redux"}])}
      </div>
      <div className={styles.descriptionDiv}>{description}</div>
    </ProjectDiv>
  )
}

const ProjectDiv = styled.div`
  width: 45%;
  height: 250px;
  margin: 25px;
  background-color: red;

  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
  }
`