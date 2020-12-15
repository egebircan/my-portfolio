import styled from 'styled-components'

export default function Tag({ name }) {
  return (
    <TagDiv>{name}</TagDiv>
  )
}

const TagDiv = styled.div`
  background-color: green;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 20%;
`
