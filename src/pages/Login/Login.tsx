import React, {useState} from 'react';
import {LoginStyled, FormStyled, LinkStyled} from "./Login.styled";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import User from "../../store/User"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    return (
        <LoginStyled>
            <FormStyled>
                <h3>Вход в аккаунт</h3>
                <Input
                    label={"email"}
                    value={email}
                    setValue={setEmail}
                    width={'300px'}/>
                <Input
                    label={"password"}
                    value={password}
                    setValue={setPassword}
                    width={'300px'}/>
                <Button
                    theme={'light'}
                    onClick={() => {
                        User.login('', '')
                        navigate('/')
                    }}
                >
                    Войти
                </Button>
                <p>Нет аккаунта? <Link to={'/registration'}><LinkStyled>Регистрация</LinkStyled></Link></p>
            </FormStyled>
        </LoginStyled>
    );
};

export default Login;