import styled, {css} from "styled-components";

interface ISwitch {
    $active: 'my' | 'other'
}

const ProfileStyled = styled.div`
  padding: 5em;
  min-height: calc(100vh - 4em);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;

  #create-dfa {
    //box-shadow: white 0 0 1em;
  }

  h1 {
    text-align: center;
  }
`

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;

  .img-container {
    position: relative;
    height: 200px;
    width: 200px;
    border-radius: 100%;

    @media (hover: hover) {

      &:hover {
        cursor: pointer;

        img {
          opacity: 0.5;
        }

        svg {
          opacity: 1;
        }
      }
    }

    img {
      height: 200px;
      width: 200px;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: -2rem;
      content: none;
    }

    svg {
      height: 200px;
      width: 200px;
      opacity: 0;
      position: absolute;
      top: 0;
      left: -2rem;
      color: white;
      padding: 0;
    }

    @media (max-width: 767px) {
      img, svg {
        left: 0;
      }
    }

  }

  @media (max-width: 767px) {
    flex-direction: column;

  }
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: calc(100% - 80px - 5em);
  gap: 1em;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: center;
  align-items: center;
`

const Collection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`

const Switch = styled.div<ISwitch>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  
  button {
    width: 150px;
  }
  
  ${props => props.$active === 'my' && css`
    #my {
      box-shadow: white 0 0 1em;
    }
  `}

  ${props => props.$active === 'other' && css`
    #other {
      box-shadow: white 0 0 1em;
    }
  `}
`

export {ProfileStyled, PersonalInfo, Data, Row, Collection, Switch}