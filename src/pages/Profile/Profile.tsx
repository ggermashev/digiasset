import React, {useCallback, useEffect, useState} from 'react';
import {ProfileStyled, PersonalInfo, Data, Row, Collection, Switch, Products, Border, Up} from "./Profile.styled";
import User from "../../store/User"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Button from "../../ui/Button/Button";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Dfa from "../../components/Dfa/Dfa";
import {IDfa} from "../../types/types";
import DfaStore from '../../store/Dfa'

const Profile = observer( () => {

    const navigate = useNavigate()

    const [dfa, setDfa] = useState<IDfa[]>()

    useEffect(() => {

        setTimeout(async () => {
            if (!User.isAuth) {
                navigate('/login')
            }
            await DfaStore.loadByUser()
            setDfa(DfaStore.data)
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
                    <Row>
                        <Button onClick={() => {}}>Стать эмитентом</Button>
                        <Button onClick={() => {}}>Стать инвестором</Button>
                    </Row>
                </Data>
            </PersonalInfo>
            <Button id={'create-dfa'} onClick={() => {
                navigate('/create-dfa')
            }} theme={'dark'}>Создать ЦФА</Button>
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
                <Products>
                    {dfa?.map((dfa, i) =>
                        <>
                            <Dfa
                                id={dfa.id}
                                className={'dfa'}
                                image={dfa.image}
                                key={dfa.id}
                                name={dfa.name}
                                initial_price={dfa.initial_price}
                                price={dfa.price}
                                category={dfa.category}
                                confidence={dfa.confidence}
                                payment={dfa.payment}
                                created_at={dfa.created_at}
                                owner={dfa.owner}
                                published={dfa.published}
                                mayPublish={true}
                            />
                            {i % 12 === 11 && i > 0 &&
                                <Up onClick={() => {window.scrollTo(0, 0)}}>Наверх</Up>
                            }
                        </>
                    )}
                    <Border id={"border"}/>
                </Products>
            </Collection>
        </ProfileStyled>
    );
});

export default Profile;