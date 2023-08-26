import styled, {css} from "styled-components";

interface IButton {
    $theme?: 'light' | 'dark',
}

const ButtonStyled = styled.button<IButton>`
  border: none;
  border-radius: .5em;
  padding: .5em;
  background-image: linear-gradient(#3e3efa, #2424d7, #0202a8);
  color: white;

  ${props => props.$theme === 'light' && css`
    background-image: linear-gradient(#0202fa, #0202c5, #0202a8);
    color: white;
  `}

  ${props => props.$theme === 'dark' && css`
    background-image: linear-gradient(#c3c3f3, #a5a5f5, #8b8bee);
    color: #01001e;
  `}

  font-size: 1.05em;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;

      background-image: linear-gradient(#5d5dfc, #3a3ad9, #2c2c98);

      ${props => props.$theme === 'light' && css`
        background-image: linear-gradient(#5d5dfc, #3a3ad9, #2c2c98);
      `}

      ${props => props.$theme === 'dark' && css`
        background-image: linear-gradient(#afaff8, #8e8ef6, #7575f1);
      `}
    }
  }
`

export {ButtonStyled}