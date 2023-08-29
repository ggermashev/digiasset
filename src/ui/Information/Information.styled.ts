import styled from "styled-components";

const InformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: .5em;
  padding: .5em;
  background-color: inherit;
`

const Title = styled.p`
    color: rgba(255,255,255,0.5);
`

const Info = styled.p`
  color: rgba(255,255,255,0.9);
`

export {InformationStyled, Title, Info}