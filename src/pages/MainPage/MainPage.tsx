import React, {useEffect, useState} from 'react';
import {MainPageStyled, Title, BG, Row, Law} from "./MainPage.styled";
import Slide from "../../components/Slide/Slide";
import gsap from "gsap"
import Button from "../../ui/Button/Button";

const MainPage = () => {

    const [bgNumber, setBgNumber] = useState(0)
    const [bgNumberAfterBlur, setBgNumberAfterBlur] = useState(1)
    const tl = gsap.timeline()

    useEffect(() => {
        tl.to('#bg', {
            opacity: 0,
            duration: .3
        }).then(() => {
            setBgNumberAfterBlur(bgNumber)
        }).then(() => {
            tl.to('#bg', {
                opacity: 1,
                duration: .5
            })
        })
    }, [bgNumber])

    return (
        <MainPageStyled>
            <BG $bgNumber={bgNumberAfterBlur} id={'bg'}/>
            <Slide id={0}
                   onVisibleAdd={() => {
                       setBgNumber(0)
                   }}
            >
                <Title $backLite={true} $size={'big'}>Цифровые</Title>
                <Title $backLite={true} $size={'big'}>Финансовые</Title>
                <Title $backLite={true} $size={'big'}>Активы</Title>
            </Slide>
            <Slide id={1}
                   justifyContent={'space-around'}
                   onVisibleAdd={() => {
                       setBgNumber(1)
                   }}>
                <Title $size={'big'}>Что это? &#129320;</Title>
                <Title $backLite={true}>Цифровые финансовые активы (ЦФА) — это новый тип финансовых инструментов,
                    основанный на использовании цифровых прав. Более функциональный,
                    гибкий и быстрый в работе, чем традиционные финансовые инструменты.
                    Это стало возможным благодаря технологиям, лежащим в основе ЦФА — блокчейну,
                    смарт-контрактам и криптографии.</Title>
            </Slide>
            <Slide id={2}
                   justifyContent={'space-around'}
                   onVisibleAdd={() => {
                       setBgNumber(2)
                   }}
            >
                <Title $size={'big'}>Как это работает?</Title>
                <img src={require('../../images/diagram.png')}/>
            </Slide>
            <Slide
                id={3}
                justifyContent={'space-around'}
                onVisibleAdd={() => {
                    setBgNumber(3)
                }}
            >
                <Title $size={'big'}>Юридические основы</Title>
                <Row>
                    <Law>
                        <h3>Закон №115-ФЗ от 07.08.2001</h3>
                        <p>"О противодействии легализации (отмыванию) доходов,
                            полученных преступным путем,
                            и финансированию терроризма"</p>
                    </Law>
                    <Law>
                        <h3>Закон №259-ФЗ от 02.08.2019</h3>
                        <p>"О привлечении инвестиций с использованием инвестиционных
                            платформ и о внесении изменений в отдельные
                            законодательные акты Российской Федерации"
                        </p>
                    </Law>
                    <Law>
                        <h3>Закон №259-ФЗ от 31.07.2020</h3>
                        <p>«О цифровых финансовых активах, цифровой валюте
                            и о внесении изменений в отдельные
                            законодательные акты Российской Федерации»</p>
                    </Law>
                </Row>
            </Slide>
            <Slide id={4}
                   onVisibleAdd={() => {
                       setBgNumber(4)
                   }}
            >
                <Title $size={'big'}> <Button onClick={() => {}}>Создать свой ЦФА</Button></Title>
            </Slide>

        </MainPageStyled>
    );
};

export default MainPage;