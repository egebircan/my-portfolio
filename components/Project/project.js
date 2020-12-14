import styled from 'styled-components'
import styles from './index.module.css'
import Link from 'next/link'

export default function Project({ name, description, videoLink, demoLink, codeLink }) {
  return (
    <ProjectDiv>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <nav className={styles.nav}>
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
          <Link href="/" className={styles.btn}>more info</Link>
        </nav>
      </div>
      <p className={styles.description}>{description}</p>
      {videoLink &&
        <iframe className={styles.iframel}
          src={videoLink}>
        </iframe>
      }
    </ProjectDiv>
  )
}

const ProjectDiv = styled.div`
  width: 45%;
  height: 325px;
  margin-bottom: 175px;
  margin-right: 50px;

  @media (max-width: 767px) {
    width: 100%;
    height: 125px;
    margin-bottom: 150px;
  }
`