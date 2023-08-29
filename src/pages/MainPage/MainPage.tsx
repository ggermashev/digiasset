import React, {useEffect, useState} from 'react';
import {MainPageStyled, Title, BG, Row, Law, Advantages} from "./MainPage.styled";
import Slide from "../../components/Slide/Slide";
import gsap from "gsap"
import Button from "../../ui/Button/Button";
import {useNavigate} from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate()

    const [bgNumber, setBgNumber] = useState(0)
    const [bgNumberAfterBlur, setBgNumberAfterBlur] = useState(1)
    const tl = gsap.timeline()

    useEffect(() => {
        const timer0 = setTimeout(() => {
            document.getElementById('slide-0')?.scrollIntoView()
        }, 500)
        const timer1 = setTimeout(() => {
            document.getElementById('slide-1')?.scrollIntoView()
        }, 2000)
        const timer2 = setTimeout(() => {
            document.getElementById('slide-2')?.scrollIntoView()
        }, 4000)
        const timer3 = setTimeout(() => {
            document.getElementById('slide-3')?.scrollIntoView()
        }, 6000)
        const timer4 = setTimeout(() => {
            document.getElementById('slide-4')?.scrollIntoView()
        }, 8000)
        const timer5 = setTimeout(() => {
            document.getElementById('slide-5')?.scrollIntoView({behavior: 'auto'})
        }, 10000)
        const timer6 = setTimeout(() => {
            document.getElementById('slide-6')?.scrollIntoView({behavior: 'auto'})
        }, 12000)
        const timer7 = setTimeout(() => {
            document.getElementById('slide-7')?.scrollIntoView({behavior: 'auto'})
        }, 14000)
        const timer8 = setTimeout(() => {
            document.getElementById('slide-0')?.scrollIntoView({behavior: 'auto'})
        }, 16000)

        const onScroll = () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
            clearTimeout(timer4)
            clearTimeout(timer5)
            clearTimeout(timer6)
            clearTimeout(timer7)
            clearTimeout(timer8)
        }

        window.addEventListener('wheel', onScroll)

        setTimeout(() => {
            window.removeEventListener('wheel', onScroll, true)
        }, 16500)

    }, [])

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
                   }}
            >
                <Title $size={'big'}>Что это? &#129320;</Title>
                <Title $backLite={true}>
                    ЦФА — это цифровые права, включающие денежные требования,
                    возможность осуществления прав по эмиссионным ценным бумагам,
                    права участия в капитале непубличного акционерного общества,
                    право требовать передачи эмиссионных ценных бумаг,
                    которые предусмотрены решением о выпуске ЦФА.
                </Title>
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
            <Slide
                id={4}
                onVisibleAdd={() => {
                    setBgNumber(4)
                }}
                justifyContent={'space-around'}
            >
                <Title $size={'big'} $backLite={true}>Почему ЦФА?</Title>
                <Advantages>
                    <Title>Обеспечивается различными активами</Title>
                    <Title>Можно совершать любые действия, предусмотренные законодательством РФ</Title>
                    <Title>Требования к эмитентам, инвесторам и операторами ЦФА закреплены законодательством</Title>
                    <Title>Эмитент ЦФА имеет обязательство перед инвесторами</Title>
                </Advantages>
            </Slide>
            <Slide
                id={5}
                onVisibleAdd={() => {
                    setBgNumber(4)
                }}
                justifyContent={'space-around'}
            >
                <Title $size={'big'} $backLite={true}>Выгода эмитентам</Title>
                <Advantages>
                    <Title>Прозрачное финансирование</Title>
                    <Title>Экономия времени</Title>
                    <Title>Все инвесторы на одной платформе</Title>
                    <Title>Сокращение затрат</Title>
                    <Title>Отсутствие посредников</Title>
                </Advantages>
            </Slide>
            <Slide
                id={6}
                onVisibleAdd={() => {
                    setBgNumber(4)
                }}
                justifyContent={'space-around'}
            >
                <Title $size={'big'} $backLite={true}>Выгода инвесторам</Title>
                <Advantages>
                    <Title>Минимальные комиссии</Title>
                    <Title>Обширный выбор инвестиционного риска</Title>
                    <Title>Отсутствие посредников</Title>
                    <Title>Все эмитенты на одной платформе</Title>
                </Advantages>
            </Slide>
            <Slide id={7}
                   onVisibleAdd={() => {
                       setBgNumber(5)
                   }}
                   justifyContent={'space-around'}
            >
                <Title $size={'big'}> <Button onClick={() => {
                    navigate('/profile')
                }}>Создать свой ЦФА</Button></Title>
                <Title $size={'big'}> <Button onClick={() => {
                    navigate('/marketplace')
                }}>Приобрести ЦФА</Button></Title>
            </Slide>

        </MainPageStyled>
    );
};

export default MainPage;