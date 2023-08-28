import React, {useEffect, useState} from 'react';
import {RegistrationStyled, FormStyled, LinkStyled} from "./Registration.styled";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import User from "../../store/User"
import {observer} from "mobx-react-lite";

const Registration = observer(() => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [nameIsValid, setNameIsValid] = useState(false)
    const [surnameIsValid, setSurnameIsValid] = useState(false)
    const [nicknameIsValid, setNicknameIsValid] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (User.isAuth) {
                navigate('/')
            }
        }, 500)

        window.scroll(0, 0)
    }, [])

    return (
        <RegistrationStyled>
            <FormStyled>
                <h3>Создание аккаунта</h3>
                <Input
                    label={"name"}
                    type={'only_letters'}
                    value={name}
                    setValue={setName}
                    width={'300px'}
                    isValid={nameIsValid}
                    setIsValid={setNameIsValid}
                />
                <Input
                    label={"surname"}
                    type={'only_letters'}
                    value={surname}
                    setValue={setSurname}
                    width={'300px'}
                    isValid={surnameIsValid}
                    setIsValid={setSurnameIsValid}
                />

                <Input
                    label={"nickname"}
                    value={nickname}
                    setValue={setNickname}
                    width={'300px'}
                    isValid={nicknameIsValid}
                    setIsValid={setNicknameIsValid}
                />
                <Input
                    label={"email"}
                    type={"email"}
                    value={email}
                    setValue={setEmail}
                    width={'300px'}
                    isValid={emailIsValid}
                    setIsValid={setEmailIsValid}
                />
                <Input
                    label={"password"}
                    type={"password"}
                    value={password}
                    setValue={setPassword}
                    width={'300px'}
                    isValid={passwordIsValid}
                    setIsValid={setPasswordIsValid}
                />
                <Button
                    theme={'light'}
                    onClick={() => {
                        if (nameIsValid && surnameIsValid && nicknameIsValid && emailIsValid && passwordIsValid) {
                            User.registration({name, surname, nickname, email, password})
                            setTimeout(() => {
                                if (User.isAuth) {
                                    navigate('/')
                                } else {
                                    console.log('Ошибка регистрации')
                                }
                            }, 500)
                        }
                    }}
                >
                    Создать
                </Button>
                <p>Уже есть аккаунт? <Link to={'/login'}><LinkStyled>Войти</LinkStyled></Link></p>
            </FormStyled>
        </RegistrationStyled>
    );
});

export default Registration;