import styled from 'styled-components'

export default function Tag({ name }) {
  return (
    <TagDiv>{name}</TagDiv>
  )
}

const TagDiv = styled.div`
  background-color: #cdcdcd;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 20%;
  border-radius: 50px 20px;
`
