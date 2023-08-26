import React from 'react';
import {FooterStyled, Row} from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyled>
            <h1>Team <span style={{textShadow: 'black 0 0 .5em', color: 'white'}}>Axiom</span></h1>
            <Row>
                <h3>Зворыгин <p>Владимир</p></h3>
                <h3>Гермашев <p>Григорий</p></h3>
                <h3>Резник <p>Максим</p></h3>
                <h3>Новоселов <p>Константин</p></h3>
                <h3>Городилов <p>Дмитрий</p></h3>
            </Row>
        </FooterStyled>
    );
};

export default Footer;