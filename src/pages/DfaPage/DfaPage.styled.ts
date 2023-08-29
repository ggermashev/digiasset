import styled from "styled-components";

const DfaPageStyled = styled.div`
  min-height: calc(100vh - 4em);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  max-width: 1600px;
  margin: 4em auto;
  gap: 2em;
  position: relative;

  h3 {
    color: white;
  }

  @media(max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`
const ShortInfo = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  
  h2 {
    text-align: center;
  }
  
  img {
    width: 300px;
    height: auto;
    max-width: 100%;
  }
  
  svg {
    position: absolute;
    align-self: start;
    height: 2em;
    width: 2em;
    top: -2.5em;
    left: .5em;
    
    &:hover {
      cursor: pointer;
      color: #4799eb;
    }
  }
`

const LongInfo = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: rgba(255,255,255,0.5);
  
  p {
    line-height: 1.5em;
    @media(max-width: 1400px) {
      width: 600px;
    }
    @media(max-width: 1100px) {
      width: 600px;
    }
    @media(max-width: 650px) {
      width: 550px;
    }
    @media(max-width: 580px) {
      width: 450px;
    }
    @media(max-width: 500px) {
      width: 400px;
    }
    @media(max-width: 430px) {
      width: 350px;
    }
    @media(max-width: 390px) {
      width: 300px;
    }
    @media(max-width: 330px) {
      width: 250px;
    }
    @media(max-width: 270px) {
      width: 200px;
    }
  }

  @media(max-width: 1100px) {
    align-items: center;
  }
  
`

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 1em;
  max-width: 900px;
  min-width: 600px;
  margin: 0 auto;
  
  @media(max-width: 650px) {
    width: 100%;
    min-width: 0;
  }

  div {
    width: 26%;
    
    @media(max-width: 1350px) {
      width: 34%;
    }

    @media(max-width: 650px) {
      width: 100%;
    }
  }

  a {
    color: #4799eb;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
`

const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 1em;
  max-width: 900px;
  min-width: 600px;

  @media(max-width: 650px) {
    width: 100%;
    min-width: 0;
  }

  div {
    width: 100%;
    @media(max-width: 1400px) {
      width: 600px;
    }
    @media(max-width: 1100px) {
      width: 600px;
    }
    @media(max-width: 650px) {
      width: 550px;
    }
    @media(max-width: 580px) {
      width: 450px;
    }
    @media(max-width: 500px) {
      width: 400px;
    }
    @media(max-width: 430px) {
      width: 350px;
    }
    @media(max-width: 390px) {
      width: 300px;
    }
    @media(max-width: 330px) {
      width: 250px;
    }
    @media(max-width: 270px) {
      width: 200px;
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
`

export {
    DfaPageStyled,
    ShortInfo,
    LongInfo,
    AdditionalInfo,
    Owner,
    Row
}