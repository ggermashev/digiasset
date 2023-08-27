import styled from "styled-components";

const FooterStyled = styled.div`
  height: calc(100vh / 2);
  background-color: #c1c5fc;
  color: #01001e;
  width: 80%;
  border-radius: 20vw 20vw 0 0;
  margin: 2em auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2em;
  gap: 2em;
  position: relative;
  z-index: 10;

  h1 {
    text-align: center;
  }

  @media (max-width: 767px) {
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
    user-select: none;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        color: white;
        text-shadow: black 0 0 1em;
      }
    }
  }

  @media (max-width: 1000px) {
    h3 {
      width: 30%;

    }
  }

  @media (max-width: 767px) {
    h3 {
      width: 45%;
    }
  }

  @media (max-width: 340px) {
    h3 {
      width: 100%;
    }
  }
`

const PersonalInfoStyled = styled.div`
  h3 {
    text-align: center;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 1em;
  width: 100%;
  
  img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`

const Description = styled.p`
  text-align: start;
  width: 100%;
`


const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`

export {FooterStyled, Row, Info, Description, Contacts, PersonalInfoStyled}