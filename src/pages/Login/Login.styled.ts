import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 4em);
  color: #01001e;
`

const FormStyled = styled.div`
  width: 500px;
  height: auto;
  padding: 1em;
  border-radius: 1em;
  max-width: 90%;
  background-color: white;
  box-shadow: #c1c5fc 0 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
`

const LinkStyled = styled.span`
  color: blue;
`

export {LoginStyled, FormStyled, LinkStyled}