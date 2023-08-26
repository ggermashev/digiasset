import React, {FC} from 'react';
import {ButtonStyled} from "./Button.styled";

interface IButton {
    onClick: () => void,
    children: React.ReactNode,
    theme?: 'light' | 'dark',
}

const Button: FC<IButton> = ({children, onClick, theme}) => {
    return (
        <ButtonStyled onClick={() => {onClick()}} $theme={theme}>
            {children}
        </ButtonStyled>
    );
};

export default Button;