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
  
  @media(max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    max-width: 600px!important;
  }
  
  &:hover {
    cursor: pointer;
    box-shadow: white 0 0 1em;
  }

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5em;
  
  p {
    text-align: start;
  }

  @media(max-width: 1050px) {
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

export {DfaStyled, Col}