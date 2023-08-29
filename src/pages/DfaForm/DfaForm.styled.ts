import styled from "styled-components";

const DfaFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4em);
  position: relative;
  width: 100%;
`

const FormStyled = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: rgba(193,197,252);
  position: relative;
  gap: 2em;
  border-radius: 1em;
  margin: 2em 0;

  .width {
    width: 90%;
  }
  
  .submit-btn {
    font-size: 1.5em;
    margin-top: 6em;
  }
`

export {DfaFormStyled, FormStyled}