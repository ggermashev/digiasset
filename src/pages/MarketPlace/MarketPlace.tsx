import React, {useEffect} from 'react';
import {MarketPlaceStyled} from "./MarketPlace.styled";
import {useNavigate} from "react-router-dom";
import User from "../../store/User";

const MarketPlace = () => {

    const navigate = useNavigate()

    useEffect(() => {

        if (!User.isAuth) {
            navigate('/login')
        }

    }, [])

    return (
        <MarketPlaceStyled>

        </MarketPlaceStyled>
    );
};

export default MarketPlace;