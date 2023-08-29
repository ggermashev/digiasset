import React, {FC, Fragment, useState} from 'react';
import {FooterStyled, Row, Info, Description, Contacts, PersonalInfoStyled} from "./Footer.styled";
import ModalWindow from "../ModalWindow/ModalWindow";
import {Link} from "react-router-dom";

interface ITeammate {
    photo?: string,
    name?: string,
    surname?: string,
    role?: string,
    description?: string,
    tgNickname?: string,
    tgLink?: string,
    email?: string,
}

interface IPersonalInfo extends ITeammate {
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void,
}

const PersonalInfo: FC<IPersonalInfo> = ({
                                             photo,
                                             name,
                                             surname,
                                             role,
                                             description,
                                             tgNickname,
                                             tgLink,
                                             email,
                                             isVisible, setIsVisible
                                         }) => {

    return (
        <PersonalInfoStyled>
            <ModalWindow isVisible={isVisible} setIsVisible={setIsVisible}>
                <Info>
                    <img src={photo}/>
                    <div>
                        <h2>{name} {surname}</h2>
                        <p>{role}</p>
                    </div>
                </Info>
                <Description>{description}</Description>
                <h4>По вопросам сотрудничества:</h4>
                <Contacts>
                    <p>email: {email}</p>
                    <p>telegram: <a href={tgLink} target={"_blank"}>{tgNickname}</a></p>
                </Contacts>
            </ModalWindow>
        </PersonalInfoStyled>
    )
}

const Footer = () => {

    const teammates: ITeammate[] = [
        {
            photo: `${require('../../images/vladimir.jpg')}`,
            name: 'Владимир',
            surname: 'Зворыгин',
            role: 'TeamLead',
            description: 'Стэк технологий: Java / Kotlin, Python Django/Flask',
            tgNickname: '@WocherZ',
            tgLink: 'https://t.me/WocherZ',
            email: 'cay108@yandex.ru',
        },
        {
            photo: `${require('../../images/gregory.jpg')}`,
            name: 'Григорий',
            surname: 'Гермашев',
            role: 'Frontend-developer',
            description: 'Стэк технологий: TypeScript React',
            tgNickname: '@g_grm',
            tgLink: 'https://t.me/g_grm',
            email: 'ggermashev@gmail.com',
        },
        {
            photo: `${require('../../images/maxim.jpg')}`,
            name: 'Максим',
            surname: 'Резник',
            role: 'Backend-developer',
            description: 'Стэк технологий: Python Django / Flask',
            tgNickname: '@maximrez',
            tgLink: 'https://t.me/maximrez',
            email: 'maximrez@mail.ru',
        },
        {
            photo: `${require('../../images/konstantin.jpg')}`,
            name: 'Константин',
            surname: 'Новоселов',
            role: 'Инженер баз данных',
            description: 'Стэк технологий: PostgreSQL / Greenplum / Redis / Tarantool / ClickHouse / MongoDB',
            tgNickname: '@knstntnovoslv',
            tgLink: 'https://t.me/knstntnovoslv',
            email: 'knstntnovoslv@gmail.com',
        },
        {
            photo: `${require('../../images/dmitry.jpg')}`,
            name: 'Дмитрий',
            surname: 'Городилов',
            role: 'Аналитик',
            description: 'Стэк технологий: Python, PostgreSQL',
            tgNickname: '@notf1ex',
            tgLink: 'https://t.me/notf1ex',
            email: 'gorodgem@gmail.com',
        },

    ]

    const [currentTeammate, setCurrentTeammate] = useState<ITeammate>()
    const [infoIsVisible, setInfoIsVisible] = useState(false)

    return (
        <FooterStyled>
            <h1>Team <span style={{textShadow: 'black 0 0 .5em', color: 'white'}}>Axiom</span></h1>
            <Row>
                {teammates.map(tm =>
                    <Fragment key={tm.tgNickname}>
                        <h3
                            onClick={() => {
                                setCurrentTeammate(tm)
                                setInfoIsVisible(true)
                            }}
                        >
                            {tm.surname}
                            <p>{tm.name}</p>
                        </h3>
                    </Fragment>
                )}
            </Row>
            <PersonalInfo
                isVisible={infoIsVisible}
                setIsVisible={setInfoIsVisible}
                photo={currentTeammate?.photo}
                name={currentTeammate?.name}
                surname={currentTeammate?.surname}
                role={currentTeammate?.role}
                description={currentTeammate?.description}
                tgNickname={currentTeammate?.tgNickname}
                tgLink={currentTeammate?.tgLink}
                email={currentTeammate?.email}
            />
        </FooterStyled>
    );
};

export default Footer;