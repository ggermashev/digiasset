import React, {useEffect, useState} from 'react';
import {LoginStyled, FormStyled, LinkStyled} from "./Login.styled";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import User from "../../store/User"
import {observer} from "mobx-react-lite";

const Login = observer(() => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (User.isAuth) {
                navigate('/profile')
            }
        }, 500)

        window.scroll(0, 0)
    }, [])

    return (
        <LoginStyled>
            <FormStyled>
                <h3>Вход в аккаунт</h3>
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
                        if (emailIsValid && passwordIsValid) {
                            User.login(email, password)
                            setTimeout(() => {
                                if (User.isAuth) {
                                    navigate('/profile')
                                } else {
                                    alert('Ошибка входа')
                                }
                            }, 500)
                        }
                    }}
                >
                    Войти
                </Button>
                <p>Нет аккаунта? <Link to={'/registration'}><LinkStyled>Регистрация</LinkStyled></Link></p>
            </FormStyled>
        </LoginStyled>
    );
});

export default Login;