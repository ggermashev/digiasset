import styled from "styled-components";

const DfaStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  background-color: #c1c5fc;
  color: #01001e;
  position: relative;
  min-height: 10em;
  padding: 1em;
  
  img {
    height: 10em;
    width: 10em;
  }
  
  @media(max-width: 1350px) {
    padding-top: 2.5em;
    flex-direction: column;
    align-items: center;
    max-width: 600px!important;
  }
  
  &:hover {
    cursor: pointer;
    box-shadow: white 0 0 1em;
  }
  
  input[type='checkbox'] {
    height: 2em;
    width: 2em;
    &:hover {
      cursor: pointer;
    }
  }

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: .5em;
  
  p {
    text-align: start;
  }

  @media(max-width: 1350px) {
    width: 100%;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;
    h3 {
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      text-align: start;
    }
  }
`

const Publish = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
  position: absolute;
  top: .2em;
  right: .2em;
`


export {DfaStyled, Col, Publish}