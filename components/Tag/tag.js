import styled from 'styled-components'

const dd = "#FFFACD"

const tagColors = {
  "javascript": "#D1D403", 
  "typescript": "#1C41B3", 
  "react": "#26CEEC",
  "redux": "#6F4FB6",
  "react-dnd": "#78DCE1",
  "react-beautiful-dnd": "#78DCE1", 
  "react-bootstrap": "#00ACF2", 
  "next.js": "#3E3B3D", 
  "node": "#47952F", 
  "express": "#B7B7B8", 
  "php": "#4D598B", 
  "mysql": "#E2B829", 
  "oauth 2.0": "#EF81C5",
  "java": "#924504", 
  "spring-boot": "#08CB11", 
  "mongo": "#09E713",
  "selenium": "#299812", 
  "webdrivers": "#BF154B",
  "docker": "#1FE1CC",
  "vercel": "##3E3B3D",
  "netlify": "#1B81BC"
}

export default function Tag({ name }) {
  return (
    <TagDiv backgroundColor={tagColors[name]}>{name}</TagDiv>
  )
}

const TagDiv = styled.div`
  color: white;
  font-weight: bold;
  background-color: ${props => (props.backgroundColor)};
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 20%;
  border-radius: 50px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
