import styled, {css} from "styled-components";

interface ISlide {
    $justifyContent?: string
}

const SlideStyled = styled.div<ISlide>`
  position: relative;
  width: calc(100% );
  //border-radius: 5vw;
  height: calc(100vh - 4em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #01001e;
  //top: 2em;
  //margin-bottom: 4em;
  padding: 2em;
  z-index: 5;
  
  ${props => props.$justifyContent && css`
    justify-content: ${props.$justifyContent};
  `}
`

export {SlideStyled}