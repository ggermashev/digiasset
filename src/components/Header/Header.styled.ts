import styled, {css} from "styled-components";

const HeaderStyled = styled.div`
  top: 0;
  left: 0;
  z-index: 10;
  height: 4em;
  position: absolute;
  width: 100%;
  background-color: #c1c5fc;
  border-bottom: 1px solid blue;
  color: #01001e;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media(max-width: 767px) {
    justify-content: end;
    padding-right: 1em;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  position: relative;
  height: 100%;

  .link {
    padding: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
      &:hover {
        background-color: white;
        cursor: pointer;
      }
    }

    @media(max-width: 767px) {
      display: none;
    }
  }
  
  svg.menu-icon {
    color: #01001e;
    height: 100%;
    width: auto;
    
    &:hover {
      cursor: pointer;
      color: white;
    }
    
    display: none;
    
    @media(max-width: 767px) {
      display: initial;
    }
  }
`

export {HeaderStyled, Container}