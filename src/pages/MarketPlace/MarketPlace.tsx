import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {MarketPlaceStyled, Filters, Products, Up, Border} from "./MarketPlace.styled";
import {useNavigate} from "react-router-dom";
import User from "../../store/User";
import {observer} from "mobx-react-lite";
import Select from "../../ui/Select/Select";
import Dfa from "../../components/Dfa/Dfa";
import {ICategory, IConfidence, IDfa, IPayment, ISortBy} from "../../types/types";
import DfaStore from '../../store/Dfa'

const MarketPlace = observer(() => {

    const navigate = useNavigate()

    const cats: ICategory[] = ['Ценная бумага', 'Контракт', 'Договор', 'Другое']
    const confidences: IConfidence[] = ['Высокое', 'Низкое', 'Не определено']
    const payments: IPayment[] = ['Деньги', 'ЦФА']
    const sorts: ISortBy[] = ['Дата выпуска', 'Цена']

    const [cat, setCat] = useState<ICategory | 'Все'>('Все')
    const [confidence, setConfidence] = useState<IConfidence | 'Все'>('Все')
    const [payment, setPayment] = useState<IPayment | 'Все'>('Все')
    const [sortBy, setSortBy] = useState<ISortBy | 'Нет'>('Нет')

    const [dfa, setDfa] = useState<IDfa[]>()

    useEffect(() => {
        setTimeout(async () => {
            if (!User.isAuth) {
                navigate('/login')
            }
            await DfaStore.loadData({category: cat, confidence, payment, sortBy, limit: 6})
            setDfa(DfaStore.data)
        }, 500)

        window.scroll(0, 0)
    }, [])


    useEffect(() => {

        (async () => {
            await DfaStore.loadData({category: cat, confidence, payment, sortBy, limit: 6})
            setDfa(DfaStore.data)
        })()
    }, [cat, confidence, payment, sortBy])


    const onVisible = useCallback((isVisible: boolean) => {
        (async () => {
            if (isVisible && dfa && dfa.length > 0) {
                console.log(dfa?.length)
                await DfaStore.addData({category: cat, confidence, payment, sortBy, offset: dfa?.length, limit: 6})
            }
        })()
    }, [dfa, cat, confidence, payment, sortBy])

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
                {/*<Select*/}
                {/*    className={'select'}*/}
                {/*    title={'Сортировать'}*/}
                {/*    defaultOption={'Нет'}*/}
                {/*    options={sorts}*/}
                {/*    value={sortBy}*/}
                {/*    setValue={setSortBy}*/}
                {/*/>*/}
            </Filters>
            <Products>
                {dfa?.map((dfa, i) =>
                    <Fragment key={dfa.id}>
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
                            <Up onClick={() => {
                                window.scrollTo(0, 0)
                            }}>Наверх</Up>
                        }
                    </Fragment>
                )}
                <Border id={"border"}/>
            </Products>
        </MarketPlaceStyled>
    );
});

export default MarketPlace;