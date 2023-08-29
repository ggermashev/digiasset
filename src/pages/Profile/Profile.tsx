import React, {useCallback, useEffect, useState} from 'react';
import {ProfileStyled, PersonalInfo, Data, Row, Collection, Switch, Products, Border, Up} from "./Profile.styled";
import User from "../../store/User"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Button from "../../ui/Button/Button";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Dfa from "../../components/Dfa/Dfa";
import {IDfa} from "../../types/types";

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

    const dfas: IDfa[] = [
        {
            image: require('../../images/ava.jpg'),
            title: 'Крутой стартап',
            initial_price: 1000,
            price: 1500,
            category: 'Контракт',
            confidence: 'Высокое',
            payment: 'ЦФА',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'Стартап неоч',
            initial_price: 1000,
            price: 1500,
            category: 'Договор',
            confidence: 'Низкое',
            payment: 'Деньги',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'Я тестирую!',
            initial_price: 1000,
            price: 1500,
            category: 'Ценная бумаги',
            confidence: 'Не определено',
            payment: 'ЦФА',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'qweqweqw',
            initial_price: 1000,
            price: 1500,
            category: 'Контракт',
            confidence: 'Высокое',
            payment: 'ЦФА',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'asdasdasd',
            initial_price: 1000,
            price: 1500,
            category: 'Договор',
            confidence: 'Низкое',
            payment: 'Деньги',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'zxczxczxczxc',
            initial_price: 1000,
            price: 1500,
            category: 'Ценная бумаги',
            confidence: 'Не определено',
            payment: 'ЦФА',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'fghfghfghfgh',
            initial_price: 1000,
            price: 1500,
            category: 'Контракт',
            confidence: 'Высокое',
            payment: 'ЦФА',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'hjkhjkhjkh',
            initial_price: 1000,
            price: 1500,
            category: 'Договор',
            confidence: 'Низкое',
            payment: 'Деньги',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
        {
            image: require('../../images/ava.jpg'),
            title: 'uiouiouiouio',
            initial_price: 1000,
            price: 1500,
            category: 'Ценная бумаги',
            confidence: 'Не определено',
            payment: 'ЦФА',
            created_at: new Date().toLocaleDateString(),
            owner: {
                name: 'Иван',
                surname: 'Иванов',
                nickname: 'ivaivan',
                email: 'ivaivan@gmail.com',

            }
        },
    ]

    const [dfa, setDfa] = useState<IDfa[]>(dfas.slice(0, 12))

    const onVisible = useCallback((isVisible: boolean) => {
        if (isVisible) {
            setDfa([...dfa, ...dfas
            ])
        }
    }, [dfa])

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };
        let observer = new IntersectionObserver(entry => {
            onVisible(entry[0].isIntersecting)
        }, options);
        observer.observe(document.querySelector(`#border`) as Element)

        return () => {
            observer.disconnect()
        }
    }, [dfa])

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
                    {dfa.map((dfa, i) =>
                        <>
                            <Dfa
                                className={'dfa'}
                                image={dfa.image}
                                key={dfa.title}
                                title={dfa.title}
                                initial_price={dfa.initial_price}
                                price={dfa.price}
                                category={dfa.category}
                                confidence={dfa.confidence}
                                payment={dfa.payment}
                                created_at={dfa.created_at}
                                owner={dfa.owner}
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