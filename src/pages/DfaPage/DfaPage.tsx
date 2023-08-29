import React, {useEffect, useState} from 'react';
import {DfaPageStyled, ShortInfo, LongInfo, AdditionalInfo, Owner, Row} from "./DfaPage.styled";
import ReplyIcon from '@mui/icons-material/Reply';
import Information from "../../ui/Information/Information";
import {IDfa} from "../../types/types";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../../ui/Button/Button";
import User from "../../store/User";
import {buyDfa, getDfaById, getDfaByUser} from "../../api/api";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

interface IPurchase {
    datetime: string,
    name: string,
    surname: string,
    nickname: string,
    price: string
}

const DfaPage = () => {

    const navigate = useNavigate()
    const dfa_id = useParams().dfa_id

    const [dfa, setDfa] = useState<IDfa>()
    const [purchases, setPurchases] = useState<IPurchase[]>()

    useEffect(() => {

        setTimeout(() => {
            if (!User.isAuth) {
                navigate('/login')
            }
            getDfaById(dfa_id as string).then(
                data => {
                    setDfa(data)
                    const purch = data.purchases
                    purch?.sort((a: IPurchase, b: IPurchase) => {
                        return a.datetime > b.datetime
                    })
                    setPurchases(purch)
                }
            )
        }, 500)

        window.scroll(0, 0)

    }, [])

    const [modalIsVisible, setModalIsVisible] = useState(false)

    return (
        <>
            <DfaPageStyled>
                <ShortInfo>
                    <ReplyIcon onClick={() => {
                        navigate(-1)
                    }}/>
                    <img src={require('../../images/ava.jpg')}/>
                    <h2>{dfa?.name}</h2>
                    <Row>
                        <Button theme={'dark'} onClick={() => {
                        }}>Купить</Button>
                        <Button theme={'dark'} onClick={() => {
                        }}>Предложить обмен</Button>
                    </Row>
                </ShortInfo>
                <LongInfo>
                    <p style={{color: 'white'}}>{dfa?.description}</p>
                    <h3>Дополнительная информация</h3>
                    <AdditionalInfo>
                        <Information title={"Стоимость"}>{dfa?.price}</Information>
                        <Information title={"Способ оплаты"}>{dfa?.payment}</Information>
                        <Information title={"Категория"}>{dfa?.category}</Information>
                        <Information title={"Доверие"}>{dfa?.confidence}</Information>
                        <Information
                            title={"Дата выпуска"}>{dfa?.created_at.split(', ')[1].split(' ').slice(0, 3).join(' ')}</Information>
                        <Information title={"ЦФА выпущено"}>{purchases?.[0].nickname}</Information>
                    </AdditionalInfo>
                    <Row>
                        <Button theme={'dark'} onClick={() => {
                            buyDfa(dfa_id as string).then(() => {
                                setModalIsVisible(true)
                            })
                        }}>Купить</Button>
                        <Button theme={'dark'} onClick={() => {
                        }}>Предложить обмен</Button>
                    </Row>
                    <h3>Владелец</h3>
                    <Owner>
                        <Information title={"Имя"}>{purchases?.[0].name}</Information>
                        <Information title={"Фамилия"}>{purchases?.[0].surname}</Information>
                        <Information title={"Имя пользователя"}>{purchases?.[0].nickname}</Information>
                    </Owner>
                    <h3>История цен</h3>

                    <h3>Предыдущие владельцы</h3>
                </LongInfo>
            </DfaPageStyled>
            <ModalWindow isVisible={modalIsVisible} setIsVisible={setModalIsVisible}>
                <h1>Покупка прошла успешно!</h1>
            </ModalWindow>
        </>
    );
};

export default DfaPage;