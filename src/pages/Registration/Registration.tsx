import React, {useState} from 'react';
import {RegistrationStyled, FormStyled, LinkStyled} from "./Registration.styled";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import {Link} from "react-router-dom";

const Registration = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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