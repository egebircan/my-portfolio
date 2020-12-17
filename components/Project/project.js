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
  background-color: black;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  @media (max-width: 1333px) {
    width: 100%;
    height: 300px;
    margin: 0px;
    margin-bottom: 25px;
  }
`