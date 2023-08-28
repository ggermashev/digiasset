import React, {useEffect, useState} from 'react';
import {ProfileStyled, PersonalInfo, Data, Row, Collection, Switch} from "./Profile.styled";
import User from "../../store/User"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Button from "../../ui/Button/Button";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profile = observer( () => {

    const navigate = useNavigate()

    useEffect(() => {

        setTimeout(() => {
            if (!User.isAuth) {
                navigate('/login')
            }
        }, 500)

        window.scroll(0,0)

    }, [])

    const [switch_, setSwitch_] = useState<'my' | 'other'>('my')

    return (
        <ProfileStyled>
            <PersonalInfo>
                <div className={'img-container'}>
                    <CameraAltIcon/>
                    <img src={require('../../images/ava.jpg')}/>
                </div>
                <Data>
                    <h3>{User.name} {User.surname}</h3>
                    <Row>
                        <p>{User.email}</p>
                        <Button
                            onClick={() => {}}
                            theme={'dark'}
                        >Сменить пароль</Button>
                    </Row>
                </Data>
            </PersonalInfo>
            <Button id={'create-dfa'} onClick={() => {}} theme={'dark'}>Создать ЦФА</Button>
            <Collection>
                <h1>Коллекция</h1>
                <Switch $active={switch_}>
                    <Button
                        theme={switch_ === 'my' ? 'dark' : 'light'}
                        onClick={() => {
                            setSwitch_('my')
                        }}
                        id={'my'}
                    >
                        Мои
                    </Button>
                    <Button
                        theme={switch_ === 'other' ? 'dark' : 'light'}
                        onClick={() => {
                            setSwitch_('other')
                        }}
                        id={'other'}
                    >
                        Приобретенные
                    </Button>
                </Switch>
            </Collection>
        </ProfileStyled>
    );
});

export default Profile;