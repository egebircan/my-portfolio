import Header from "components/Header"
import styled from 'styled-components'
import { useContext, useEffect } from "react"
import { StoreContext } from 'store'
import Link from 'next/link'

export default function Home() {
  const { bannerClass, setBannerClass, terminalClass, showAnimation, setShowAnimation } = useContext(StoreContext)
  useEffect(() => {
    if(bannerClass == "banner") {
      setBannerClass("banner-load")
      setShowAnimation(false)
    } else {
      setBannerClass("banner-loaded")
    }
  }, [])

  return (
    <>
      <Header />
      <AboutDiv>
        <img className={bannerClass} src="banner2.png" />
        <div className={terminalClass}>
          <p>
            my name is ege .    .    .  <br></br>
          </p>
          <p>
            i'm a software engineer who is currently working <br></br>
          </p>
          <p>
            <span style={{marginLeft: "20px"}}>
              @kocfinans <br></br>
            </span>
          </p>
          <p>
            <span style={{marginLeft: "20px"}}>
              on native mobile application development <br></br><br></br>
            </span>
          </p>
          <p>
            i'm interested in
          </p>
          <p>
            <span style={{marginLeft: "20px"}}>
              javascript & swift 
            </span>
          </p>
          <p>
            <span style={{marginLeft: "20px"}}>
              augmented reality 
            </span>
          </p>
          <p>
            <span style={{marginLeft: "20px"}}>
              cross platform app dev  <br></br><br></br>
            </span>
          </p>
          <p>
            you can see my projects {" "} 
            <Link href="/projects">
              <a className="link">
                here
              </a>        
            </Link>
          </p>
          <p>
            for my current tech stack --> {" "}
            <a className="link" target="_blank" href="https://stackshare.io/egebircandev/my-current-tech-stack">
              stackshare
            </a>        
          </p>
          <p>you can also find me on: </p>
          <p style={{marginLeft: "20px"}}>
            <a className="link" target="_blank" href="https://github.com/egebircan">
              github
            </a>        
          </p>
          <p style={{marginLeft: "20px"}}>
            <a className="link" target="_blank" href="https://egebircan-dev.medium.com/">
              medium
            </a>        
          </p>
          <p style={{marginLeft: "20px"}}>
            <a className="link" target="_blank" href="https://tr.linkedin.com/in/ege-bircan-7000ab14a">
              linkedin
            </a>        
          </p>
          <p>contact --> egebircan.dev@gmail.com</p>
        </div>
      </AboutDiv>
    </>
  )
}

const AboutDiv = styled.div`
  background-color: black;
  color: #00ff66;
  width: 65%;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-top: 25px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  @media (max-width: 800px) {
    width: 95%;
    margin-top: 15px;
  }
`