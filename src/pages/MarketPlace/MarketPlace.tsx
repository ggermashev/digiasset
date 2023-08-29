import React, {useCallback, useEffect, useState} from 'react';
import {MarketPlaceStyled, Filters, Products, Up, Border} from "./MarketPlace.styled";
import {useNavigate} from "react-router-dom";
import User from "../../store/User";
import {observer} from "mobx-react-lite";
import Select from "../../ui/Select/Select";
import Dfa from "../../components/Dfa/Dfa";
import {IDfa} from "../../types/types";
import DfaStore from '../../store/Dfa'

const MarketPlace = observer(() => {

    const navigate = useNavigate()

    const cats = ['Ценная бумага', 'Контракт', 'Договор', 'Другое']
    const confidences = ['Высокое', 'Низкое', 'Не определено']
    const payments = ['Деньги', 'ЦФА']
    const sorts = ['Дата выпуска', 'Цена']

    const [cat, setCat] = useState('Все')
    const [confidence, setConfidence] = useState('Все')
    const [payment, setPayment] = useState('Все')
    const [sortBy, setSortBy] = useState('Нет')

    const [dfa, setDfa] = useState<IDfa[]>()

    useEffect(() => {
        setTimeout(async () => {
            if (!User.isAuth) {
                navigate('/login')
            }
            await DfaStore.loadData({})
            setDfa(DfaStore.data)
        }, 500)

        window.scroll(0, 0)
    }, [])

    // const dfas: IDfa[] = [
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'Крутой стартап',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Контракт',
    //         confidence: 'Высокое',
    //         payment: 'ЦФА',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'Стартап неоч',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Договор',
    //         confidence: 'Низкое',
    //         payment: 'Деньги',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'Я тестирую!',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Ценная бумаги',
    //         confidence: 'Не определено',
    //         payment: 'ЦФА',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'qweqweqw',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Контракт',
    //         confidence: 'Высокое',
    //         payment: 'ЦФА',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'asdasdasd',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Договор',
    //         confidence: 'Низкое',
    //         payment: 'Деньги',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'zxczxczxczxc',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Ценная бумаги',
    //         confidence: 'Не определено',
    //         payment: 'ЦФА',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'fghfghfghfgh',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Контракт',
    //         confidence: 'Высокое',
    //         payment: 'ЦФА',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'hjkhjkhjkh',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Договор',
    //         confidence: 'Низкое',
    //         payment: 'Деньги',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    //     {
    //         image: require('../../images/ava.jpg'),
    //         title: 'uiouiouiouio',
    //         initial_price: 1000,
    //         price: 1500,
    //         category: 'Ценная бумаги',
    //         confidence: 'Не определено',
    //         payment: 'ЦФА',
    //         created_at: new Date().toLocaleDateString(),
    //         owner: {
    //             name: 'Иван',
    //             surname: 'Иванов',
    //             nickname: 'ivaivan',
    //             email: 'ivaivan@gmail.com',
    //
    //         }
    //     },
    // ]

    const onVisible = useCallback((isVisible: boolean) => {
        // if (isVisible) {
        //     setDfa([...dfa, ...dfas
        //     ])
        // }
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
        <MarketPlaceStyled>
            <Filters>
                <Select
                    className={'select'}
                    title={'Категория'}
                    defaultOption={'Все'}
                    options={cats}
                    value={cat}
                    setValue={setCat}
                />
                <Select
                    className={'select'}
                    title={'Доверие'}
                    defaultOption={'Все'}
                    options={confidences}
                    value={confidence}
                    setValue={setConfidence}
                />
                <Select
                    className={'select'}
                    title={'Оплата'}
                    defaultOption={'Все'}
                    options={payments}
                    value={payment}
                    setValue={setPayment}
                />
                <Select
                    className={'select'}
                    title={'Сортировать'}
                    defaultOption={'Нет'}
                    options={sorts}
                    value={sortBy}
                    setValue={setSortBy}
                />
            </Filters>
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
                        />
                        {i % 12 === 11 && i > 0 &&
                            <Up onClick={() => {window.scrollTo(0, 0)}}>Наверх</Up>
                        }
                    </>
                )}
                <Border id={"border"}/>
            </Products>
        </MarketPlaceStyled>
    );
});

export default MarketPlace;