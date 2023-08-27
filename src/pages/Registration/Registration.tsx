import React, {useState} from 'react';
import {RegistrationStyled, FormStyled, LinkStyled} from "./Registration.styled";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import User from "../../store/User"

const Registration = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    return (
        <RegistrationStyled>
            <FormStyled>
                <h3>Создание аккаунта</h3>
                <Input
                    label={"name"}
                    value={name}
                    setValue={setName}
                    width={'300px'}/>
                <Input
                    label={"surname"}
                    value={surname}
                    setValue={setSurname}
                    width={'300px'}/>

                <Input
                    label={"nickname"}
                    value={nickname}
                    setValue={setNickname}
                    width={'300px'}/>
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
                        User.registration({name, surname, nickname, email, password}).then(
                            success => {
                                navigate('/')
                            },
                            err => {
                                console.log(err)
                            }
                        )
                    }}
                >
                    Создать
                </Button>
                <p>Уже есть аккаунт? <Link to={'/login'}><LinkStyled>Войти</LinkStyled></Link></p>
            </FormStyled>
        </RegistrationStyled>
    );
};

export default Registration;