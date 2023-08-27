import styled, {css} from "styled-components";

interface ITitle {
    $backLite?: boolean
    $size?: 'small' | 'big'
}

interface IBg {
    $bgNumber: number
}

const MainPageStyled = styled.div`
  min-height: calc(100vh - 4em);
  
  img {
    width: 100%;
    max-width: 700px;
  }
`

const Title = styled.h1<ITitle>`
  font-size: 1.5em;
  
  button {
    width: 80vw;
  }

  @media (min-width: 767px) {
    font-size: 2em;
  }

  @media (max-width: 400px) {
    font-size: 1em;
  }

  text-align: center;

  ${props => props.$size === 'big' && css`
    font-size: 3em;

    @media (min-width: 767px) {
      font-size: 4em;
    }

    @media (max-width: 400px) {
      font-size: 2em;
    }
  `}

  ${props => props.$backLite && css`
    text-shadow: white 0 0 1em;
  `}
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 1em;
  min-height: 30%;
  
  @media(max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 50%;
  }
`

const Law = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media(max-width: 767px) {
    flex-direction: row;
    gap: 1em;
    font-size: .9em
  }
  
`

const BG = styled.div<IBg>`
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  ${props => css`
    background-image: url(${require(`../../images/bg${props.$bgNumber}.jpg`)});
  `}
  background-repeat: no-repeat;
  background-size: cover;
`

const Advantages = styled.div`
    h1::before {
      content: url(${require('../../images/checkmark.png')});
    }
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  
  h1 {
    width: 100%;
    text-align: start;
  }
`


export {MainPageStyled, Title, BG, Row, Law, Advantages}