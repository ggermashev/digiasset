import React, {FC} from 'react';
import {ButtonStyled} from "./Button.styled";

interface IButton {
    onClick: () => void,
    children: React.ReactNode,
    theme?: 'light' | 'dark',
    className?: string,
    id?: string,
}

const Button: FC<IButton> = ({children, onClick, theme, className, id}) => {
    return (
        <ButtonStyled onClick={() => {onClick()}} $theme={theme} className={className} id={id}>
            {children}
        </ButtonStyled>
    );
};

export default Button;