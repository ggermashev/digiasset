import React from 'react';
import {HeaderStyled, Container} from "./Header.styled";
import MenuIcon from '@mui/icons-material/Menu';
import {Link, useParams} from "react-router-dom";

const Header = () => {

    return (
        <HeaderStyled>
            <Container>
                <Link className={"link"} to={"/"}>Главная</Link>
            </Container>
            <Container>
                <Link className={"link"} to={"/login"}>Вход</Link>
                <MenuIcon className={"menu-icon"}/>
            </Container>
        </HeaderStyled>
    );
};

export default Header;