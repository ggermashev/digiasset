import React, {FC, useState} from 'react';
import {Wrap, InputStyled, Label, Alert} from "./Input.styled";

interface IInput {
    label: string,
    value: string,
    setValue: (value: string) => void,
    width?: string,
    textColor?: string,
    borderColor?: string,
    borderFocusedColor?: string
}

const Input: FC<IInput> = ({
                               label,
                               value,
                               setValue,
                               width,
                               textColor,
                               borderColor,
                               borderFocusedColor
                           }) => {

    const [alert, setAlert] = useState('')

    return (
        <Wrap $width={width} $textColor={textColor}>
            <Label>{label}</Label>
            <InputStyled
                value={value}
                onChange={e => setValue(e.target.value)}
                $borderColor={borderColor}
                $borderFocusedColor={borderFocusedColor}
            />
            <Alert>{alert}</Alert>
        </Wrap>
    );
};

export default Input;