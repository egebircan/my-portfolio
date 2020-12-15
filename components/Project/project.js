import styled from 'styled-components'
import styles from './index.module.css'
import Tag from "components/Tag"

const renderTechStack = (tags) => {
  return tags.map(tag => (
    <Tag name={tag}/>
  ))
}
export default function Project({ name, description, demoLink, codeLink, techStack }) {
  return (
    <ProjectDiv>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
          {demoLink &&
            <a href={demoLink} target="_blank" className={styles.btn}>
              <div>
                demo
              </div>
            </a>
          }
          {codeLink &&
            <a href={codeLink} target="_blank" className={styles.btn}>
              <div>
                code
              </div>            
            </a>
          }
      </div>
      <div className={styles.techstack}>
        {renderTechStack(techStack)}
      </div>
      <div className={styles.descriptionDiv}>{description}</div>
    </ProjectDiv>
  )
}

const ProjectDiv = styled.div`
  width: 45%;
  height: 250px;
  margin: 25px;
  background-color: white;
  border-radius: 20px;

  @media (max-width: 1333px) {
    width: 100%;
    height: 300px;
    margin: 0px;
    margin-bottom: 25px;
  }
`