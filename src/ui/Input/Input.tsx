import React, {FC, useEffect, useState} from 'react';
import {Wrap, InputStyled, Label, Alert} from "./Input.styled";

interface IInput {
    label: string,
    value: string,
    setValue: (value: string) => void,
    width?: string,
    textColor?: string,
    borderColor?: string,
    borderFocusedColor?: string,
    type?: 'text' | 'email' | 'password' | 'textarea'| 'only_letters'
    isValid?: boolean
    setIsValid?: (isValid: boolean) => void,
}

const Input: FC<IInput> = ({
                               label,
                               value,
                               setValue,
                               width,
                               textColor,
                               borderColor,
                               borderFocusedColor,
                               type = "text",
                               isValid,
                               setIsValid
                           }) => {

    const [alert, setAlert] = useState('')
    const [changed, setChanged] = useState(false)

    const inputType = (() => {
            switch (type) {
                case "textarea":
                    return 'textarea'
                case "password":
                    return "password"
                default:
                    return "text"
            }
        }
    )()

    useEffect(() => {

        if (setIsValid && changed) {
            switch (type) {
                case "password":
                    if (value.length === 0) {
                        setIsValid(false)
                        setAlert('Поле не должно быть пустым')
                    } else {
                        setIsValid(true)
                        setAlert('')
                    }
                    break;
                case "email":
                    if (!/.+@.+\..+/.test(value)) {
                        setIsValid(false)
                        setAlert('Адрес почты введен некорректно')
                    } else {
                        setIsValid(true)
                        setAlert('')
                    }
                    break;
                case "only_letters":
                    if (value.length === 0) {
                        setIsValid(false)
                        setAlert('Поле не должно быть пустым')
                    } else if(/[^а-яА-Я]+/.test(value)) {
                        setIsValid(false)
                        setAlert('Допустима только кириллица')
                    } else {
                        setIsValid(true)
                        setAlert('')
                    }
                    break;
                default:
                    if (value.length === 0) {
                        setIsValid(false)
                        setAlert('Поле не должно быть пустым')
                    } else {
                        setIsValid(true)
                        setAlert('')
                    }
                    break;

            }
        }
        setChanged(true)

    }, [value])

    return (
        <Wrap $width={width} $textColor={textColor}>
            <Label>{label}</Label>
            <InputStyled
                value={value}
                onChange={e => setValue(e.target.value)}
                $borderColor={borderColor}
                $borderFocusedColor={borderFocusedColor}
                type={inputType}
            />
            <Alert>{alert}</Alert>
        </Wrap>
    );
};

export default Input;