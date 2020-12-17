import Header from "components/Header"
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Header />
      <PageTitle>
        cat about.txt
      </PageTitle>
      <AboutDiv>
        <div style={{width: "90%", margin: "auto", padding: "20px" }}>
          <HelloDiv>hello, my name is <b>ege</b> </HelloDiv>
          <div style={{ fontSize: "30px" }}>
            i'm a software engineer who is currently working
            <IndentDiv>
              <b>@kocfinans</b>
            </IndentDiv>
            <IndentDiv>
              on <b>native mobile application development</b>
            </IndentDiv>
          </div>
        </div>
      </AboutDiv>
    </>
  )
}

const PageTitle = styled.div`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: bold;
`

const AboutDiv = styled.div`
  background-color: black;
  color: #00ff66;
  width: 75%;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const IndentDiv = styled.div`
  margin-left: 25px;
`
const HelloDiv = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
`