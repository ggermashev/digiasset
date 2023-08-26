import styled from "styled-components";

const FooterStyled = styled.div`
  min-height: 10em;
  background-color: #c1c5fc;
  color: #01001e;
  width: 80%;
  border-radius: 20vw 20vw 0 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2em;
  gap: 2em;
  position: relative;
  
  h1 {
    text-align: center;
  }
  
  @media(max-width: 767px) {
    width: 100%;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5em;
  width: 100%;
  
  h3 {
    text-align: center;
  }
  
  @media(max-width: 1000px) {
    h3 {
      width: 30%;
      
    }
  }

  @media(max-width: 767px) {
    h3 {
      width: 45%;
    }
  }

  @media(max-width: 340px) {
    h3 {
      width: 100%;
    }
  }
`

export {FooterStyled, Row}