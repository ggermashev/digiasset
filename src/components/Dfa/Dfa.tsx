import React, {FC, useState} from 'react';
import {DfaStyled, Col, Publish} from "./Dfa.styled";
import {IDfa} from "../../types/types";
import Button from "../../ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {publishDfa, unPublishDfa} from "../../api/api";
import ModalWindow from "../ModalWindow/ModalWindow";
import Input from "../../ui/Input/Input";
import DfaStore from '../../store/Dfa'
import {observer} from "mobx-react-lite";

interface IDfaExt extends IDfa {
    className?: string,
    mayPublish?: boolean,
}

const Dfa: FC<IDfaExt> = observer(({
                                       id,
                                       name,
                                       image,
                                       description,
                                       initial_price,
                                       price,
                                       category,
                                       confidence,
                                       payment,
                                       created_at,
                                       owner,
                                       published,
                                       className,
                                       mayPublish,
                                   }) => {

    const navigate = useNavigate()

    const [newPrice, setNewPrice] = useState('')
    const [priceIsValid, setPriceIsValid] = useState(false)

    const [checked, setChecked] = useState(published)
    const [curPrice, setCurPrice] = useState(price)

    const [modalIsVisible, setModalIsVisible] = useState(false)

    return (
        <>
            <DfaStyled key={id} className={className} onClick={() => {
                navigate(`/dfa/${id}`)
            }}>
                <img src={require('../../images/ava.jpg')}/>
                <Col>
                    <h3>{name}</h3>
                    <p>Категория: <span style={{fontWeight: 'bold'}}>{category}</span></p>
                    {curPrice && <p>Цена: <span style={{fontWeight: 'bold'}}>{curPrice}</span></p>}
                </Col>
                <Col>
                    <p>Оплата: <span style={{fontWeight: 'bold'}}>{payment}</span></p>
                    <p>Доверие: <span style={{fontWeight: 'bold'}}>{confidence}</span></p>
                </Col>
                <Col>
                    <Button onClick={(e) => {
                        e?.stopPropagation()
                    }}>Владелец</Button>
                    <p>Выпущено: <span style={{fontWeight: 'bold'}}>{created_at.split(' ')[0]}</span></p>
                </Col>
                {mayPublish &&
                    <Publish>
                        <h4>Опубликовано</h4>
                        <input
                            type={'checkbox'}
                            checked={checked}
                            onChange={(e) => {
                                e.stopPropagation()
                                if (checked) {
                                    unPublishDfa(id as string).then(
                                        () => {
                                            setChecked(!checked)
                                        }
                                    )
                                } else {
                                    setModalIsVisible(true)
                                }
                            }}
                            onClick={(e) => {
                                e.stopPropagation()
                            }}
                        />
                    </Publish>
                }
            </DfaStyled>
            <ModalWindow isVisible={modalIsVisible} setIsVisible={setModalIsVisible}>
                <Input
                    label={'Цена'}
                    value={newPrice}
                    setValue={setNewPrice}
                    type={'only_digits'}
                    isValid={priceIsValid}
                    setIsValid={setPriceIsValid}
                />
                <Button onClick={(e) => {
                    e?.stopPropagation()
                    if (priceIsValid) {
                        publishDfa(id as string, newPrice).then(() => {
                            setChecked(!checked)
                            setModalIsVisible(false)
                            setNewPrice('')
                            setCurPrice(+newPrice)
                        })
                    }
                }}>Опубликовать</Button>
            </ModalWindow>
        </>
    );
});

export default Dfa;